export default {
    // 获取浏览器地址栏参数值
    getUrlParam(name) {
        let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
        let result = window.location.search.substr(1).match(reg);
        if (result != null) return decodeURIComponent(result[2]); 
    }
}