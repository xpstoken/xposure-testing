!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=336)}({10:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=i=function(e){return n(e)}:e.exports=i=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},i(t)}e.exports=i},11:function(e,t,n){var i=n(10),o=n(29);e.exports=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?o(e):t}},12:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},13:function(e,t,n){var i=n(58);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}},29:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},336:function(e,t,n){n(337),e.exports=n(338)},337:function(e,t,n){},338:function(e,t,n){"use strict";n.r(t);var i=n(5),o=n.n(i),r=n(8),a=n.n(r),s=n(7);new(function(){function e(){o()(this,e),window.addEventListener("load",function(){window.addDynamicEventListener(document,"click",'tr[data-slug="give"] .deactivate a',e.deactivateGive),window.addDynamicEventListener(document,"click",'input[name="give-survey-radios"]',e.toggleAdditionalFields)})}return a()(e,null,[{key:"deactivateGive",value:function(t){t.preventDefault(),window.deactivationLink=t.target.href,jQuery.ajax({url:ajaxurl,type:"POST",data:{action:"give_deactivation_popup"}}).done(function(t){new s.GiveFormModal({classes:{modalWrapper:"deactivation-survey-wrap"},modalContent:{desc:t.html,cancelBtnTitle:give_vars.cancel,confirmBtnTitle:give_vars.submit_and_deactivate,link:window.deactivationLink,link_text:give_vars.skip_and_deactivate},successConfirm:function(){var t=document.querySelectorAll(".deactivation-error"),n=document.querySelectorAll('input[name="give-survey-radios"]:checked'),i=document.querySelectorAll(".deactivation-survey-form"),o=!0;t.length>0&&(o=!1),0===n.length&&0===t.length&&(i[0].innerHTML+='\n\t\t\t\t\t\t\t<div class="notice notice-error deactivation-error">\n\t\t\t\t\t\t\t\t'.concat(give_vars.deactivation_no_option_selected,"\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t"),o=!1);var r="";if(n.length>0&&null!==n[0].parentNode.nextElementSibling)if(0<(r=n[0].parentNode.nextElementSibling.querySelectorAll("input, textarea")).length&&!r[0].value&&0===t.length){var a=document.createElement("div");a.setAttribute("class","notice notice-error deactivation-error");var s=document.createTextNode(give_vars.please_fill_field);a.appendChild(s),i[0].appendChild(a),o=!1}else 0<r.length&&r[0].value&&0!==t.length&&(t[0].parentNode.removeChild(t[0]),o=!0);if(o){var c=jQuery(".deactivation-survey-form").serialize();jQuery.ajax({url:ajaxurl,type:"POST",data:{action:"deactivation_form_submit","form-data":c,nonce:give_vars.nonce},beforeSend:function(){document.querySelectorAll(".give-modal__controls .spinner")[0].style.display="block"}}).done(function(t){t.success&&(t.data.delete_data?e.deleteAllData(1,c):(jQuery.magnificPopup.close(),window.location.replace(window.deactivationLink)))})}}}).render()})}},{key:"deleteAllData",value:function(t,n){jQuery.ajax({url:ajaxurl,type:"POST",data:{form:n,action:"give_do_ajax_export",step:t},dataType:"json"}).done(function(t){!0===t.success||t.error?!0===t.success&&(jQuery.magnificPopup.close(),window.location.replace(window.deactivationLink)):e.deleteAllData(parseInt(t.step),n)})}},{key:"toggleAdditionalFields",value:function(e){var t=document.querySelectorAll(".deactivation-error"),n=document.querySelectorAll(".give-survey-extra-field");(t.length>0&&t[0].parentNode.removeChild(t[0]),n.forEach(function(e){e.style.display="none",e.querySelectorAll("input, textarea")[0].setAttribute("disabled","disabled")}),null!==e.target.parentNode.nextElementSibling)&&(e.target.parentNode.nextElementSibling.style.display="block",e.target.parentNode.nextElementSibling.querySelectorAll("input, textarea")[0].removeAttribute("disabled"))}}]),e}())},39:function(e,t){e.exports=jQuery},5:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},56:function(e,t,n){var i,o,r;
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */o=[n(39)],void 0===(r="function"==typeof(i=function(e){var t,n,i,o,r,a,s=function(){},c=!!window.jQuery,l=e(window),u=function(e,n){t.ev.on("mfp"+e+".mfp",n)},p=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},d=function(n,i){t.ev.triggerHandler("mfp"+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},f=function(n){return n===a&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),a=n),t.currTemplate.closeBtn},m=function(){e.magnificPopup.instance||((t=new s).init(),e.magnificPopup.instance=t)};s.prototype={constructor:s,init:function(){var n=navigator.appVersion;t.isLowIE=t.isIE8=document.all&&!document.addEventListener,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1}(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),i=e(document),t.popupsCache={}},open:function(n){var o;if(!1===n.isObj){t.items=n.items.toArray(),t.index=0;var a,s=n.items;for(o=0;o<s.length;o++)if((a=s[o]).parsed&&(a=a.el[0]),a===n.el[0]){t.index=o;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(!t.isOpen){t.types=[],r="",n.mainEl&&n.mainEl.length?t.ev=n.mainEl.eq(0):t.ev=i,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=p("bg").on("click.mfp",function(){t.close()}),t.wrap=p("wrap").attr("tabindex",-1).on("click.mfp",function(e){t._checkIfClose(e.target)&&t.close()}),t.container=p("container",t.wrap)),t.contentContainer=p("content"),t.st.preloader&&(t.preloader=p("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(o=0;o<c.length;o++){var m=c[o];m=m.charAt(0).toUpperCase()+m.slice(1),t["init"+m].call(t)}d("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(u("MarkupParse",function(e,t,n,i){n.close_replaceWith=f(i.type)}),r+=" mfp-close-btn-in"):t.wrap.append(f())),t.st.alignTop&&(r+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:l.scrollTop(),position:"absolute"}),(!1===t.st.fixedBgPos||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:i.height(),position:"absolute"}),t.st.enableEscapeKey&&i.on("keyup.mfp",function(e){27===e.keyCode&&t.close()}),l.on("resize.mfp",function(){t.updateSize()}),t.st.closeOnContentClick||(r+=" mfp-auto-cursor"),r&&t.wrap.addClass(r);var g=t.wH=l.height(),v={};if(t.fixedContentPos&&t._hasScrollBar(g)){var h=t._getScrollbarSize();h&&(v.marginRight=h)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):v.overflow="hidden");var y=t.st.mainClass;return t.isIE7&&(y+=" mfp-ie7"),y&&t._addClassToMFP(y),t.updateItemHTML(),d("BuildControls"),e("html").css(v),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||e(document.body)),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP("mfp-ready"),t._setFocus()):t.bgOverlay.addClass("mfp-ready"),i.on("focusin.mfp",t._onFocusIn)},16),t.isOpen=!0,t.updateSize(g),d("Open"),n}t.updateItemHTML()},close:function(){t.isOpen&&(d("BeforeClose"),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP("mfp-removing"),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){d("Close");var n="mfp-removing mfp-ready ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var o={marginRight:""};t.isIE7?e("body, html").css("overflow",""):o.overflow="",e("html").css(o)}i.off("keyup.mfp focusin.mfp"),t.ev.off(".mfp"),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&!0!==t.currTemplate[t.currItem.type]||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t.st.autoFocusLast&&t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,d("AfterClose")},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||l.height();t.fixedContentPos||t.wrap.css("height",t.wH),d("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(d("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var r=!!t.st[i]&&t.st[i].markup;d("FirstMarkupParse",r),t.currTemplate[i]=!r||e(r)}o&&o!==n.type&&t.container.removeClass("mfp-"+o+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,d("Change",n),o=n.type,t.container.prepend(t.contentContainer),d("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&!0===t.currTemplate[n]?t.content.find(".mfp-close").length||t.content.append(f()):t.content=e:t.content="",d("BeforeAppend"),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i,o=t.items[n];if(o.tagName?o={el:e(o)}:(i=o.type,o={data:o,src:o.src}),o.el){for(var r=t.types,a=0;a<r.length;a++)if(o.el.hasClass("mfp-"+r[a])){i=r[a];break}o.src=o.el.attr("data-mfp-src"),o.src||(o.src=o.el.attr("href"))}return o.type=i||t.st.type||"inline",o.index=n,o.parsed=!0,t.items[n]=o,d("ElementParse",o),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||!(2===n.which||n.ctrlKey||n.metaKey||n.altKey||n.shiftKey)){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(l.width()<a)return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};d("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass("mfp-prevent-close")){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?i.height():document.body.scrollHeight)>(e||l.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){if(n.target!==t.wrap[0]&&!e.contains(t.wrap[0],n.target))return t._setFocus(),!1},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),d("MarkupParse",[t,n,i]),e.each(n,function(n,i){if(void 0===i||!1===i)return!0;if((o=n.split("_")).length>1){var r=t.find(".mfp-"+o[0]);if(r.length>0){var a=o[1];"replaceWith"===a?r[0]!==i[0]&&r.replaceWith(i):"img"===a?r.is("img")?r.attr("src",i):r.replaceWith(e("<img>").attr("src",i).attr("class",r.attr("class"))):r.attr(o[1],i)}}else t.find(".mfp-"+n).html(i)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:s.prototype,modules:[],open:function(t,n){return m(),(t=t?e.extend(!0,{},t):{}).isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},e.fn.magnificPopup=function(n){m();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=c?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),c?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var g,v,h,y=function(){h&&(v.after(h.addClass(g)).detach(),h=null)};e.magnificPopup.registerModule("inline",{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push("inline"),u("Close.inline",function(){y()})},getInline:function(n,i){if(y(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(v||(g=o.hiddenClass,v=p(g),g="mfp-"+g),h=r.after(v).detach().removeClass(g)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var b,C=function(){b&&e(document.body).removeClass(b)},w=function(){C(),t.req&&t.req.abort()};e.magnificPopup.registerModule("ajax",{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push("ajax"),b=t.st.ajax.cursor,u("Close.ajax",w),u("BeforeChange.ajax",w)},getAjax:function(n){b&&e(document.body).addClass(b),t.updateStatus("loading");var i=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};d("ParseAjax",a),t.appendContent(e(a.data),"ajax"),n.finished=!0,C(),t._setFocus(),setTimeout(function(){t.wrap.addClass("mfp-ready")},16),t.updateStatus("ready"),d("AjaxContentAdded")},error:function(){C(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(i),""}}});var x,_,k=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var n=t.st.image,i=".image";t.types.push("image"),u("Open"+i,function(){"image"===t.currItem.type&&n.cursor&&e(document.body).addClass(n.cursor)}),u("Close"+i,function(){n.cursor&&e(document.body).removeClass(n.cursor),l.off("resize.mfp")}),u("Resize"+i,t.resizeImage),t.isLowIE&&u("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,x&&clearInterval(x),e.isCheckingImgSize=!1,d("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){x&&clearInterval(x),x=setInterval(function(){i.naturalWidth>0?t._onImageHasSize(e):(n>200&&clearInterval(x),3==++n?o(10):40===n?o(50):100===n&&o(500))},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,d("ImageLoadComplete")):++o<200?setTimeout(r,100):a())},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,c=i.find(".mfp-img");if(c.length){var l=document.createElement("img");l.className="mfp-img",n.el&&n.el.find("img").length&&(l.alt=n.el.find("img").attr("alt")),n.img=e(l).on("load.mfploader",r).on("error.mfploader",a),l.src=n.src,c.is("img")&&(n.img=n.img.clone()),(l=n.img[0]).naturalWidth>0?n.hasSize=!0:l.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:k(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(x&&clearInterval(x),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}}),e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},c=function(){t.content.css("visibility","visible")};u("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),!(e=t._getItemToZoom()))return void c();(r=s(e)).css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){c(),setTimeout(function(){r.remove(),e=r=null,d("ZoomAnimationEnded")},16)},a)},16)}}),u("BeforeClose"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(!(e=t._getItemToZoom()))return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),u("Close"+i,function(){t._allowZoom()&&(c(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return!!t.currItem.hasSize&&t.currItem.img},_getOffset:function(n){var i,o=(i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem)).offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(c?i.innerHeight():i[0].offsetHeight)-a-r};return void 0===_&&(_=void 0!==document.createElement("p").style.MozTransform),_?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var S=function(e){if(t.currTemplate.iframe){var n=t.currTemplate.iframe.find("iframe");n.length&&(e||(n[0].src="//about:blank"),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule("iframe",{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push("iframe"),u("BeforeChange",function(e,t,n){t!==n&&("iframe"===t?S():"iframe"===n&&S(!0))}),u("Close.iframe",function(){S()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){if(o.indexOf(this.index)>-1)return this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var P=function(e){var n=t.items.length;return e>n-1?e-n:e<0?n+e:e},I=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,o=".mfp-gallery";if(t.direction=!0,!n||!n.enabled)return!1;r+=" mfp-gallery",u("Open"+o,function(){n.navigateByImgClick&&t.wrap.on("click"+o,".mfp-img",function(){if(t.items.length>1)return t.next(),!1}),i.on("keydown"+o,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),u("UpdateStatus"+o,function(e,n){n.text&&(n.text=I(n.text,t.currItem.index,t.items.length))}),u("MarkupParse"+o,function(e,i,o,r){var a=t.items.length;o.counter=a>1?I(n.tCounter,r.index,a):""}),u("BuildControls"+o,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass("mfp-prevent-close"),r=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass("mfp-prevent-close");o.click(function(){t.prev()}),r.click(function(){t.next()}),t.container.append(o.add(r))}}),u("Change"+o,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),u("Close"+o,function(){i.off(o),t.wrap.off("click"+o),t.arrowRight=t.arrowLeft=null})},next:function(){t.direction=!0,t.index=P(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=P(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;e<=(t.direction?o:i);e++)t._preloadItem(t.index+e);for(e=1;e<=(t.direction?i:o);e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=P(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),d("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,d("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}}),e.magnificPopup.registerModule("retina",{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;(n=isNaN(n)?n():n)>1&&(u("ImageHasSize.retina",function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),u("ElementParse.retina",function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),m()})?i.apply(t,o):i)||(e.exports=r)},57:function(e,t){!function(e){"use strict";Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1}),e.addDynamicEventListener=function(e,t,n,i,o){e.addEventListener(t,function(e,t){return function(n){n.target&&n.target.matches(e)&&t.apply(this,arguments)}}(n,i),o)}}(window)},58:function(e,t){function n(t,i){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,i)}e.exports=n},7:function(e,t,n){"use strict";n.r(t),n.d(t,"GiveModal",function(){return f}),n.d(t,"GiveErrorAlert",function(){return m}),n.d(t,"GiveWarningAlert",function(){return g}),n.d(t,"GiveNoticeAlert",function(){return v}),n.d(t,"GiveSuccessAlert",function(){return h}),n.d(t,"GiveConfirmModal",function(){return y}),n.d(t,"GiveFormModal",function(){return b});var i=n(11),o=n.n(i),r=n(12),a=n.n(r),s=n(13),c=n.n(s),l=n(5),u=n.n(l),p=n(8),d=n.n(p),f=(n(56),n(57),function(){function e(t){if(u()(this,e),e===this.constructor)throw new Error("Abstract classes can't be instantiated.");this.config=Object.assign({type:"",triggerSelector:"",externalPlugin:"magnificPopup",classes:{modalWrapper:""},modalContent:{}},t),this.config.mainClass="".concat(this.config.mainClass?this.config.mainClass:""," modal-fade-slide").trim()}return d()(e,[{key:"init",value:function(){this.setupTemplate(),this.popupConfig(),this.__setupClickEvent()}},{key:"getTemplate",value:function(){var e='<div class="give-hidden"></div>';return this.config.type.length&&(e='<div class="give-modal give-modal--zoom '.concat(this.config.classes.modalWrapper?"".concat(this.config.classes.modalWrapper).trim():"",'">\n\n\t\t\t\t<div class="give-modal__body">\n\t\t\t\t\t').concat(this.config.modalContent.title?'<h2 class="give-modal__title">'.concat(this.config.modalContent.title,"</h2>"):"","\n\t\t\t\t\t").concat(this.config.modalContent.desc?'<p class="give-modal__description">'.concat(this.config.modalContent.desc,"</p>"):"",'\n\t\t\t\t</div>\n\t\n\t\t\t\t<div class="give-modal__controls">\n\n\t\t\t\t\t').concat("form"===this.config.type?'<div class="spinner"></div>':"","\n\t\t\t\t\t").concat("form"===this.config.type?'<a class="give-modal--additional-link" href="'.concat(this.config.modalContent.link,'">').concat(this.config.modalContent.link_text,"</a>"):"",'\n\n\t\t\t\t\t<button class="give-button give-button--secondary give-popup-close-button">\n\t\t\t\t\t\t').concat(this.config.modalContent.cancelBtnTitle?this.config.modalContent.cancelBtnTitle:"confirm"===this.config.type?Give.fn.getGlobalVar("cancel"):Give.fn.getGlobalVar("close"),"\n\t\t\t\t\t</button>\n\n\t\t\t\t\t").concat("confirm"!==this.config.type&&"form"!==this.config.type?"":'<button class="give-button give-button--primary give-popup-'.concat(this.config.type,'-button">\n\n\t\t\t\t\t\t').concat(this.config.modalContent.confirmBtnTitle?this.config.modalContent.confirmBtnTitle:Give.fn.getGlobalVar("confirm"),"\n\t\t\t\t\t</button>"),"\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>")),e}},{key:"setupTemplate",value:function(){this.config.template=this.getTemplate()}},{key:"__setupClickEvent",value:function(){this.config.triggerSelector.length&&jQuery(this.config.triggerSelector).magnificPopup(this.config)}},{key:"popupConfig",value:function(){"magnificPopup"===this.config.externalPlugin&&(this.config.items=this.config.items||{src:this.config.template,type:"inline"},this.config.removalDelay=300,this.config.fixedContentPos=!0,this.config.fixedBgPos=!0,this.config.alignTop=!0,this.config.showCloseBtn=!1,this.config.closeOnBgClick=!1,this.config.enableEscapeKey=!0,this.config.focus=".give-popup-close-button")}},{key:"render",value:function(){switch(this.config.externalPlugin){case"magnificPopup":this.config.triggerSelector||jQuery.magnificPopup.open(this.config)}return this}}],[{key:"__closePopup",value:function(e){e.preventDefault(),jQuery.magnificPopup.instance.close()}}]),e}()),m=function(e){function t(e){var n;return u()(this,t),e.type="alert",(n=o()(this,a()(t).call(this,e))).config.classes.modalWrapper="give-modal--error",n.init(),n}return c()(t,e),t}(f),g=function(e){function t(e){var n;return u()(this,t),e.type="alert",(n=o()(this,a()(t).call(this,e))).config.classes.modalWrapper="give-modal--warning",n.init(),n}return c()(t,e),t}(f),v=function(e){function t(e){var n;return u()(this,t),e.type="alert",(n=o()(this,a()(t).call(this,e))).config.classes.modalWrapper="give-modal--notice",n.init(),n}return c()(t,e),t}(f),h=function(e){function t(e){var n;return u()(this,t),e.type="alert",(n=o()(this,a()(t).call(this,e))).config.classes.modalWrapper="give-modal--success",n.init(),n}return c()(t,e),t}(f),y=function(e){function t(e){var n;return u()(this,t),e.type="confirm",n=o()(this,a()(t).call(this,e)),void 0!==e.modalWrapper&&""!==e.modalWrapper&&(n.config.classes.modalWrapper=e.modalWrapper),n.init(),n}return c()(t,e),d()(t,null,[{key:"__confirmPopup",value:function(){"function"==typeof jQuery.magnificPopup.instance.st.successConfirm&&(jQuery.magnificPopup.instance.st.successConfirm({el:jQuery.magnificPopup.instance.st.el}),jQuery.magnificPopup.close())}}]),t}(f),b=function(e){function t(e){var n;return u()(this,t),e.type="form",n=o()(this,a()(t).call(this,e)),void 0!==e.modalWrapper&&""!==e.modalWrapper&&(n.config.classes.modalWrapper=e.modalWrapper),n.init(),n}return c()(t,e),d()(t,null,[{key:"__submitPopup",value:function(){"function"==typeof jQuery.magnificPopup.instance.st.successConfirm&&jQuery.magnificPopup.instance.st.successConfirm({el:jQuery.magnificPopup.instance.st.el})}}]),t}(f);window.addDynamicEventListener(document,"click",".give-popup-close-button",f.__closePopup,{}),window.addDynamicEventListener(document,"click",".give-popup-confirm-button",y.__confirmPopup,{}),window.addDynamicEventListener(document,"click",".give-popup-form-button",b.__submitPopup,{})},8:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}e.exports=function(e,t,i){return t&&n(e.prototype,t),i&&n(e,i),e}}});