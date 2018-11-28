// 全局url
var url = "http://127.0.0.1:8089/smmp/";

// 全局ajax请求配置
$.ajaxSetup({
	dataType: "json",
	headers: {
		"userToken": localStorage.getItem("userToken")
	}
});

/**
 * 获取url里面的参数(name)
 **/
function getUrlParam(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
  var r = encodeURI(window.location.search).substr(1).match(reg);  //匹配目标参数
  if (r != null)
	  return decodeURI(unescape(r[2]));
  return null; //返回参数值
}

/**
 * 格式化时间戳
 */
function formatDate(time){
	var date = new Date(time);
	var ymd = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
	var hms = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
	var ymdhms = ymd + " " + hms;
	return ymdhms;
}

// 多选框选中值代码
$("[type='checkbox']").click(function() {
    if (this.checked){
        $(this).val("必填");
    } else{
        $(this).val("非必填");
    }
});
