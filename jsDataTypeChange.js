/**
 * 字符串转json
 */
const stringToJson = (jsonStr: String) => {
    return JSON.parse(jsonStr);
}

/**
 * json转字符串
 */
const jsonToString = (data): String => {
    return JSON.stringify(data);
}

/**
 * map转换为json
 */
const mapToJson = (map): String => {
    return JSON.stringify(strMapToObj(map));
}

/**
 * json转换为map
 */
const jsonToMap = (jsonStr: String) => {
    return objToStrMap(JSON.parse(jsonStr));
}

/**
 * map转化为对象（map所有键都是字符串，可以将其转换为对象）
 */
const strMapToObj = (strMap) => {
    let obj = Object.create(null);
    for (let [k, v] of strMap) {
        obj[k] = v;
    }
    return obj;
}

/**
 * 对象转换为Map
 */
const objToStrMap = (obj) => {
    let strMap = new Map();
    for (let k of Object.keys(obj)) {
        strMap.set(k, obj[k]);
    }
    return strMap;
}

export {stringToJson,jsonToString,mapToJson,jsonToMap,strMapToObj,objToStrMap}