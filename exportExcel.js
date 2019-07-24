/*
vue + element 表格导出Excel文件
 使用条件：
 	1.安装 file-saver
 		npm install file-saver --save
 	2.安装 xlsx
 		npm install xlsx
 	3.在main.js中全局注册
 		import {exportExcel} from '@/utils/exportExcel';
		Vue.prototype.$exportExcel=exportExcel; 
 */
import FileSaver from 'file-saver'
import XLSX from 'xlsx'

// 导出Excel 需要传入文件名(可传国际化)和需导出表格的id
const exportExcel = (id,name) => {
    /* generate workbook object from table */
    var wb = XLSX.utils.table_to_book(document.querySelector('#'+id))
    /* get binary string as output */
    var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' })
    try {
        FileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), name+'_caping_ccsp' + '.xlsx')
    } catch (e) { if (typeof console !== 'undefined') console.log(e, wbout) }
    return wbout
}

export {exportExcel}