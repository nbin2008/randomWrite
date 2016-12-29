
//过滤重复数组对象
function filter(data){
    let re = [];
    let tmp = {};
    data.forEach(function(v,i){
        if( tmp[v['appId']] == void 0 ){
            tmp[v['appId']] = 1;
            re.push(v);
        }
    });
    return re;
};




//重组数组 补贴为空 占位
var _arr = [];

for (var i = 0; i < bodyVM.tQregionData.length; i++) {
	_arr[i] = bodyVM.tQregionData[i].crowdList.slice(0);
	for (var k = 0; k < 10-bodyVM.tQregionData[i].crowdList.length; k++) {
		_arr[i].push({
			crowdId:'',
			crowdList:'',
			crowdName:''
		})
	}
}

console.log(_arr)

//字符串截取指定位置
var str = "这是一段话_很好的一段话！";
str = str.substr(0, str.indexOf('_'));
alert(str);

//合并数组
var arr1 = [1,2,3,4,5,6];
var arr2 = [10,20,30];
Array.prototype.push.apply(arr1, arr2);  
console.log(arr1)

//向上抛事件
headerVM.$watch('userName',function(userName){
	 headerVM.$fire('up!aaaa',userName);
})

headerVM.$watch('aaaa',function(userName){
	 alert("做事");
})

var aa = {
	$fnClick:function(){
	
	},
}

powerHandle.on("showTips", function (i) {
    application.$tipsModule(i);
});

this.emit("showTips",11);

//模块化
module.exports = aa ;

var base = require("../util/base");

base.$fnClick()


//保留小数点后两位
function toDecimal(x) {  
	var f = parseFloat(x);  
	if (isNaN(f)) {  
		return;  
	}  
	f = Math.round(x*100)/100;  
	return f;  
}

{{el.itemCoverNums ? (el.itemCoverNums == -9999 ? '-' : el.itemCoverNums) : '-' }}

//npm install -g css-combo 安装 CSS 压缩

//csscombo index.css index-nologin.min.css --compress 生成css 压缩包

arr.slice(0,5)  // 取数组前5条

var now = new Date();
var res = [];
var len = 10;
while (len--) {
	res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
	now = new Date(now - 2000);
}

var restime = [];
var lenc = 10;
while (lenc--) {
	restime.push((Math.random()*10 + 5).toFixed(1) - 0);
}
	

flexible.js

encodeURI(areaDetailVM.currentDate.replace(/年/g,"-").replace(/月/g,"-01")) //正则匹配年月 -

+s > +e // 字符串数字 转 数字 “+”

.substring(0,7) //截取字符串

{{el.summary.length>60 ? el.summary.substring(0,60)+'...' : el.summary}}   //avalon 截取字符长度

time.substr(time.length-1) // 获取字符最后一个字符

var str1 = JSON.parse(obj);  //JSON 字符串 转 对象

typeof 判断类型 

//对象
var clickFn = (function(){
	var obj = {};
	obj.list1 = '1'
	obj.list2 = '2'
	obj.list3 = '3'
	return obj
})()



let arr1 = [9,2,3,4,10],
	arr2 = [2,3,4,5,6];
let arr = [arr1,arr2];
function count(arr){
	let tmp = [];
	//[[9,2],[2,3]...]
	arr[0].forEach(function(v,i){
		tmp.push([]);
	})
	arr.forEach(function(v,i){
		v.forEach(function(v2,i2){
			tmp[i2].push(v2);
		})
	});
	return tmp;
}

let re = count(arr);

[9,2],
[2,3],
[3,4],
...



//遍历对象属性
download.allPrpos = function(obj){
	// 用来保存所有的属性名称和值
	var props = "";
	// 开始遍历
	for(var p in obj){ 
		// 方法
		if(typeof(obj[p])=="function"){ 
			obj[p]();
		}else{ 
			// p 为属性名称，obj[p]为对应属性的值
			props+= p + "=" + obj[p] + "&";
		} 
	} 
	// 最后显示所有的属性删掉最后一个 &
	return props.substring(0, props.length - 1);
}

