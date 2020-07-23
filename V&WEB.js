
<!DOCTYPE html> <html> <head> <title></title> <meta http-equiv="Content-Type" content="text/html; charset=utf-8"> <meta name="keywords" content="" /> <meta name="description" content=""> <meta name="viewport" content="width=device-width,initial-scale=1" /> <meta name="author" content="root" > <meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta content="width=device-width,minimum-scale=1.0,maximum-scale=1.0,initial-scale=1.0,user-scalable=no" name="viewport" /> <!--% <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /> %--> <!-- Set render engine for 360 browser --> <meta name="renderer" content="webkit"> <!-- No Baidu Siteapp--> <meta http-equiv="Cache-Control" content="no-siteapp"/> <!-- HTML5 shim for IE8 support of HTML5 elements --> <!--[if lt IE 9]> <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script> <![endif]--> <link rel="icon" href="/tpl/vandweb_com/Public/images/favicon.ico" type="image/x-icon"> <link rel="shortcut icon" href="/tpl/vandweb_com/Public/images/favicon.ico" type="image/x-icon"> <!--
<link href="/tpl/vandweb_com/Public/simpleboot/themes/cmf/theme.min.css" rel="stylesheet"> <link href="/tpl/vandweb_com/Public/simpleboot/themes/cmf/theme.full.css" rel="stylesheet"> <link href="/tpl/vandweb_com/Public/simpleboot/bootstrap/css/bootstrap-responsive.min.css" rel="stylesheet"> <link href="/tpl/vandweb_com/Public/simpleboot/font-awesome/4.2.0/css/font-awesome.min.css"  rel="stylesheet" type="text/css">
--> <!--[if IE 7]> <link rel="stylesheet" href="/tpl/vandweb_com/Public/simpleboot/font-awesome/4.2.0/css/font-awesome-ie7.min.css"> <![endif]--> <link href="/tpl/vandweb_com/Public/css/style.css" rel="stylesheet"> <!--
<link href="/tpl/vandweb_com/Public/css/vandweb.css" rel="stylesheet" > <link href="/tpl/vandweb_com/Public/css/toastr.min.css" rel="stylesheet" > <link href="/tpl/vandweb_com/Public/css/qikoo.css" rel="stylesheet" > <link href="/tpl/vandweb_com/Public/simpleboot/themes/cmf/neirong.css" rel="stylesheet">
--> <link href="/tpl/vandweb_com/Public/css/style_index.css" rel="stylesheet"> <link href="/tpl/vandweb_com/Public/css/style_page.css" rel="stylesheet"> <script>
//全局变量
var GV = {
    DIMAUB: "/",
    JS_ROOT: "statics/js/",
    TOKEN: ""
};
</script> <script src="/statics/js/jquery.js"></script> <script src="/tpl/vandweb_com/Public/js/vandweb.js?time=20180605" type="text/javascript"  ></script> <!-- <script src="/statics/js/wind.js"></script> --> <!--
<script src="/tpl/vandweb_com/Public/simpleboot/bootstrap/js/bootstrap.min.js"></script> <script src="/statics/js/frontend.js"></script> <script src="/tpl/vandweb_com/Public/js/jquery-1.9.1.js" type="text/javascript"  ></script> <script src="/tpl/vandweb_com/Public/js/mobile_nav/jquery-1.11.1.min.js"></script> <script src="/tpl/vandweb_com/Public/js/jquery.animate-colors-min.js" type="text/javascript"></script> <script src="/tpl/vandweb_com/Public/js/toastr.js" type="text/javascript"></script><script src="/tpl/vandweb_com/Public/js/qikoo.js" type="text/javascript"></script>
--> <style>
/*html{filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);-webkit-filter: grayscale(1);}*/
#backtotop {
	position: fixed;
	bottom: 50px;
	right:20px;
	display: none;
	cursor: pointer;
	font-size: 50px;
	z-index: 9999;
}
#backtotop:hover {
	color:#333
}
		/* #main-menu-user li.user{display: none} */
