// 全局url
var url = "http://192.168.43.51/smmp/";
// 全局ajax请求配置
$.ajaxSetup({
	dataType: "json",
	headers: {
		"userToken": localStorage.getItem("userToken")
	}
});

/**
 * 获取url里面的参数(name)
 *
 **/
function getUrlParam(name) {
   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
   var r = encodeURI(window.location.search).substr(1).match(reg);  //匹配目标参数
   if (r != null)
	   return decodeURI(unescape(r[2]));
   return null; //返回参数值
}