//<a href="javascript:" title="" ms-class="{{signUpType(el.startTime,el.endTime,'cla')}}">{{signUpType(el.startTime,el.endTime,'txt')}}</a>

signUpType:function(startTime,endTime,type){
	var classs = '';
	var	txt = '';

	var currentTime = new Date().getTime();
	if( startTime > currentTime ){
		tradUserVM.signUpclass = 0
		txt = '未开始';
		classs = 'btn-signup btn-no-signup';
	}else if( endTime < currentTime ){
		tradUserVM.signUpclass = 1
		txt = '已结束';
		classs = 'btn-signup btn-no-signup';
	}else{
		tradUserVM.signUpclass = 2
		txt = '进行中';
		classs = 'btn-signup ';
	}
	if( type == 'cla' ){
		return classs;
	}else if( type == 'txt' ){
		return txt;
	};

},

_name_selected = {}

//for 循环 插入 [name[i]] 对象
_name_selected[name[i]] = false;


s ? $(this).addClass('sortDown') : $(this).addClass('sortUp');

// s 为真 执行 第一个 // s 为假 执行 第二个 












//取倒数第几到第几的数据
for (var i = data.resultMap.myMenus.length - 1; i >= data.resultMap.myMenus.length - 5; i--) {
	accounts1VM.firstMenuMoreArr.push(data.resultMap.myMenus[i]);
}



$(function(){
	$("#aaaa").keydown(function(e){ 
		var curKey = e.which; 
		if(curKey == 13){ 
			alert("aa");
			return false; 
		} 
	}); 

})

$("input[name=marketing]:checked").val() // radio选中值


_linksMore:function(e){
	var _val = $(e.currentTarget).data('id'); // 选中的当前的元素
	
},



//获取日期格式化
Date.prototype.Format = function (fmt) { //author: meizz 
	var o = {
		"M+": this.getMonth() + 1, //月份 
		"d+": this.getDate(), //日 
		"h+": this.getHours(), //小时 
		"m+": this.getMinutes(), //分 
		"s+": this.getSeconds(), //秒 
		"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
		"S": this.getMilliseconds() //毫秒 
	};
	if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	for (var k in o)
	if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
	return fmt;
}

//date
var start = {
	elem: '#starttime',
	format: 'YYYY-MM-DD hh:mm:ss',
	isclear: false,
	istime: true,
	istoday: false,
	choose: function(datas){
		var selDate = new Date(datas);
		selDate.setDate(selDate.getDate() + 30);
		end.max = selDate.Format("yyyy-MM-dd 23:59:59");
	}
};
var end = {
	elem: '#endtime',
	format: 'YYYY-MM-DD 23:59:59',
	isclear: false,
	istime: true,
	istoday: false,
	choose: function(datas){
		var selDate = new Date(datas);
		selDate.setDate(selDate.getDate() - 30);
		start.min = selDate.Format("yyyy-MM-dd 00:00:00");
	}
};


$(".infoList").append("<li><p><span style='padding-right:8px;'>"+obj.optTime.datetime+"</span>"+obj.notificationInfo.title+"<a href='javascript:void(0)' onClick='ejbrowse(" + obj.id + ",\"" + obj.notificationInfo.title + "\",\"" + obj.notificationInfo.description + "\")'"+">more>></a></p></li>"); //字符串转义

//单个对象 执行多次事件
 var clickCount=0;
 $(function(){
	$("#a").click(function(){
	switch(clickCount){
		case 0:alert("1");break;
		case 1:alert("2");break;	
		case 2:alert("3");break;	
		default:alert("error");
	}
		clickCount++;
		if(clickCount>=3){
		clickCount=0;
		}
	})
 })

$(".form-setPower .dlist").each(function(i,obj){
				//全选,
	$(obj).find(".Parent").find("input").bind("click", function(){
		$(obj).find("[name = checkbox]:checkbox").attr("checked", this.checked);
	});
})




