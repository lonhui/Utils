  /*获取网址参数,name为网址中的参数键值*/
   const getURL = (name) => {
      var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if(r!=null) return r[2]; return null;
    }
     
    /*获取全部url参数,并转换成json对象*/
    const getUrlAllParams = (url) => {
      var url = url ? url : window.location.href;
      var _pa = url.substring(url.indexOf('?') + 1),
        _arrS = _pa.split('&'),
        _rs = {};
      for (var i = 0, _len = _arrS.length; i < _len; i++) {
        var pos = _arrS[i].indexOf('=');
        if (pos == -1) {
          continue;
        }
        var name = _arrS[i].substring(0, pos),
          value = window.decodeURIComponent(_arrS[i].substring(pos + 1));
        _rs[name] = value;
      }
      return _rs;
    }
     
    /*删除url指定参数，返回url*/
   const delParamsUrl = (url, name) => {
      var baseUrl = url.split('?')[0] + '?';
      var query = url.split('?')[1];
      if (query.indexOf(name)>-1) {
        var obj = {}
        var arr = query.split("&");
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].split("=");
          obj[arr[i][0]] = arr[i][1];
        };
        delete obj[name];
        var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
        return url
      }else{
        return url;
      }
    }

    export{
      getURL,
      getUrlAllParams,
      delParamsUrl
    }