</style> <!--
<script type="text/javascript">
		//ie
		if (navigator.browserLanguage != "undefined" && navigator.browserLanguage != null) {
			if (navigator.systemLanguage == "zh-CN" || navigator.systemLanguage == "zh" || navigator.systemLanguage == "zh-cn") {
				document.write("<script src='/tpl/vandweb_com/Public/js/vandweb_app_zh.js'><\/script>");
			}else{
				document.write("<script src='/tpl/vandweb_com/Public/js/vandweb_app_en.js'><\/script>");
			}
		}else {
			//firefox、chrome,360
			if (navigator.language == "zh-CN" || navigator.language == "zh" || navigator.language == "zh-cn") {
				document.write("<script src='/tpl/vandweb_com/Public/js/vandweb_app_zh.js'><\/script>");
				//document.write("<script src='jquery-easyui/locale/easyui-lang-zh_CN.js'><\/script>");

			}else{
				document.write("<script src='/tpl/vandweb_com/Public/js/vandweb_app_en.js'><\/script>");
			}
		}

	</script>
--> <!-- Facebook Pixel Code --> <!-- <script>
	!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
	n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
	n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
	t.src=v;s=b.getElementsByTagName(e)[0];
	s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
	fbq('init', '1733417740214149');
	fbq('track', 'PageView');
	</script> <noscript> <img height="1" width="1" style="display:none"
	src="https://www.facebook.com/tr?id=1733417740214149&ev=PageView&noscript=1"
	/> </noscript> --> <!-- DO NOT MODIFY --> <!-- End Facebook Pixel Code --> </head> <body> <!--响应导航--> <div class="mobile_nav"> <div class="mobile-inner-header"> <a href="/" class="vweb_logo"> <img src="/tpl/vandweb_com/Public/images/v-web.png"> </a> <span id="mobile_login" > <a href="/user/login/index" class="nav_login1"> <i class="fa fa-sign-in"></i>Login      	</a> <a href="/user/register/index" class="nav_login2"> <i class="fa fa-user"></i>Register      	</a> </span> <div class="mobile-inner-header-icon mobile-inner-header-icon-out"> <span></span> <span></span> </div> </div> <div class="mobile-inner-nav"> <ul class="cd-navigation"> <li class="item-has-children dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" style="animation-delay: 0s;"  href=/#index_our
						> SERVERS</a> <ul class="sub-menu"> <li><a
                                    href=/cloud_hosting/global>Web Hosting</a></li> <li><a
                                    href=/vps>VPS</a></li> <li><a
                                    href=/dedicated>Dedicated Servers</a></li> <li><a
                                    href=/cloud>Cloud Servers</a></li> <!-- <li><a href="http://app.vandweb.com" style="animation-delay: 3.2s;">pp</a></li> --> </ul> <li class="item-has-children dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" style="animation-delay: 0s;"  href=/#index_our
						> COLOCATION </a> <ul class="sub-menu"> <li><a
                                    href=/colocation/taiwan>Taiwan</a></li> <li><a
                                    href=/colocation/hongkong>Hong kong</a></li> <li><a
                                    href=/colocation/usa>USA</a></li> <!-- <li><a href="http://app.vandweb.com" style="animation-delay: 3.2s;">pp</a></li> --> </ul> <li class="item-has-children dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" style="animation-delay: 0s;"  href=
						> SOLUTION</a> <ul class="sub-menu"> <li><a
                                    href=/page/faq>FAQ</a></li> <li><a
                                    href=/page/ticket>Ticket</a></li> <li><a
                  target="_blank"                  href=http://letswin.com.tw/index.php/enterprise-solutions/>Enterprise Solutions</a></li> <!-- <li><a href="http://app.vandweb.com" style="animation-delay: 3.2s;">pp</a></li> --> </ul> <li class="item-has-children dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" style="animation-delay: 0s;"  href=/
						> COMPANY</a> <ul class="sub-menu"> <li><a
                                    href=/page/about>About us</a></li> <li><a
                                    href= /page/contact/>Contact us</a></li> <li><a
                                    href=http://www.vandweb.com/web/blog/>News &amp; Blog</a></li> <!-- <li><a href="http://app.vandweb.com" style="animation-delay: 3.2s;">pp</a></li> --> </ul> <li class="item-has-children dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" style="animation-delay: 0s;"  href=/page/app
						> APP</a> <ul class="sub-menu"> <li><a
                                    href=/page/vsights>VSights</a></li> <li><a
                                    href=/page/vguarder>VGuarder</a></li> <!-- <li><a href="http://app.vandweb.com" style="animation-delay: 3.2s;">pp</a></li> --> </ul> <li class="item-has-children dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" style="animation-delay: 0s;"  href=/
						> NEWS</a> <ul class="sub-menu"> <li><a
                                    href=/maintenance>Maintenance</a></li> <!-- <li><a href="http://app.vandweb.com" style="animation-delay: 3.2s;">pp</a></li> --> </ul> </li> <!--語言--> <li class="item-has-children dropdown"> <a class="dropdown-toggle" data-toggle="dropdown" style="animation-delay: 2.2s;" href="">Language</a> <ul class="sub-menu" style="display: none;"> <li><a id="nav_m_lang_en" href="" style="animation-delay: 2.3s;">English</a></li> <li><a id="nav_m_lang_cn" href="" style="animation-delay: 2.4s;">简体中文</a></li> </ul> </li> </ul> </div> </div> <!--nav部分--> <div class="vweb_nav"> <div class="w1200"> <a href="/" class="vweb_logo"><img src="/tpl/vandweb_com/Public/images/v-web.png" alt="logo"></a> <!--导航条--> <ul id="top_nav"> <li ><a  class="a_tit" href=/#index_our>SERVERS</a> <div  class="hidden-box hidden-loc-1"> <ul id="test_u"> <li  class="login_l"> <!--    <a  href=/cloud_hosting/global></a> --> <a  href=/cloud_hosting/global>Web Hosting</a> </li><li  class="login_l"> <!--    <a  href=/vps></a> --> <a  href=/vps>VPS</a> </li><li  class="login_l"> <!--    <a  href=/dedicated></a> --> <a  href=/dedicated>Dedicated Servers</a> </li><li  class="login_l"> <!--    <a  href=/cloud></a> --> <a  href=/cloud>Cloud Servers</a> </li> </ul> </div> </li> <li ><a  class="a_tit" href=/#index_our>COLOCATION </a> <div  class="hidden-box hidden-loc-1"> <ul id="test_u"> <li  class="login_l"> <!--    <a  href=/colocation/taiwan></a> --> <a  href=/colocation/taiwan>Taiwan</a> </li><li  class="login_l"> <!--    <a  href=/colocation/hongkong></a> --> <a  href=/colocation/hongkong>Hong kong</a> </li><li  class="login_l"> <!--    <a  href=/colocation/usa></a> --> <a  href=/colocation/usa>USA</a> </li> </ul> </div> </li> <li ><a  class="a_tit" href=>SOLUTION</a> <div  class="hidden-box hidden-loc-1"> <ul id="test_u"> <li  class="login_l"> <!--    <a  href=/page/faq></a> --> <a  href=/page/faq>FAQ</a> </li><li  class="login_l"> <!--    <a  href=/page/ticket></a> --> <a  href=/page/ticket>Ticket</a> </li><li  class="login_l"> <!--    <a target="_blank" href=http://letswin.com.tw/index.php/enterprise-solutions/></a> --> <a target="_blank" href=http://letswin.com.tw/index.php/enterprise-solutions/>Enterprise Solutions</a> </li> </ul> </div> </li> <li ><a  class="a_tit" href=/>COMPANY</a> <div  class="hidden-box hidden-loc-1"> <ul id="test_u"> <li  class="login_l"> <!--    <a  href=/page/about></a> --> <a  href=/page/about>About us</a> </li><li  class="login_l"> <!--    <a  href= /page/contact/></a> --> <a  href= /page/contact/>Contact us</a> </li><li  class="login_l"> <!--    <a  href=http://blog.vandweb.com/></a> --> <a  href=http://www.vandweb.com/web/blog/>News &amp; Blog</a> </li> </ul> </div> </li> <li ><a  class="a_tit" href=/page/app>APP</a> <div  class="hidden-box hidden-loc-1"> <ul id="test_u"> <li  class="login_l"> <!--    <a  href=/page/vsights></a> --> <a  href=/page/vsights>VSights</a> </li><li  class="login_l"> <!--    <a  href=/page/vguarder></a> --> <a  href=/page/vguarder>VGuarder</a> </li> </ul> </div> </li> <li ><a  class="a_tit" href=/>NEWS</a> <div  class="hidden-box hidden-loc-1"> <ul id="test_u"> <li  class="login_l"> <!--    <a  href=/maintenance></a> --> <a  href=/maintenance>Maintenance</a> </li> </ul> </div> </li> <!--語言--> <li> <a class="a_tit">Language</a> <div class="hidden-box hidden-loc-1" style="display: none;"> <ul id="test_u"> <li class="login_l"> <a id="nav_lang_en" href="">English</a> </li> <li class="login_l"> <a id="nav_lang_cn" href="">简体中文</a> </li> </ul> </div> </li> </ul> <ul class="nav pull-right" id="main-menu-user"> <li class="dropdown user offline"> <a class="dropdown-toggle user" data-toggle="dropdown" href="#"> <img src="/tpl/vandweb_com/Public/images/headicon.png" class="headicon"/>Login<b class="caret"></b> </a> <ul class="dropdown-menu pull-right"> <li><a href="/user/login/index"><i class="fa fa-sign-in"></i> &nbsp;Login </a></li> <li class="divider"></li> <li><a href="/user/register/index"><i class="fa fa-user"></i> &nbsp;Register </a></li> </ul> </li> </ul> <div style="clear:both;"></div> </div> </div> <!--shouji  nav--> <!--下拉--> <!-- <script src="/tpl/vandweb_com/Public/js/mobile_nav/jquery-2.1.1.min.js" type="text/javascript"></script> <script src="/tpl/vandweb_com/Public/js/mobile_nav/jquery-1.11.1.min.js"></script> --> <!--二级导航--> <!--test: nav app href--> <!-- <script type="text/javascript">
 $(".item-has-children").eq(4).children('a').removeAttr("data-toggle");
 $(".item-has-children").eq(4).removeAttr("class");