//children 向下遍历 $("#aaa").children("#bbb"); 只拿下一级
//find 向下遍历 $("#aaa").children("#aaa") 拿任何一个下级

onClick="ejconfin(' + item.id + ',\'' + item.accountType + '\')" // 字符串 转义

Disabled n

Enabled y

&lp_id=


push()

var a = eval("(" + data + ")");
alert(a.success);

Josn 转 JS字符串命令

//有对象 就有 属性和方法

//获取DIV长度
var $docdiv = $('#httpDiv dl').length;
				var urlss = "";
				for (i = 1; i <= $docdiv; i++) {
					var urls = $("#url_"+i).val();
					urlss = i+ "|" + urls + ";" + urlss;
				}

//获取DIV长度
var $docdiv = $('#httpDiv dl').length;
				var $urlss = "";
				for (i = 1; i <= $docdiv; i++) {
					var urls = $("#url_"+i).val();
					$urlss = i+ "|" + urls + ";" + $urlss;
				}
				
				var $RevenueTypeDiv = $('#RevenueTypeDiv dl').length;
				var prices = "";
				for (i = 0; i < $RevenueTypeDiv; i++) {
					var RevTypeId = $("#RevenueTypeDiv dl:eq("+i+") input").attr("text");
					var RevTypeRevenue = $("#RevenueTypeDiv dl:eq("+i+") input").val();
					var RevTypePayout = $("#RevenueTypeDiv2 dl:eq("+i+") input").val();
					prices = RevTypeId+":"+RevTypePayout+":"+RevTypeRevenue+";"+prices;
				}

function(val,item){
	return '<a href="/offer/editOffer?id='+item.offerId+'" title="">'+item.offerName+'</a>'
}

var $allListElements = $('li');
$('li.item-ii').find( $allListElements ).css('background-color', 'red');

parseInt()  //取整数

//12，2222,33,1,1，
function cutStr(cutStrValue){
  return cutStrValue.split("").reverse().join("").replace(/(\d{3})(?=[^$])/g, "$1,").split("").reverse().join(""); 
}
//href="([^"]+)"  正则替换 链接


//对象选择器 {box-shadow:投影方式 X轴偏移量 Y轴偏移量 阴影模糊半径 阴影扩展半径 阴影颜色}
(1)required:true                必输字段
(2)remote:"check.php"      使用ajax方法调用check.php验证输入值
(3)email:true                    必须输入正确格式的电子邮件
(4)url:true                        必须输入正确格式的网址
(5)date:true                      必须输入正确格式的日期 日期校验ie6出错，慎用
(6)dateISO:true                必须输入正确格式的日期(ISO)，例如：2009-06-23，1998/01/22 只验证格式，不验证有效性
(7)number:true                 必须输入合法的数字(负数，小数)
(8)digits:true                    必须输入整数
(9)creditcard:                   必须输入合法的信用卡号
(10)equalTo:"#field"          输入值必须和#field相同
(11)accept:                       输入拥有合法后缀名的字符串（上传文件的后缀）
(12)maxlength:5               输入长度最多是5的字符串(汉字算一个字符)
(13)minlength:10              输入长度最小是10的字符串(汉字算一个字符)
(14)rangelength:[5,10]      输入长度必须介于 5 和 10 之间的字符串")(汉字算一个字符)
(15)range:[5,10]               输入值必须介于 5 和 10 之间
(16)max:5                        输入值不能大于5
(17)min:10                       输入值不能小于10

//loading 100%
		var n = 1;
		function name1() {
			n++;
			$(".loadingText strong").html(n + '%');	
			if(n==100){
			    clearInterval(aa);
			}
		}
		var aa = setInterval(name1,20);

$("#b01").click(function(){
  htmlobj=$.ajax({url:"/jquery/test1.txt",async:false});
  $("#myDiv").html(htmlobj.responseText);
  });


  //使用 AJAX 的 GET 请求来改变 div 元素的文本：
  $("button").click(function(){
	  //get获取URL连接 result 页面返回值
  $.get("demo_ajax_load.asp?aaaa=1", function(result){
    $("div").html(result);
  });
});

