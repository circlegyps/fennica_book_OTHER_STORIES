$(function(){"use strict";var t={body:$("html,body"),window:$(window),fade:$(".fade"),fCont:$("#food-cont"),sCont:$("#shltr-cont"),cCont:$("#clth-cont"),toTop:$(".to-top")},e=t.window.width(),n=t.window.height(),i={show:.8*n,hide:.2*n},a=0,r={scrlOff:function(){t.window.on("mousewheel touchmove",function(t){t.preventDefault()})},scrlOn:function(){t.window.off("mousewheel touchmove")}},s=function(){var r=.024,s={resize:!1,scroll:!1},o=function(){s.resize=!0},d=function(){s.scroll=!0},l=function(){s.resize&&(s.resize=!1,e=t.window.width(),n=t.window.height(),i={show:.8*n,hide:.05*n}),s.scroll&&(s.scroll=!1,a=t.window.scrollTop(),c())},c=function(){t.fade.each(function(){var t=$(this).offset().top;a+i.show>=t&&$(this).removeClass("is-btm")}),a>100?t.toTop.addClass("is-in"):t.toTop.removeClass("is-in")};setInterval(l,r),t.window.on("resize",o),t.window.on("scroll",d)},o=function(){function t(){var t=e.imgLoaded/n*100;e.current+=.1*(t-e.current),e.progBar.css({width:e.current+"%"}),e.current>=100&&(clearInterval(e.time),e.load.fadeOut(600,function(){c()})),e.current>99.9&&(e.current=100)}r.scrlOff();var e={load:$("#loading"),progBar:$(".progress-bar"),imgLoad:imagesLoaded("body"),imgLoaded:0,current:0,time:setInterval(t,1e3/60)},n=e.imgLoad.images.length;e.imgLoad.on("progress",function(){e.imgLoaded++})},d=function(){var t,e,n,i=$("#slider"),i={tit:i.find(".cat-tit"),place01:i.find(".place01"),place02:i.find(".place02"),wrap:i.find(".slide-wrap"),slide:i.find(".slide"),img:i.find(".slide-img"),indiBtn:i.find(".indi-btn"),prev:i.find(".prev"),next:i.find(".next"),interval:6e3,duration:1e3},a=0,r=i.slide.length-1,s=0,o=0,d=0,l=["FOOD","FOOD","SHELTER","SHELTER","CLOTHING","CLOTHING"],c=["house in","at JAPAN","house in","at JAPAN","house in","at JAPAN"],u=["LONDON","山田真萬さんの陶器市へ","LONDON","松本民芸家具の秘密","LONDON","久留米絣を買い付け"],f={prevAct:function(){return t=i.slide.eq(a).attr("data-tit"),e=i.slide.eq(a).attr("data-place-one"),n=i.slide.eq(a).attr("data-place-two"),0===a?(i.indiBtn.removeClass("is-current"),i.indiBtn.last().addClass("is-current"),a=r,p(a),void v(a)):(i.indiBtn.removeClass("is-current"),i.indiBtn.eq(a-1).addClass("is-current"),a--,p(a),void v(a))},nextAct:function(){return t=i.slide.eq(a).attr("data-tit"),e=i.slide.eq(a).attr("data-place-one"),n=i.slide.eq(a).attr("data-place-two"),a>r-1?(i.indiBtn.removeClass("is-current"),i.indiBtn.first().addClass("is-current"),a=0,p(a),void v(a)):(i.indiBtn.removeClass("is-current"),i.indiBtn.eq(a+1).addClass("is-current"),a++,p(a),void v(a))}},v=function(a){t!==l[a]&&(4===a||5===a?s=2:2===a||3===a?s=1:0!==a&&1!==a||(s=0),i.tit.removeClass("is-in"),i.tit.eq(s).addClass("is-in")),e!==c[a]&&(i.place01.removeClass("is-in"),i.place01.eq(a%2).addClass("is-in")),n!==u[a]&&(0===a||2===a||4===a?o=0:1===a?o=1:3===a?o=2:5===a&&(o=3),i.place02.removeClass("is-in"),i.place02.eq(o).addClass("is-in"))},p=function(t){d!==t&&(i.img.fadeOut(i.duration),i.img.eq(t).fadeIn(i.duration),clearInterval(w),w=setInterval(f.nextAct,i.interval),d=t)},w=setInterval(f.nextAct,i.interval);i.prev.click(function(){f.prevAct()}),i.next.click(function(){f.nextAct()}),i.indiBtn.click(function(r){r.preventDefault?r.preventDefault():r.returnValue=!1;var s=i.indiBtn.index(this);t=i.slide.eq(a).attr("data-tit"),e=i.slide.eq(a).attr("data-place-one"),n=i.slide.eq(a).attr("data-place-two"),i.indiBtn.removeClass("is-current"),$(this).addClass("is-current"),a=s,p(a),v(a)});var h=function(){i.img.eq(0).fadeIn(i.duration),i.indiBtn.eq(0).addClass("is-current"),i.tit.eq(0).addClass("is-in"),i.place01.eq(0).addClass("is-in"),i.place02.eq(0).addClass("is-in")};h()},l=function(){var e=1600,n="easeInOutExpo";$(".anchor[href^=#]").click(function(t){t.preventDefault?t.preventDefault():t.returnValue=!1,r.scrlOff();var t=$(this);i(t)});var i=function(i){var a=i.attr("href"),s=$("#"===a||""===a?"html":a),o=s.offset().top;t.body.animate({scrollTop:o-20},{duration:e,easing:n,complete:function(){r.scrlOn()}})}},c=function(){r.scrlOn(),s(),d(),l();skrollr.init();return c};o()});