</script> --> <script type="text/javascript"> <!--下拉-->
	$(window).load(function () {
		$(".mobile-inner-header-icon").click(function(){
			$(this).toggleClass("mobile-inner-header-icon-click mobile-inner-header-icon-out");
			$(".mobile-inner-nav").slideToggle(250);


		});
		$(".mobile-inner-nav a").each(function( index ) {
			$( this ).css({'animation-delay': (index/10)+'s'});

		});
	});
	//open (or close) submenu items in the lateral menu. Close all the other open submenu items.

	$('.item-has-children').children('a').on('click', function(event){
    if ($(this).parent().children("ul").first().children("li").length > 0) {
      event.preventDefault();
      $(this).toggleClass('submenu-open').next('.sub-menu').slideToggle(200).end().parent('.item-has-children').siblings('.item-has-children').children('a').removeClass('submenu-open').next('.sub-menu').slideUp(200);
    } else {
      window.location.href = $(this).attr("href");
    }

	});

	$('.nav-dl-down-03').each(function(){
		var has_children_dd = $(this).children('dd');
		if (has_children_dd.length == 0) {
			$(this).children('dt').attr('style', 'border-bottom:none');
		}
	});

	$('.nav-dl-down-05').each(function(){
		var has_children_dd = $(this).children('dd');
		if (has_children_dd.length == 0) {
			$(this).children('dt').attr('style', 'border-bottom:none');
		}
	});
	</script> <!--computer nav导航下拉效果--> <script type="text/javascript">