var zhengque = "成功"；
var cuowu = "错误"；

$.ajax({   
	type:'post',//可选get   
	url:'action.php',//这里是接收数据的PHP程序   
	data:'data='dsa', //传给PHP的数据，多个参数用&连接   
	dataType:'Json',//服务器返回的数据类型 可选XML ,Json jsonp script html text等   
	success:function(msg){ 
		alert(zhengque);
	},   
	error:function(){   
		alert(cuowu);
	}   
})

//cnt=string1 执行string1内容
 switch(cnt) {
	case ("string1"):
	...
	break;
	case ("string2"):
	...
	break;
	case ("string3"):
	...
	break;
	default:
	...
}

function getReturnAjax{ 
$.ajax({ 
type:"POST", 
url:"ajax/userexist.aspx", 
//参数 = 参数所带的值
data:"username="+vusername.value, 
success:function(msg){ 

var offerId = '${offerId}';
	var offers = '${offers}';
	var obj = eval(offers);
	for (i = 0; i < obj.length; i++){
		$("#offer").append("<option value="+obj[i].OFFER_ID+" h="+obj[i].PSTBK_URL+">"+obj[i].OFFER_NAME+"</option>");
	};
	$('#offer').change(function(){
		var $cc = $(this).children('option:selected').attr("h");
	$("#testLink").val($cc);
}) 

//
$.each(msg.employees,function(i,d){
	$(".ul").appendTo("<li>"+(i+1)+"、姓："+d.firstName+"</li>")
});

java

if(msg=="ok"){ 
	showtipex(vusername.id,"<img src='images/ok.gif'/><b><font color='#ffff00'>该用户名可以使用</font></b>",false) 
return true; 
} 
else 
{ 
showtipex(vusername.id,"<img src='images/cancel.gif'/><b><font color='#ffff00'>该用户已被注册</font></b>",false); 
	vusername.className="bigwrong"; 
return false; 
} 
alert("abc")
} 
}); 
} 



{
"employees": [
{ "firstName":"Bill" , "lastName":"Gates" },
{ "firstName":"George" , "lastName":"Bush" },
{ "firstName":"Thomas" , "lastName":"Carter" }
]
}

var _Todayhour = [];  // 创建数组
	$.each(data,function(i,obj){
		_Todayhour.push(obj.hour + ":00") //循环出来 push 插入
	});


$(document).ready(function(){
  $("#txt").ajaxStart(function(){
    $("#wait").css("display","block");
  });
  $("#txt").ajaxComplete(function(){
    $("#wait").css("display","none");
  });
  $("button").click(function(){
    $("#txt").load("/example/jquery/demo_ajax_load.asp");
  });
});

//参数
//name=

//字符串

		$(function(){
var ss=
{
"employees": [
{ "firstName":"Bill" , "lastName":"Gates" },
{ "firstName":"George" , "lastName":"Bush" },
{ "firstName":"Thomas" , "lastName":"Carter" }
],"pages":"3"
};
$.each(ss.employees,function(i,d,dx){
var indexs=i;
var obj=d;

});
		});



//动态生成 动态删除

