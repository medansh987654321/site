!function(o,r){var s="astHookExtSticky",i=r.document,a=(jQuery(r).outerWidth(),jQuery(r).width()),n={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,active_shrink:!1,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"};function e(t,e){this.element=t,this.options=o.extend({},n,e),this._defaults=n,this._name=s,"1"==this.options.hide_on_scroll&&(this.navbarHeight=o(t).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}e.prototype.stick_me=function(t,e){var o=jQuery(t.element),s=jQuery(r).outerWidth(),i=parseInt(t.options.stick_upto_scroll),a=parseInt(o.parent().attr("data-stick-maxwidth")),n=parseInt(o.parent().attr("data-stick-gutter"));"enabled"==(astraAddon.hook_sticky_header||"")&&(!("desktop"==t.options.sticky_on_device&&astraAddon.hook_custom_header_break_point>s)&&!("mobile"==t.options.sticky_on_device&&astraAddon.hook_custom_header_break_point<=s)&&jQuery(r).scrollTop()>i?"none"==t.options.header_style&&("enabled"==t.options.active_shrink&&t.hasShrink(t,"stick"),o.hasClass("ast-custom-header")&&(o.parent().css("min-height",o.outerHeight()),o.addClass("ast-header-sticky-active").stop().css({"max-width":a,top:n,"padding-top":t.options.shrink.padding_top,"padding-bottom":t.options.shrink.padding_bottom}),o.addClass("ast-sticky-shrunk").stop())):t.stickRelease(t)),"enabled"==(astraAddon.hook_sticky_footer||"")&&("desktop"==t.options.sticky_on_device&&astraAddon.hook_custom_footer_break_point>s||"mobile"==t.options.sticky_on_device&&astraAddon.hook_custom_footer_break_point<=s?t.stickRelease(t):(jQuery("body").addClass("ast-footer-sticky-active"),o.parent().css("min-height",o.outerHeight()),o.stop().css({"max-width":a})))},e.prototype.update_attrs=function(){var o,t=this,e=jQuery(t.element),s=parseInt(t.options.gutter),i=t.options.max_width;"none"==t.options.header_style&&(o=e.offset().top||0),"ast-box-layout"!=t.options.site_layout&&(i=jQuery("body").width()),t.options.dependent&&jQuery.each(t.options.dependent,function(t,e){jQuery(e).length&&"on"==jQuery(e).parent().attr("data-stick-support")&&(dependent_height=jQuery(e).outerHeight(),s+=parseInt(dependent_height),o-=parseInt(dependent_height))}),t.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<a&&(s+=parseInt(t.options.admin_bar_height_lg),o-=parseInt(t.options.admin_bar_height_lg)),t.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=a&&a<=782&&(s+=parseInt(t.options.admin_bar_height_sm),o-=parseInt(t.options.admin_bar_height_sm)),t.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(s+=parseInt(t.options.admin_bar_height_xs),o-=parseInt(t.options.admin_bar_height_xs)),t.options.body_padding_support&&(s+=parseInt(jQuery("body").css("padding-top"),10),o-=parseInt(jQuery("body").css("padding-top"),10)),t.options.html_padding_support&&(s+=parseInt(jQuery("html").css("padding-top"),10),o-=parseInt(jQuery("html").css("padding-top"),10)),t.options.stick_upto_scroll=o,"none"==t.options.header_style&&e.parent().css("min-height",e.outerHeight()).attr("data-stick-gutter",parseInt(s)).attr("data-stick-maxwidth",parseInt(i))},e.prototype.hasShrink=function(t,e){o(r).scrollTop()>jQuery(t.element).outerHeight()?jQuery("body").addClass("ast-shrink-custom-header"):jQuery("body").removeClass("ast-shrink-custom-header")},e.prototype.stickRelease=function(t){var e=jQuery(t.element);"enabled"==(astraAddon.hook_sticky_header||"")&&"none"==t.options.header_style&&(e.removeClass("ast-header-sticky-active").stop().css({"max-width":"",top:"",padding:""}),e.parent().css("min-height",""),e.removeClass("ast-sticky-shrunk").stop()),"enabled"==(astraAddon.hook_sticky_footer||"")&&jQuery("body").removeClass("ast-footer-sticky-active")},e.prototype.init=function(){var e,t;jQuery(this.element)&&(e=this,t=jQuery(e.element),parseInt(e.options.gutter),t.position().top,"none"==e.options.header_style&&t.wrap(e.options.wrap).parent().css("min-height",t.outerHeight()).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(e.options.max_width)),e.update_attrs(),jQuery(r).on("resize",function(){e.stickRelease(e),e.update_attrs(),e.stick_me(e)}),jQuery(r).on("scroll",function(){e.stick_me(e,"scroll")}),jQuery(i).ready(function(t){e.stick_me(e)}))},o.fn[s]=function(t){return this.each(function(){o.data(this,"plugin_"+s)||o.data(this,"plugin_"+s,new e(this,t))})};var d=jQuery("body").width(),_=astraAddon.site_layout||"",h=astraAddon.hook_sticky_header||"",p=astraAddon.hook_shrink_header||"";sticky_header_on_devices=astraAddon.hook_sticky_header_on_devices||"desktop",site_layout_box_width=astraAddon.site_layout_box_width||1200,hook_sticky_footer=astraAddon.hook_sticky_footer||"",sticky_footer_on_devices=astraAddon.hook_sticky_footer_on_devices||"desktop","ast-box-layout"===_&&(d=parseInt(site_layout_box_width)),jQuery(i).ready(function(t){"enabled"==h&&jQuery(".ast-custom-header").astHookExtSticky({sticky_on_device:sticky_header_on_devices,header_style:"none",site_layout:_,max_width:d,active_shrink:p}),"enabled"==hook_sticky_footer&&jQuery(".ast-custom-footer").astHookExtSticky({sticky_on_device:sticky_footer_on_devices,max_width:d,site_layout:_,header_style:"none"})})}(jQuery,window);!function(o,i){var a="astExtSticky",d=i.document,r=(jQuery(i).outerWidth(),jQuery(i).width()),s={dependent:[],max_width:"",site_layout:"",break_point:920,admin_bar_height_lg:32,admin_bar_height_sm:46,admin_bar_height_xs:0,stick_upto_scroll:0,gutter:0,wrap:"<div></div>",body_padding_support:!0,html_padding_support:!0,shrink:{padding_top:"",padding_bottom:""},sticky_on_device:"desktop",header_style:"none",hide_on_scroll:"no"},n=0;function t(e,t){this.element=e,this.options=o.extend({},s,t),this._defaults=s,this._name=a,"1"==this.options.hide_on_scroll&&(this.navbarHeight=o(e).outerHeight()),this.lastScrollTop=0,this.delta=5,this.should_stick=!0,this.hideScrollInterval="",this.init()}t.prototype.stick_me=function(e,t){var a,s=jQuery(e.element);jQuery(i).outerWidth();stick_upto_scroll=parseInt(e.options.stick_upto_scroll),max_width=parseInt(s.parent().attr("data-stick-maxwidth")),gutter=parseInt(s.parent().attr("data-stick-gutter")),("desktop"!=e.options.sticky_on_device||!jQuery("body").hasClass("ast-header-break-point"))&&("mobile"!=e.options.sticky_on_device||jQuery("body").hasClass("ast-header-break-point"))&&jQuery(i).scrollTop()>stick_upto_scroll?(a=s,"1"===e.options.hide_on_scroll?e.hasScrolled(e,"stick"):"none"==e.options.header_style?(s.parent().css("min-height",s.outerHeight()),s.addClass("ast-sticky-active").stop().css({"max-width":max_width,top:gutter,"padding-top":e.options.shrink.padding_top,"padding-bottom":e.options.shrink.padding_bottom}),s.addClass("ast-sticky-shrunk").stop(),o(d).trigger("addStickyClass"),a.addClass("ast-header-sticked")):"slide"==e.options.header_style?(a.css({top:gutter}),a.addClass("ast-header-slide"),a.css("visibility","visible"),a.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),o("html").addClass("ast-header-stick-slide-active"),o(d).trigger("addStickyClass"),a.addClass("ast-header-sticked")):"fade"==e.options.header_style&&(a.css({top:gutter}),a.addClass("ast-header-fade"),a.css("visibility","visible"),a.addClass("ast-sticky-active").stop().css({opacity:"1"}),o("html").addClass("ast-header-stick-fade-active"),o(d).trigger("addStickyClass"),a.addClass("ast-header-sticked"))):e.stickRelease(e)},t.prototype.update_attrs=function(){var e,a,t=this,s=jQuery(t.element),i=parseInt(t.options.gutter),d=t.options.max_width;"none"!=t.options.header_style||jQuery("body").hasClass("ast-sticky-toggled-off")?o("#masthead").length&&(e=o("#masthead"),a=e.offset().top+e.outerHeight()+100||0):a=s.offset().top||0,"ast-box-layout"!=t.options.site_layout&&(d=jQuery("body").width()),t.options.dependent&&jQuery.each(t.options.dependent,function(e,t){jQuery(t).length&&"on"==jQuery(t).parent().attr("data-stick-support")&&(dependent_height=jQuery(t).outerHeight(),i+=parseInt(dependent_height),a-=parseInt(dependent_height))}),t.options.admin_bar_height_lg&&jQuery("#wpadminbar").length&&782<r&&(i+=parseInt(t.options.admin_bar_height_lg),a-=parseInt(t.options.admin_bar_height_lg)),t.options.admin_bar_height_sm&&jQuery("#wpadminbar").length&&600<=r&&r<=782&&(i+=parseInt(t.options.admin_bar_height_sm),a-=parseInt(t.options.admin_bar_height_sm)),t.options.admin_bar_height_xs&&jQuery("#wpadminbar").length&&(i+=parseInt(t.options.admin_bar_height_xs),a-=parseInt(t.options.admin_bar_height_xs)),t.options.body_padding_support&&(i+=parseInt(jQuery("body").css("padding-top"),10),a-=parseInt(jQuery("body").css("padding-top"),10)),t.options.html_padding_support&&(i+=parseInt(jQuery("html").css("padding-top"),10),a-=parseInt(jQuery("html").css("padding-top"),10)),C&&a--,t.options.stick_upto_scroll=a,"none"==t.options.header_style?s.parent().css("min-height",s.outerHeight()).attr("data-stick-gutter",parseInt(i)).attr("data-stick-maxwidth",parseInt(d)):(s.parent().attr("data-stick-gutter",parseInt(i)).attr("data-stick-maxwidth",parseInt(d)),"ast-padded-layout"===t.options.site_layout&&s.css("max-width",parseInt(d)))},t.prototype.hasScrolled=function(e,t){var a,s=o(i).scrollTop();Math.abs(n-s)<=5||(a=jQuery(e.element),n<s&&0<s?jQuery(e.element).removeClass("ast-nav-down").addClass("ast-nav-up"):s+o(i).height()<o(d).height()&&jQuery(e.element).removeClass("ast-nav-up").addClass("ast-nav-down"),n=s,o(e.element).hasClass("ast-nav-up")||"stick"!=t?(a.css({transform:"translateY(-100%)"}).stop(),setTimeout(function(){a.removeClass("ast-sticky-active")},300),a.css({visibility:"hidden",top:""}),o(d).trigger("removeStickyClass"),o("html").removeClass("ast-header-stick-scroll-active"),a.removeClass("ast-header-sticked")):(a.css({top:gutter}),a.addClass("ast-header-sticked"),a.addClass("ast-header-slide"),a.css("visibility","visible"),a.addClass("ast-sticky-active").stop().css({transform:"translateY(0)"}),o(d).trigger("addStickyClass"),o("html").addClass("ast-header-stick-scroll-active")))},t.prototype.stickRelease=function(e){var t=jQuery(e.element),a=t;"1"===e.options.hide_on_scroll?e.hasScrolled(e,"release"):"none"==e.options.header_style?(t.removeClass("ast-sticky-active").stop().css({"max-width":"",top:"",padding:""}),t.parent().css("min-height",""),o(d).trigger("removeStickyClass"),a.removeClass("ast-header-sticked"),t.removeClass("ast-sticky-shrunk").stop()):"slide"==e.options.header_style?(a.removeClass("ast-sticky-active").stop().css({transform:"translateY(-100%)"}),a.css({visibility:"hidden",top:""}),o("html").removeClass("ast-header-stick-slide-active"),o(d).trigger("removeStickyClass"),a.removeClass("ast-header-sticked")):"fade"==e.options.header_style&&(a.removeClass("ast-sticky-active").stop().css({opacity:"0"}),a.css({visibility:"hidden"}),a.removeClass("ast-header-sticked"),o(d).trigger("removeStickyClass"),o("html").removeClass("ast-header-stick-fade-active"))},t.prototype.init=function(){var t,e;jQuery(this.element)&&(t=this,e=jQuery(t.element),("none"==t.options.header_style?e.wrap(t.options.wrap).parent().css("min-height",e.outerHeight()):e.wrap(t.options.wrap)).attr("data-stick-support","on").attr("data-stick-maxwidth",parseInt(t.options.max_width)),t.update_attrs(),jQuery(i).on("resize",function(){t.stickRelease(t),t.update_attrs(),t.stick_me(t)}),jQuery(i).on("scroll",function(){t.stick_me(t,"scroll"),jQuery("body").hasClass("ast-sticky-toggled-off")&&(t.update_attrs(),t.stick_me(t,"scroll"))}),jQuery(d).ready(function(e){t.stick_me(t)}))},o.fn[a]=function(e){return this.each(function(){o.data(this,"plugin_"+a)||o.data(this,"plugin_"+a,new t(this,e))})};var e,h=jQuery("body"),l=h.width(),c=astraAddon.stick_header_meta||"default",p=astraAddon.header_main_stick||"",y=astraAddon.header_main_shrink||"",_=astraAddon.header_above_stick||"",m=astraAddon.header_below_stick||"",u=astraAddon.header_main_stick_meta||"",g=astraAddon.header_above_stick_meta||"",k=astraAddon.header_below_stick_meta||"",v=astraAddon.site_layout||"",b=astraAddon.site_layout_box_width||1200,w=astraAddon.sticky_header_on_devices||"desktop",j=astraAddon.sticky_header_style||"none",Q=astraAddon.sticky_hide_on_scroll||"",x=astraAddon.header_logo_width||"",f=astraAddon.responsive_header_logo_width||"",C=astraAddon.stick_origin_position||"",I=astraAddon.tablet_break_point||768,S=astraAddon.mobile_break_point||544;"disabled"!=c&&("enabled"===c&&(p=u,_=g,m=k),0<o("header .site-logo-img img").length&&(void 0===(k=(g=o("header .site-logo-img img")).attr("height"))&&(k=g.height()),0==k&&(k=""),-1===k.toString().indexOf("%")&&(k+="px"),""!=f.desktop||""!=f.tablet||""!=f.mobile?e="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .site-logo-img .astra-logo-svg { width: "+f.desktop+"px; } @media (max-width: "+I+"px) { #masthead .site-logo-img .astra-logo-svg { width: "+f.tablet+"px; } } @media (max-width: "+S+"px) { #masthead .site-logo-img .astra-logo-svg{ width: "+f.mobile+"px; } }  #masthead .site-logo-img img { max-height: "+k+"; width: auto; } </style>":""!=x&&(e="<style type='text/css' id='ast-site-identity-img' class='ast-site-identity-img' > #masthead .site-logo-img .astra-logo-svg { width: "+x+"px; } #masthead .site-logo-img img { max-height: "+k+"; width: auto; } </style>"),o("head").append(e)),(p||_||m)&&(o(d).on("addStickyClass",function(){var e="";"1"!=p&&"on"!=p||(e+=" ast-primary-sticky-header-active"),"1"!=_&&"on"!=_||(e+=" ast-above-sticky-header-active"),"1"!=m&&"on"!=m||(e+=" ast-below-sticky-header-active"),o("body").addClass(e)}),o(d).on("removeStickyClass",function(){var e="";"1"!=p&&"on"!=p||(e+=" ast-primary-sticky-header-active"),"1"!=_&&"on"!=_||(e+=" ast-above-sticky-header-active"),"1"!=m&&"on"!=m||(e+=" ast-below-sticky-header-active"),o("body").removeClass(e)}),"ast-box-layout"===v&&(l=parseInt(b)),jQuery(d).ready(function(e){var t;"1"==Q?("1"==y&&jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=_&&"on"!=_&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=p&&"on"!=p&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=m&&"on"!=m&&jQuery("#ast-fixed-header .ast-below-header").hide(),jQuery("#ast-fixed-header").astExtSticky({max_width:l,site_layout:v,sticky_on_device:w,header_style:"slide",hide_on_scroll:Q})):"none"==j?("1"!=_&&"on"!=_||jQuery("#masthead .ast-above-header").astExtSticky({max_width:l,site_layout:v,sticky_on_device:w,header_style:j,hide_on_scroll:Q}),"1"!=p&&"on"!=p||"1"!=m&&"on"!=m?("1"!=p&&"on"!=p||(t=y?{padding_top:"",padding_bottom:""}:"",jQuery("#masthead .main-header-bar").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:l,site_layout:v,shrink:t,sticky_on_device:w,header_style:j,hide_on_scroll:Q}),jQuery("#masthead .ast-custom-header").astExtSticky({max_width:l,site_layout:v,shrink:t,sticky_on_device:w,header_style:j,hide_on_scroll:Q})),"1"!=m&&"on"!=m||jQuery("#masthead .ast-below-header").astExtSticky({dependent:["#masthead .main-header-bar","#masthead .ast-above-header"],max_width:l,site_layout:v,sticky_on_device:w,header_style:j,hide_on_scroll:Q})):(jQuery("#masthead .main-header-bar-wrap").wrap('<div class="ast-stick-primary-below-wrapper"></div>'),jQuery("#masthead .ast-below-header-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .main-header-bar-wrap").prependTo(".ast-stick-primary-below-wrapper"),jQuery("#masthead .ast-stick-primary-below-wrapper").astExtSticky({dependent:["#masthead .ast-above-header"],max_width:l,site_layout:v,shrink:t,sticky_on_device:w,header_style:j,hide_on_scroll:Q}))):(jQuery("#ast-fixed-header").addClass("ast-sticky-shrunk").stop(),"1"!=_&&"on"!=_&&jQuery("#ast-fixed-header .ast-above-header").hide(),"1"!=p&&"on"!=p&&jQuery("#ast-fixed-header .main-header-bar").hide(),"1"!=m&&"on"!=m&&jQuery("#ast-fixed-header .ast-below-header").hide(),"1"!=_&&"on"!=_&&"1"!=p&&"on"!=p&&"1"!=m&&"on"!=m||(t=y?{padding_top:"",padding_bottom:""}:"",jQuery("#ast-fixed-header").astExtSticky({max_width:l,site_layout:v,shrink:t,sticky_on_device:w,header_style:j,hide_on_scroll:Q}))),"mobile"!=w&&"both"!=w||(jQuery("#masthead .main-header-menu-toggle").click(function(e){var t,a;jQuery("#masthead .main-header-menu-toggle").hasClass("toggled")?(h.addClass("ast-sticky-toggled-off"),"none"==s.header_style&&(jQuery("#masthead .main-header-bar").hasClass("ast-sticky-active")||jQuery("#masthead .ast-stick-primary-below-wrapper").hasClass("ast-sticky-active"))&&(t=jQuery(i).height(),a=0,jQuery("#masthead .ast-above-header")&&jQuery("#masthead .ast-above-header").length&&(a=jQuery("#masthead .ast-above-header").height()),"1"==Q&&jQuery("html").css({overflow:"hidden"}),("1"!=y||"1"!=p&&"on"!=p||"1"!=m&&"on"!=m?jQuery("#masthead .main-header-bar.ast-sticky-active"):jQuery("#masthead .ast-stick-primary-below-wrapper")).css({"max-height":t-a+"px","overflow-y":"auto"}))):(h.addClass("ast-sticky-toggled-off"),jQuery("html").css({overflow:""}),("1"!=y||"1"!=p&&"on"!=p||"1"!=m&&"on"!=m?jQuery("#masthead .main-header-bar.ast-sticky-active"):jQuery("#masthead .ast-stick-primary-below-wrapper")).css({"max-height":"","overflow-y":""}))}),jQuery("#ast-fixed-header .main-header-menu-toggle").click(function(e){var t;jQuery("#ast-fixed-header .main-header-menu-toggle").hasClass("toggled")?(t=jQuery(i).height(),"1"==Q&&jQuery("html").css({overflow:"auto"}),jQuery("#ast-fixed-header").css({"max-height":t+"px","overflow-y":"auto"})):(jQuery("html").css({overflow:""}),jQuery("#ast-fixed-header").css({"max-height":"","overflow-y":""}))}))})))}(jQuery,window);jQuery,jQuery(document).ready(function(o){var l=document.querySelector("#page header");jQuery("#ast-scroll-top")&&jQuery("#ast-scroll-top").length&&(ast_scroll_top=function(){var o=jQuery("#ast-scroll-top"),e=o.css("content"),t=o.data("on-devices"),e=e.replace(/[^0-9]/g,"");"both"==t||"desktop"==t&&"769"==e||"mobile"==t&&""==e?(e=window.pageYOffset||document.body.scrollTop,l&&l.length?e>l.offsetHeight+100?o.show():o.hide():300<jQuery(window).scrollTop()?o.show():o.hide()):o.hide()},ast_scroll_top(),jQuery(window).on("scroll",function(){ast_scroll_top()}),jQuery("#ast-scroll-top").on("click",function(o){o.preventDefault(),jQuery("html,body").animate({scrollTop:0},200)}))});function display_mega_menu_on_load(){var e=document.querySelectorAll(".content-width-mega");if(0<e.length)for(var a=0;a<e.length;a++)e[a].addEventListener("mouseenter",function(e){e.target.querySelector(".astra-mega-menu-width-content").classList.remove("ast-hidden")});var t=document.querySelectorAll(".menu-container-width-mega");if(0<t.length)for(a=0;a<t.length;a++)t[a].addEventListener("mouseenter",function(e){e.target.querySelector(".astra-mega-menu-width-menu-container").classList.remove("ast-hidden")});var s=document.querySelectorAll(".full-width-mega");if(0<s.length)for(a=0;a<s.length;a++)s[a].addEventListener("mouseenter",function(e){var a=e.target.querySelector(".astra-full-megamenu-wrapper"),e=e.target.querySelector(".astra-mega-menu-width-full");a.classList.remove("ast-hidden"),e.classList.remove("ast-hidden")});var n=document.querySelectorAll(".full-stretched-width-mega");if(0<n.length)for(a=0;a<n.length;a++)n[a].addEventListener("mouseenter",function(e){var a=e.target.querySelector(".astra-full-megamenu-wrapper"),e=e.target.querySelector(".astra-mega-menu-width-full-stretched");a.classList.remove("ast-hidden"),e.classList.remove("ast-hidden")})}document.addEventListener("DOMContentLoaded",display_mega_menu_on_load);var items=document.getElementsByClassName("astra-megamenu-li");[].slice.call(items).forEach(function(l){jQuery(l).hover(function(){var e,a,t,s=jQuery(l).parents(".ast-container"),n=s.children(),r=s.parent(),i=jQuery(this);(i.hasClass("full-width-mega")||i.hasClass("full-stretched-width-mega"))&&(n=jQuery(n).closest(".ast-container")),parseInt(jQuery(window).width())>parseInt(astra.break_point)?(e=n.width(),a=n.offset(),s=(t=i.offset()).left-(a.left+parseFloat(n.css("paddingLeft"))),a=r.width(),n=r.offset(),t=t.left-(n.left+parseFloat(r.css("paddingLeft"))),i.hasClass("menu-container-width-mega")&&(n=jQuery(".main-navigation"),r.hasClass("ast-above-header")?n=jQuery(".ast-above-header-navigation"):r.hasClass("ast-below-header")&&(n=jQuery(".ast-below-header-actual-nav")),$target_container=n.length?n:i.parent("ul"),e=$target_container.width()+"px",r=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),n=i.offset(),n=jQuery(window).width()-r-n.left,s=parseInt($target_container.width()-n)),i.hasClass("full-width-mega")?(i.find(".astra-full-megamenu-wrapper").css({left:"-"+t+"px",width:a}),i.find(".astra-megamenu").css({width:e})):i.hasClass("full-stretched-width-mega")?i.find(".astra-full-megamenu-wrapper").css({left:"-"+t+"px",width:a}):i.find(".astra-megamenu").css({left:"-"+s+"px",width:e})):(i.find(".astra-megamenu").css({left:"",width:"","background-image":""}),i.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""}))})}),[].slice.call(items).forEach(function(e){var a=jQuery(e).parents(".ast-container"),l=a.children(),u=a.parent(),d=jQuery(e);(d.hasClass("full-width-mega")||d.hasClass("full-stretched-width-mega"))&&(l=jQuery(l).closest(".ast-container")),d.find(".menu-link").focusin(function(e){var a,t,s,n,r,i;d.find(".sub-menu").addClass("astra-megamenu-focus"),d.find(".astra-full-megamenu-wrapper").addClass("astra-megamenu-wrapper-focus"),parseInt(jQuery(window).width())>parseInt(astra.break_point)?(a=l.width(),s=l.offset(),i=(r=d.offset()).left-(s.left+parseFloat(l.css("paddingLeft"))),t=u.width(),n=u.offset(),s=r.left-(n.left+parseFloat(u.css("paddingLeft"))),d.hasClass("menu-container-width-mega")&&(r=jQuery(".main-navigation"),u.hasClass("ast-above-header")?r=jQuery(".ast-above-header-navigation"):u.hasClass("ast-below-header")&&(r=jQuery(".ast-below-header-actual-nav")),$target_container=r.length?r:d.parent("ul"),a=$target_container.width()+"px",n=jQuery(window).width()-($target_container.offset().left+$target_container.outerWidth()),r=d.offset(),r=jQuery(window).width()-n-r.left,i=parseInt($target_container.width()-r)),d.hasClass("full-width-mega")?(d.find(".astra-full-megamenu-wrapper").css({left:"-"+s+"px",width:t}),d.find(".astra-megamenu").css({width:a})):d.hasClass("full-stretched-width-mega")?d.find(".astra-full-megamenu-wrapper").css({left:"-"+s+"px",width:t}):d.find(".astra-megamenu").css({left:"-"+i+"px",width:a})):(d.find(".astra-megamenu").css({left:"",width:"","background-image":""}),d.find(".astra-full-megamenu-wrapper").css({left:"",width:"","background-image":""}))}),d.find(".menu-link").keydown(function(e){9==e.which&&e.shiftKey&&(d.find(".sub-menu").removeClass("astra-megamenu-focus"),d.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus"))}),jQuery(e).find(".sub-menu .menu-item").last().focusout(function(){d.find(".sub-menu").removeClass("astra-megamenu-focus"),d.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),jQuery(window).click(function(){d.find(".sub-menu").removeClass("astra-megamenu-focus"),d.find(".astra-full-megamenu-wrapper").removeClass("astra-megamenu-wrapper-focus")}),d.click(function(e){jQuery(e.target).hasClass("menu-item")&&e.stopImmediatePropagation()})});!function(){var e,t;function o(e){var t=(t=document.body.className).replace(e,"");document.body.className=t}function r(e){e.style.display="block",setTimeout(function(){e.style.opacity=1},1)}function n(e){e.style.opacity="",setTimeout(function(){e.style.display=""},200)}e="iPhone"==navigator.userAgent.match(/iPhone/i)?"iphone":"",t="iPod"==navigator.userAgent.match(/iPod/i)?"ipod":"",document.body.className+=" "+e,document.body.className+=" "+t;for(var a=document.querySelectorAll("a.astra-search-icon:not(.slide-search)"),s=0;a.length>s;s++)a[s].onclick=function(e){var t,a,o;if(e.preventDefault(),e=e||window.event,this.classList.contains("header-cover"))for(var n=document.querySelectorAll(".ast-search-box.header-cover"),s=0;s<n.length;s++)for(var c=n[s].parentNode.querySelectorAll("a.astra-search-icon"),l=0;l<c.length;l++)c[l]==this&&(r(n[s]),n[s].querySelector("input.search-field").focus(),t=n[s],o=a=void 0,document.body.classList.contains("ast-header-break-point")&&(a=document.querySelector(".main-navigation"),null!==(o=document.querySelector(".main-header-bar"))&&null!==a&&(a=a.offsetHeight,o=o.offsetHeight,o=a&&!document.body.classList.contains("ast-no-toggle-menu-enable")?parseFloat(a)-parseFloat(o):parseFloat(o),t.style.maxHeight=Math.abs(o)+"px")));else!this.classList.contains("full-screen")||(e=document.getElementById("ast-seach-full-screen-form")).classList.contains("full-screen")&&(r(e),document.body.className+=" full-screen",e.querySelector("input.search-field").focus())};for(var c=document.getElementsByClassName("close"),s=0,l=c.length;s<l;++s)c[s].onclick=function(e){e=e||window.event;for(var t=this;;){if(t.parentNode.classList.contains("ast-search-box")){n(t.parentNode),o("full-screen");break}if(t.parentNode.classList.contains("site-header"))break;t=t.parentNode}};document.onkeydown=function(e){if(27==e.keyCode){e=document.getElementById("ast-seach-full-screen-form");null!=e&&(n(e),o("full-screen"));for(var t=document.querySelectorAll(".ast-search-box.header-cover"),a=0;a<t.length;a++)n(t[a])}},window.addEventListener("resize",function(){if("BODY"===document.activeElement.tagName&&"INPUT"!=document.activeElement.tagName){var e=document.querySelectorAll(".ast-search-box.header-cover");if(!document.body.classList.contains("ast-header-break-point"))for(var t=0;t<e.length;t++)e[t].style.maxHeight="",e[t].style.opacity="",e[t].style.display=""}})}();