$(document).ready(function(){
	//     nav-li hover e
	// var num;
	// 	$('#top_nav  li[id]').hover(function(){
	// 	   /*下拉框出现*/
	// 		 var Obj = $(this).attr('id');

	// 		 num = Obj.substring(3, Obj.length);
	// 			$('#box-'+num).slideDown(300);
	// 	},function(){
	// 			/*下拉框消失*/
	// 		 $('#box-'+num).hide();
	// 	});

			$('#top_nav li').hover(
					function() {
						$(this).children(':first').addClass('a_tit_hover');
						$(this).children('div').slideDown(300);
					},
					function(){
						$(this).children(':first').removeClass('a_tit_hover');
						$(this).children('div').hide();
					}
				);

			});

</script> <script type="module">
// 選擇語言
function setLang(lang='en') {
	// set cookie
	var expires = new Date();
	// 有效時間保存 2天 : 2*24*60*60*1000
	expires.setTime(expires.getTime() + 172800000);
	document.cookie = "lang=" + escape(lang) + ";expires=" + expires.toGMTString() + ";path=/";

	location.reload();
}
document.getElementById('nav_lang_en').addEventListener('click', function(){setLang("en")}, false);
document.getElementById('nav_lang_cn').addEventListener('click', function(){setLang("cn")}, false);
document.getElementById('nav_m_lang_en').addEventListener('click', function(){setLang("en")}, false);
document.getElementById('nav_m_lang_cn').addEventListener('click', function(){setLang("cn")}, false);
</script> <!--text part--> <div class="text_hosting1 server_header_div"> <div class="text_hosting_w w1200"> <h1>VPS</h1> <p class="server_header">When you have outgrown shared hosting and want a server with excellent performance and stability, this is what you need!</p> </div> </div> <div class="product_box w1200"> <div class="product_hsto"> <div class="product_hsto_icon product_hsto_icon_vps"><span></span></div> </div> </div> <style>.taiwan_flag {
  width:100%;
  max-width:300px;
  background-color:#f2f2f2;
  border:1px solid #808080;
  /*height:100px;*/
  padding:20px;
  margin:0 auto;
}
.taiwan_flag img {
  float:left;
  width:100px;
  margin-right:15px;
}
.taiwan_flag .title {
  color:#000;
  font-size:40px;
  font-weight:bold;
  text-align:center;
  /*text-align:left;
  padding-top:10px;*/
}
.taiwan_flag .text {
  color:#000;
  font-size:18px;
  text-align:left;
}
</style> <div class="w1200"> <a href="/vps/hong-kong"> <div class="taiwan_flag"> <!--<img src="/tpl/vandweb_com/Public/images/area/taiwan_flag.png"/>--> <p class="title">VPS ON SALE!</p> <!--<p class="text">VPS ON SALE!</p>--> </div> </a> </div> <!--flag--> <div class="flag_bg w1200" style="background-image:url('/tpl/vandweb_com/Public/images/area/dedicated_ban03.png')"> <div class="flag_cont"> <ul class="flag_ul_01 flag_ul"> <li><span>Asia</span></li> <li class="flag_cam"><a href="/vps/cambodia" ><span></span>Cambodia</a></li> <li class="flag_hk"><a href="/vps/hong-kong" ><span></span>Hong Kong</a> </li> <li class="flag_ind"><a href="/vps/india" ><span></span>India</a></li> <li class="flag_ida"><a href="/vps/indonesia" ><span></span>Indonesia</a> </li> <li class="flag_isr"><a href="/vps/israel" ><span></span>Israel</a></li> <li class="flag_jpa"><a href="/vps/japan" ><span></span>Japan</a></li> <li class="flag_kor"><a href="/vps/korea" ><span></span>Korea</a></li> <li class="flag_mys"><a href="/vps/malaysia" ><span></span>Malaysia</a></li> <li class="flag_pak"><a href="/vps/pakistan" ><span></span>Pakistan</a></li> <li class="flag_rus"><a href="/vps/russia" ><span></span>Russia</a></li> <li class="flag_sin"><a href="/vps/singapore" ><span></span>Singapore</a> </li> <!-- <li class="flag_sri"><a href="/vps/sri-lanka" ><span></span>Sri Lanka</a></li> --> <!-- <li class="flag_tw"><a href="/vps/taiwan" ><span></span>Taiwan</a></li> --> <li class="flag_tha"><a href="/vps/thailand" ><span></span>Thailand</a></li> <li class="flag_tur"><a href="/vps/turkey" ><span></span>Turkey</a></li> <li class="flag_uae"><a href="/vps/uae" ><span></span>UAE</a></li> <li class="flag_vie"><a href="/vps/vietnam"><span></span>Vietnam</a></li> </ul> <ul class="flag_ul_02 flag_ul"> <ul> <li><span>North America</span></li> <li class="flag_can"><a href="/vps/canada" ><span></span>Canada</a></li> <li class="flag_mex"><a href="/vps/mexico" ><span></span>Mexico</a></li> <li class="flag_usa"><a href="/vps/usa" ><span></span>United States</a></li> </ul> <ul class="flag_ul_21"> <li><span>South America</span></li> <li class="flag_arg"><a href="/vps/argentina" ><span></span>Argentina</a></li> <li class="flag_bra"><a href="/vps/brazil" ><span></span>Brazil</a></li> <!--<li class="flag_col"><a href="/vps/colombia" ><span></span>Colombia</a></li>--> <li class="flag_chi"><a href="/vps/chile" ><span></span>Chile</a></li> </ul> <ul class="flag_ul_21"> <li><span>Oceania</span></li> <li class="flag_aus"><a href="/vps/australia" ><span></span>Australia</a></li> <li class="flag_nzl"><a href="/vps/new-zealand" ><span></span>New Zealand</a></li> </ul> <ul class="flag_ul_21"> <li><span>Africa</span></li> <li class="flag_nga"><a href="/vps/nigeria" ><span></span>Nigeria</a></li> <li class="flag_zaf"><a href="/vps/zaf" ><span></span>ZAF</a></li> </ul> </ul> <ul class="flag_ul_04 flag_ul"> <!-- <span style="position: absolute; font-family: Century Gothic; font-size: 18px; border-bottom: 1px solid rgb(153, 153, 153); color: rgb(68, 68, 68); width: 360px; right: 360px; top: 365px;">Europe</span> --> <li><span class="europe_span">Europe</span></li> <li class="flag_ul_li04"> <ul class="flag_ul_041"> <li></li> <li class="flag_aut"><a href="/vps/austria" ><span></span>Austria</a></li> <li class="flag_bel"><a href="/vps/belgium" ><span></span>Belgium</a></li> <li class="flag_bgr"><a href="/vps/bulgaria" ><span></span>Bulgaria</a></li> <li class="flag_cze"><a href="/vps/czech-republic" ><span></span>Czech Republic</a></li> <li class="flag_dnk"><a href="/vps/denmark" ><span></span>Denmark</a></li> <li class="flag_fin"><a href="/vps/finland" ><span></span>Finland</a></li> <li class="flag_fra"><a href="/vps/france" ><span></span>France</a></li> <li class="flag_ger"><a href="/vps/germany" ><span></span>Germany</a></li> <li class="flag_hun"><a href="/vps/hungary" ><span></span>Hungary</a></li> <li class="flag_isl"><a href="/vps/iceland" ><span></span>Iceland</a></li> <li class="flag_irl"><a href="/vps/ireland" ><span></span>Ireland</a></li> <li class="flag_ita"><a href="/vps/italy" ><span></span>Italy</a></li> </ul> </li> <li class="flag_ul_li04"> <ul class="flag_ul_041"> <li></li> <li class="flag_ltu"><a href="/vps/lithuania" ><span></span>Lithuania</a></li> <!-- <li class="flag_lux"><a href="/vps/luxembourg" ><span></span>Luxembourg</a></li> --> <li class="flag_ned"><a href="/vps/netherlands" ><span></span>Netherlands</a></li> <li class="flag_nor"><a href="/vps/norway" ><span></span>Norway</a></li> <li class="flag_pol"><a href="/vps/poland" ><span></span>Poland</a></li> <li class="flag_por"><a href="/vps/portugal" ><span></span>Portugal</a></li> <li class="flag_rou"><a href="/vps/romania" ><span></span>Romania</a></li> <li class="flag_esp"><a href="/vps/spain" ><span></span>Spain</a></li> <li class="flag_swe"><a href="/vps/sweden" ><span></span>Sweden</a></li> <li class="flag_che"><a href="/vps/switzerland" ><span></span>Switzerland</a></li> <li class="flag_uk"><a href="/vps/uk"  ><span></span>UK</a></li> <li class="flag_ukr"><a href="/vps/ukraine" ><span></span>Ukraine</a></li> </ul> </li> <div class="clear"></div> </ul> <div class="clear"></div> </div> </div> <!--banner--> <!-- <div class="page_banner"> <div class="banner_line"></div> <img src="/tpl/vandweb_com/Public/images/area/dedicated_ban02.jpg" class="w1200"></div> --> <!-- JavaScript --> <script type="text/javascript">function alert_login(time,mes,jumpurl){
  time=arguments[0] ? arguments[0] : 1000;
  toastr.options = {
        "closeButton": true,
        "positionClass": "toast-center-center",
        "timeOut": time,
      }
  toastr.info(mes);
  if(arguments[2]){
    setTimeout("location.href ='"+jumpurl+"'",time);
  }
}
</script> <div class="dislog_box"></div> <!-- <script type="text/javascript">
//全局变量
var GV = {
    DIMAUB: "/",
    JS_ROOT: "statics/js/",
    TOKEN: ""
};
</script> --> <!-- Le javascript
    ================================================== --> <!-- Placed at the end of the document so the pages load faster --> <!--
    <script src="/statics/js/wind.js"></script>