var a = 3;
	function addUrl() {
            var dd = $("#btn-tips-hover").parents(".dl-horizontal");
            var addImg = $("#btn-tips-hover").prop("outerHTML");
            dd.after('<dl  text="preview" class="dl-horizontal">'
				+ '<dt> <span name="ids">' + (a) + '</span># Preview URL：</dt>'
				+ '<dd>'
				+ '<input id="previewUrl_' + (a) + '" name="previewUrl_' + (a) + '" type="text" class="form-input" value="http://" style="width:496px;margin-right:7px;" data-rule-required="true" data-msg-required="Please select the Url" data-rule-url="http://" data-msg-url="Please enter begin with http:// link"/><a href="javascript:void(0)" title="delete" class="del-ico btn-dels"></a></dd>'
			+ '</dl>' +
		'<dl text="urlx" class="dl-horizontal">'
				+ '<dt> <span name="ids">' + (a) + '</span># URL：</dt>'
				+ '<dd>'
				+ '	<input id="url_' + (a) + '" name="url_' + (a++) + '" type="text" class="form-input" value="http://" style="width:496px" data-rule-required="true" data-msg-required="Please select the Url" data-rule-url="http://" data-msg-url="Please enter begin with http:// link"/> ' +
				addImg + ' </dd>'
			+ '</dl>');
            $("#btn-tips-hover").remove();

            //del
            $(".btn-dels").click(function () {
                if ($(this).parents(".dl-horizontal").next().find("#btn-tips-hover").prop("outerHTML") != undefined)
                    $(this).parents(".dl-horizontal").prev().find("dd").append($(this).parents(".dl-horizontal").next().find("#btn-tips-hover").prop("outerHTML"));
                $(this).parents(".dl-horizontal").next().remove();
                $(this).parents(".dl-horizontal").remove();
                //if ($("#httpDiv").find(".dl-horizontal[text='preview']").length == 1)
                   // alert("最后一个");
                size();
            });
            size();
        }
        function size() {
            var i = 1;
            $("#httpDiv").find("dl[text='preview']").each(function () {
                if ($(this).find("dt").find("span[name='ids']").length > 0) {
                    i++;
                    $(this).find("dt").find("span[name='ids']").html(i);
                    $(this).find("dd").find("input[class='form-input']").attr("id", "previewUrl_" + i);
                    $(this).find("dd").find("input[class='form-input']").attr("name", "previewUrl_" + i);
                    $(this).next().find("dt").find("span[name='ids']").html(i);
                    $(this).next().find("dd").find("input[class='form-input']").attr("id", "url_" + i);
                    $(this).next().find("dd").find("input[class='form-input']").attr("name", "url_" + i);
                }
            });
        }
	//获取日期格式化
	Date.prototype.Format = function (fmt) { //author: meizz 
		var o = {
			"M+": this.getMonth() + 1, //月份 
			"d+": this.getDate(), //日 
			"h+": this.getHours(), //小时 
			"m+": this.getMinutes(), //分 
			"s+": this.getSeconds(), //秒 
			"q+": Math.floor((this.getMonth() + 3) / 3), //季度 
			"S": this.getMilliseconds() //毫秒 
		};
		if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o)
		if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
		return fmt;
	}
	var selDate = new Date();
	selDate.setDate(selDate.getDate() + 366);
	var Dateyear = selDate.Format("yyyy-MM-dd hh:mm:ss");
			var list = "";
            $("#select-edit2 option").each(function () {
                if (list != "")
                    list += ",";
                list += $(this).val();
            });
            alert(list);

$.each(msg,function(i,e){
	$("#select-edit1").append("<option value="+e.shortName+" style='height:19px;padding-top:5px;'>"+e.shortName+" "+e.official+"</option>");
})
//删除已有
$("#select-edit2 option").each(function () {
	$("#select-edit1 option[value='" + $(this).val() + "']").remove();
});




//git

pwd // 当前目录路径

$ git config --global user.name "millionfor" // 名字

$ git config --global user.email 9827046@qq.com //邮箱


ls //查看所有文件显示

ls -al // 目录

rm -rf jquery //删除文件夹

git init //本地创建项目 初始化

git clone /path/to/repository //从上往下载

git clone username@host:/path/to/repository  //链接远程仓库+

cd ..

git add //添加到缓存

git remote add origin  //链接到远程仓库

git commit -am"aa"  //上传等待的git阶段

git push origin master  //推送到远程仓库


git branch  //显示所有分支

git checkout branch2  //切换 branch2 分支

spm init

$ npm install spm -g //安装spm

//删除线上仓库

git rm -r -n --cached "bin/" //-n：加上这个参数，执行命令时，是不会删除任何文件，而是展示此命令要删除的文件列表预览。
git rm -r --cached  "bin/"      //最终执行命令. 
git commit -m" remove bin folder all file out of control"    //提交
git push origin master   //提交到远程服务器



