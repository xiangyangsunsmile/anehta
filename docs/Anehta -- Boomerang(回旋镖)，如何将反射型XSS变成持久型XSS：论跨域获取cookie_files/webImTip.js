function WHG(A){return document.getElementById(A)}var isIE=navigator.userAgent.indexOf("MSIE")>-1&&!window.opera;var webHi={posStartX:0,posEndX:0,posStartY:0,posEndY:0,posAlpha:0,posState:0,tempNum:0,eventHandler:null,closeEventHandler:null,textBlock:null,textTip:null};webHi.textBlock=WHG("hi");webHi.textTip=WHG("hiMsg");if(isIE){webHi.textBlock.style.paddingRight="4px";webHi.textBlock.style.marginRight="2px"}function openTip(A){WHG("msgPos").title=WHG("hiMsg").title="您的百度Hi有新消息，点击读取";WHG("msgRight").innerHTML=A;var C=String(A).length;var B=[13,20,26];if(C<4){webHi.posEndX=B[C-1]}else{webHi.posEndX=8*C+(isIE?2:1);if(C>=8){webHi.posEndX-=3}}if(isIE){webHi.posStartY=1;webHi.posEndY=-6;webHi.textTip.style.right=(-3-C*7)+"px";webHi.textBlock.style.paddingRight="3px"}else{webHi.posStartY=0;webHi.posEndY=-7;webHi.textTip.style.right=(-1-C*7)+"px";webHi.textBlock.style.paddingRight="2px"}webHi.textTip.style.marginTop=webHi.posStartY+"px";if(webHi.tempNum!=C){webHi.tempNum=C;webHi.posState=0;webHi.posAlpha=0;webHi.posStartX=0}if(webHi.posState>=4){webHi.posState=2;webHi.posStartY-=5;webHi.posAlpha=0}clearInterval(webHi.closeEventHandler);webHi.closeEventHandler=null;clearInterval(webHi.eventHandler);webHi.eventHandler=setInterval(openMoveEvent,1)}function closeTip(){webHi.posStartY-=5;webHi.posAlpha=0;webHi.textTip.style.display="none";webHi.posStartX=webHi.posEndX;webHi.posEndX=isIE?2:0;clearInterval(webHi.eventHandler);webHi.eventHandler=null;clearInterval(webHi.closeEventHandler);webHi.closeEventHandler=setInterval(closeMoveEvent,1);WHG("msgPos").title=WHG("hiMsg").title="发起即时会话";WHG("msgRight").innerHTML="0"}function closeMoveEvent(){if(webHi.posStartX-3<=webHi.posEndX){clearInterval(webHi.closeEventHandler);webHi.closeEventHandler=null;webHi.posStartX=webHi.posEndX;webHi.textBlock.style.marginRight=webHi.posStartX+"px";return }webHi.posState=0;webHi.textBlock.style.marginRight=webHi.posStartX+"px";webHi.posStartX-=3}function openMoveEvent(){switch(webHi.posState){case 0:webHi.textBlock.style.marginRight=webHi.posStartX+"px";webHi.posStartX+=3;if(webHi.posStartX>=webHi.posEndX){webHi.posState=1}break;case 1:webHi.textTip.style.marginTop=webHi.posStartY--+"px";if(webHi.posStartY==webHi.posEndY+3){webHi.posState=2}break;case 2:webHi.textTip.style.filter="alpha(opacity ="+webHi.posAlpha+")";webHi.textTip.style.opacity=webHi.posAlpha/100;webHi.textTip.style.display="block";webHi.posState=3;break;case 3:if(webHi.posStartY>=webHi.posEndY){webHi.textTip.style.marginTop=webHi.posStartY--+"px"}var A=Math.abs(Math.sin(3.1415*webHi.posAlpha/180)*100);webHi.textTip.style.filter="alpha(opacity ="+A+")";webHi.textTip.style.opacity=A/100;webHi.posAlpha+=10;if(webHi.posAlpha>=640){webHi.posState=4}break;case 4:clearInterval(webHi.eventHandler);webHi.eventHandler=null;return }}window.IMOld=(function(){G.interval=30*1000;G.url="http://fetch.im.baidu.com/ihaloader?op=msgcount&charset=gbk&callback=IMOld&refer=hi.baidu.com";G.reset=function(){G.onchange(0);H(0);if(G.timer){clearInterval(G.timer)}C()};function I(){H(D);F=document.createElement("SCRIPT");F.type="text/javascript";F.src=G.url+(G.url.indexOf("?")>0?"&":"?")+".stamp="+new Date().getTime().toString(36);document.getElementsByTagName("HEAD")[0].appendChild(F)}function H(L){var J=new Date(),K=J.getTime();J.setTime(K+3*G.interval);document.cookie="IM_old="+L+"|"+K.toString(36)+";domain=baidu.com;path=/;expires="+J.toGMTString();if(F){F.parentNode.removeChild(F);F=null}}function A(){var J=document.cookie.match(/(^| )IM_old=([^;]*)(;|$)/);if(J!=null){return unescape(J[2])}return null}function C(){G.timer=setInterval(function(){var J=A(),L=0,K=0;if(J){J=J.split("|");K=parseInt(J[1],36);L=J[0];J=null}if(Math.abs(new Date().getTime()-K)>G.interval){I()}if(D!=L){D=L;if(typeof (G.onchange)=="function"){G.onchange(L)}}},500)}var E=A(),D=0,F=null,B=new Date().getTime();if(E){E=E.split("|");B=parseInt(E[1],36);D=E[0];E=null}setTimeout(function(){I();C();if(D>0&&typeof (G.onchange)=="function"){G.onchange(D)}},1000);function G(J){H(J)}return G})();window.startBaiduHi=(function(){var E=navigator.userAgent.indexOf("MSIE")>-1&&!window.opera,G=navigator.userAgent.indexOf("Firefox")!=-1,C="";try{C=new ActiveXObject("WebDetect.Detect").GetVersion()}catch(D){}try{if(typeof (navigator.mimeTypes["application/x-baiduhi"])=="object"){C=".*"}}catch(D){}function H(I){var B=new Date(),J=B.getTime();B.setTime(J+30*1000);document.cookie="IM_add="+escape(I+"|hi.baidu.com|"+(new Date().getTime()).toString(36))+";domain=baidu.com;path=/;expires="+B.toGMTString();if(!/(^| )IM_=/.test(document.cookie)){if(H.f&&H.f.tagName=="FORM"){H.f.submit();return }var J=document.createElement("DIV");J.style.display="none";document.body.insertBefore(J,document.body.firstChild);J.innerHTML="<form name='__IM_REDIRECT_FORM' method='get' target='baidu_webim' action='http://web.im.baidu.com'></form>";H.f=document.forms.__IM_REDIRECT_FORM;H.f.submit();J=null}}function F(I){var B=[];for(prop in I){if(prop!="onim"&&prop!="onwebim"){B.push(prop+"="+I[prop])}}return(B.length>0?"&"+B.join("&"):"")}function A(B,L,J,K){var M=document.createElement("script");document.body.appendChild(M);M.src="http://im.baidu.com/nop?type="+B+"&sid="+L+"&id="+J+F(K)+"&t="+new Date().getTime()}return function(J,M,K,L){A(J,M,K,L);if(C==""){if(/c2cmsg|message|addcontact|addgroup|creategroup/i.test(J)){H(K);if(L&&L.onwebim){L.onwebim()}}return false}if(!(new RegExp(C.replace(/(\.)/g,"\\."),"i").test(J))){return false}var B="baidu://"+J+"/?sid="+M+"&id="+K+F(L);if(E){B=B+"&browser=IE"}else{if(G){B=B+"&browser=FF&promo=c2cmsg|message|addgroup|creategroup|addcontact"}}if(L&&L.onim){L.onim()}window.location.href=B}})();window.IMOld.onchange=function(A){if(A>0){openTip(A)}else{closeTip()}};