--> <script>
$(function(){
  $('body').on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); });

  $("#main-menu li.dropdown").hover(function(){
    $(this).addClass("open");
  },function(){
    $(this).removeClass("open");
  });

  $.post("/user/index/is_login",{},function(data){
    if(data.status==1){
      if(data.user.avatar){
        $("#main-menu-user .headicon").attr("src",data.user.avatar.indexOf("http")==0?data.user.avatar:"/data/upload/avatar/"+data.user.avatar);
      }
      var user = data.user.user_nicename!=""?data.user.user_nicename:data.user.user_login;
      $("#mobile_logout").show();
      $("#mobile_logout .nav_login2").html('<i class="fa fa-user"></i>' + user);

      data.user.user_nicename = data.user.user_nicename.substr(0, 8);
      data.user.user_login = data.user.user_login.substr(0, 8);
var user_display = data.user.user_nicename!=""?data.user.user_nicename:data.user.user_login;
      $("#main-menu-user .user-nicename").text(user_display).attr('title', user_display);
      $("#mobile_login .user-nicename").text(user_display).attr('title', user_display);
      $("#main-menu-user li.user.login").show();
    }
    if(data.status==0){
      $("#main-menu-user li.user.offline").show();

      $("#mobile_login").show();
    }

  });
  (function($){
    $.fn.totop=function(opt){
      var scrolling=false;
      return this.each(function(){
        var $this=$(this);
        $(window).scroll(function(){
          if(!scrolling){
            var sd=$(window).scrollTop();
            if(sd>100){
              $this.fadeIn();
            }else{
              $this.fadeOut();
            }
          }
        });

        $this.click(function(){
          scrolling=true;
          $('html, body').animate({
            scrollTop : 0
          }, 500,function(){
            scrolling=false;
            $this.fadeOut();
          });
        });
      });
    };
  })(jQuery);
  //test $("#backtotop").totop();
  $("#backtotop").totop();


});