$ spm build --include all  //seajs 打包 




// 倒计时

var i=10;
var countdown = null;
function timeShow(){
	i--;
	$(".btnsc-close").html("倒计时" + i + "秒");
	if(i<1){
		clearInterval(countdown);
		$('.layersc-item').hide()
	}
};
countdown = setInterval(timeShow,1000);

组装对象
for (i = 0; i < data.resultMap.companys.length; i++) {
	var object={};
	object.label=data.resultMap.companys[i].name;
	object.value=data.resultMap.companys[i].id;
	addVM.addenterprise.push(object);
	//console.log(JSON.parse("{"+'label:'+data.resultMap.companys[i].name +','+'value:'+data.resultMap.companys[i].id+"}"))
}

//children 向下遍历 $("#aaa").children("#bbb"); 只拿下一级
//find 向下遍历 $("#aaa").children("#bbb") 拿任何一个下级
//parent 直接父类 只拿上一级第一个
//parents 向上遍历所有的元素  可以("#div1")
//parentUntil 向上遍历 区间段 $("#div3").parentUntil("#div1") 拿div2-div1
//<div class="div1">
//   <div class="div2">
//	   <div class="div3">
//
//	   </div>
//   </div>
//</div>

//siblings() 除它之外所有的同级元素
//$("h4").siblings().css()
//<h1>yes</h1>
//<h2>yes</h2>
//<h3>yes</h3>
//<h4>no</h4>
//<h5>yes</h5>
//<h6>yes</h6>

//next 向下
//$("h4").next().css() h4的下一个同辈元素
//$("h4").nextAll().css() h4的下的所有的同辈元素
//$("h4").nextUntil().css() h4 - h8 之间 不包含本身
//prev 向上
//$("h4").prev().css() h4的下一个同辈元素
//$("h4").prevAll().css() h4的下的所有的同辈元素
//$("h4").prevUntil().css() h4 - h8 之间 不包含本身

//aaa();这样调用就会出错    
var aaa = function(){    
	alert("A");    
}    
aaa();//这样就不会出错    
	
//先调用后声明    
bbb();    
function bbb(){    
	alert("bb");    
}    

$.get("/user-radar/view/common/main.html",function(data){
	$("body").prepend(data); //将main.html 插入 body
});

/*

Welcome to Git (version 1.9.5-preview20150319)


Run 'git help git' to display the help index.
Run 'git help <command>' to display help for specific commands.

Administrator@QH-20160312XUIR /E/gitwork/qianfan4/qianfan/src/main (master)
$ git add *                         1 /////////////////////////////////////////////////////////////////////

Administrator@QH-20160312XUIR /E/gitwork/qianfan4/qianfan/src/main (master)
$ git commit -m 'quanquan add file' 2 /////////////////////////////////////////////////////////////////////
[master e9b0c6d] quanquan add file
 1 file changed, 1 insertion(+)

Administrator@QH-20160312XUIR /E/gitwork/qianfan4/qianfan/src/main (master)
$ git pull                          3 /////////////////////////////////////////////////////////////////////
Already up-to-date.

Administrator@QH-20160312XUIR /E/gitwork/qianfan4/qianfan/src/main (master)
$ git push origin master            4 /////////////////////////////////////////////////////////////////////
Counting objects: 17, done.
Delta compression using up to 4 threads.
Compressing objects: 100% (8/8), done.
Writing objects: 100% (9/9), 677 bytes | 0 bytes/s, done.
Total 9 (delta 5), reused 0 (delta 0)
To git@git.oschina.net:analysyschangsha/qianfan4.git
   023ed5d..e9b0c6d  master -> master

Administrator@QH-20160312XUIR /E/gitwork/qianfan4/qianfan/src/main (master)
$ git@git.oschina.net:analysyschangsha/qianfan4.git

Administrator@QH-20160312XUIR /E/gitwork/qianfan4/qianfan/src/main (master)
$

*/