function popup( object ){
    var id = object.id || 'popup',
        width = object.width || '500px',
        height = object.height || '400px',
        background = object.background || '#fff',
        borderRadius = object.borderRadius || 'round',
        borderRadiusPx = object.borderRadiusPx || 4,
        closeClass = object.closeClass || 'popup-close',
        maskId = object.maskId || 'popup-mask',
        maskOpacity = object.maskOpacity || 0.5;

    var obj = document.getElementById( id ),
        maskObj = document.getElementById( maskId ),
        closeObj = document.getElementsByClassName( closeClass );

    obj.style.width = width;
    obj.style.height = height;
    obj.style.background = background;

    if( borderRadius === 'round' ){
        obj.style.borderRadius = borderRadiusPx + 'px';
    }else if( borderRadius === 'rect' ){
        obj.style.borderRadius = 0;
    };

    if( window.navigator.userAgent.toLowerCase().indexOf('ie') !== -1 ){
        // ie 浏览器
        maskObj.style.filter = 'alpha(opacity:'+(maskOpacity*100)+')';
    }else{
        maskObj.style.opacity = maskOpacity;
    };
    obj.style.display = 'block';
    maskObj.style.display = 'block';
    if (closeObj) {
      for (var i = 0; i < closeObj.length; i++) {
        closeObj[i].addEventListener("click", function() {
          obj.style.display = 'none';
          maskObj.style.display = 'none';
        });
      }
    }
}

</script> <!-- Footer================================================== --> <div id="divmsn"> <div id="div_check1_1"></div> <div id="div_check1_2"><!--在线客服--></div> <div id="div_check1_3"> <div class="div_check1_title">V&Web 客服諮詢</div> <div class="KeFuList" style="min-height:120px;"> <div class="">&nbsp</div> <div class="KeFuItem"> <a style="font-size:130%;" rel="nofollow" href="https://wpa.qq.com/msgrd?v=3&amp;uin=1170923870&amp;site=qq&amp;menu=yes" target="_blank"> <img border="0" src="/tpl/vandweb_com/Public/images/pa.gif" alt="点击这里给我发消息"> Alan 1170923870
        </a><br> <a style="font-size:130%;" rel="nofollow" href="https://wpa.qq.com/msgrd?v=3&amp;uin=2677273702&amp;site=qq&amp;menu=yes" target="_blank"> <img border="0" src="/tpl/vandweb_com/Public/images/pa.gif" alt="点击这里给我发消息"> Max 2677273702
        </a> <!-- <a style="font-size:130%;" rel="nofollow" href="https://wpa.qq.com/msgrd?v=3&amp;uin=3466451246&amp;site=qq&amp;menu=yes" target="_blank"> <img border="0" src="/tpl/vandweb_com/Public/images/pa.gif" alt="点击这里给我发消息"> 季盛 3466451246
        </a> <a style="font-size:130%;" rel="nofollow" href="https://wpa.qq.com/msgrd?v=3&amp;uin=1468951719&amp;site=qq&amp;menu=yes" target="_blank"> <img border="0" src="/tpl/vandweb_com/Public/images/pa.gif" alt="点击这里给我发消息"> 俊霖 1468951719
        </a> --> </div> <!-- <p style="text-align:center; margin-top:5px;"> <img src="/tpl/vandweb_com/Public/images/area/qq_16.jpg" alt="邮箱" width="106" height="3"></p>--> <div class="Youxiang">客户服务邮箱</div> <div class="KeFuItem">business@vandweb.com</div> <div style="clear:both;"></div> </div> </div> </div> <script>$(document).ready(function () {
//    $("#div_check1_1").show();
//    $("#div_check1_3").show();
//    $("#div_check1_2").hide();

    $("#div_check1_1").hide();
    $("#div_check1_3").hide();
    $("#div_check1_2").show();

    $("#div_check1_2").click(function () {
        $("#div_check1_2").hide();
        $("#div_check1_3").show();
        $("#div_check1_1").show();
    });
    $("#div_check1_1").click(function () {
        $("#div_check1_1").hide();
        $("#div_check1_3").hide();
        $("#div_check1_2").show();
    });
    $(document).mouseup(function(e){
      var _con = $('#divmsn');   // 设置目标区域
      if(!_con.is(e.target) && _con.has(e.target).length === 0){
        $("#div_check1_1").hide();
        $("#div_check1_3").hide();
        $("#div_check1_2").show();
      }
    });


});
</script> <div id="backtotop"><i class="fa fa-arrow-circle-up"></i></div> <div id="footer"> <div class="w-1200"> <div class="footer_box"> <div class="box"> <ul>                        DEDICATED SERVER                                      <li> <i class="fa fa-2x " style=""></i> <a href=/dedicated-server/asia>Asia Dedicated Server</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/dedicated-server/north-america>North America Dedicated Server</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/dedicated-server/south-america>South America Dedicated Server</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/dedicated-server/oceania>Oceania Dedicated Server</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/dedicated-server/europe>Europe Dedicated Server</a> </li> </ul><ul>                        CLOUD SERVER                                      <li> <i class="fa fa-2x " style=""></i> <a href=/cloud/singapore>Singapore Cloud  Server</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/cloud/usa>USA Cloud Server</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/cloud/thailand>Thailand Cloud Server</a> </li> </ul><ul>                        VPS                                      <li> <i class="fa fa-2x " style=""></i> <a href=/vps/asia>Asia VPS</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/vps/north-america>North America VPS</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/vps/south-america>South America VPS</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/vps/oceania>Oceania VPS</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/vps/europe>Europe VPS</a> </li> </ul><ul>                        CLOUD HOSTING                                      <li> <i class="fa fa-2x " style=""></i> <a href=/cloud_hosting/global>Global</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/cloud_hosting/china>China</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/colocation/taiwan>Taiwan Server Colocation</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/colocation/hongkong>Hong Kong Server Colocation</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/colocation/usa>USA Server Colocation</a> </li> </ul><ul>                        COMPANY                                      <li> <i class="fa fa-2x " style=""></i> <a href=/page/about/>About us</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href= /page/contact/>Contact us</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/page/law_declaration>Law Declaration</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/page/privacy_terms>Privacy Terms</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=/page/sitemap/>Sitemap</a> </li> <li> <i class="fa fa-2x " style=""></i> <a href=<a href="https://hostingassured.thewebhostingdir.com/"><img src="https://hostingassured.thewebhostingdir.com/hostingassured-seal"></a><br /><a rel="nofollow" href="https://www.thewebhostingdir.com/hosting-provider/vandweb-servers/reviews/">Thewebhostingdi>V&amp;WEB</a> </li> </ul> <ul class="ul_last">          FOLLOW US ON          <li class="ul_last_icon"> <a href="https://www.facebook.com/vandweb.com.Global/" target="_black" class="facebook_icon"></a> <a href="https://twitter.com/vandwebglobal" target="_black" class="twitter_icon"></a> <a href="http://vandweb.tumblr.com/" target="_black" class="tumblr_icon"></a><br/> <a href="https://www.instagram.com/vandweb/" target="_black" class="instagram_icon"></a> <a href="http://www.vandweb.com/web/blog/" target="_black" class="blog_icon"></a> </li> <li class="ul_last_vweb"></li> <li class="ul_last_copy">Copyright &copy;<br/> <!-- Letswin Telecom Co., Ltd.<br/> -->            Goldy Host Technology Co. Ltd.<br/>            All Rights Reserved.</li> <div style="clear:both;"></div> </ul> <div style="clear:both;"></div> </div> </div> </div> </div> <!--        客服系统 by kate 2017        --> <script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/58a179f127e1fd0aacae46d3/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
<!--        google统计 by kate 2017-02-10        --> <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-92273553-1', 'auto');
  ga('send', 'pageview');
</script> </body> </html>
