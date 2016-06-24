$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');


var merchant_ids = '10072|12725|13970|10260|11105|10060|12989|13051|11741|10461|11929|10865|10008|10913|11243|12291|10971|13637|10785|11491|10270|13757|12493|11545|10537|11113|12135|13410|10485|13582|12025|10509|11877|11957|12857|11725|12681|11857|10086|11419|10068|13562|13273|10083|10242|10263|10248|10049|10869|12389|10921|11723|10279|10345|13606|12357|10593|10280|10937|13646|10337|13023|10943|10881|12515|10573|10505|11217';

function avShowSearchResults1()
   {

   	strUrl = 'http://classic.avantlink.com/api.php?module=ProductSearch'
        + '&affiliate_id=125311'
        + '&website_id=150351'
        + '&merchant_ids=10072|12725|13970|10260|11105|10060|12989|13051|11741|10461|11929|10865|10008|10913|11243|12291|10971|13637|10785|11491|10270|13757|12493|11545|10537|11113|12135|13410|10485|13582|12025|10509|11877|11957|12857|11725|12681|11857|10086|11419|10068|13562|13273|10083|10242|10263|10248|10049|10869|12389|10921|11723|10279|10345|13606|12357|10593|10280|10937|13646|10337|13023|10943|10881|12515|10573|10505|11217'
        + '&output=html'
        + '&search_results_options=noheader'
        + '&search_results_count=8'
        + '&search_results_layout=list'
        + '&search_results_fields=Thumbnail+Image|Product+Name|Merchant+Name|Sale+Price'
        + '&search_results_sort_order=Sale+Price|asc'
	+ '&search_term=' + window.location.hash.substring(1);

avMakeHttpRequest(strUrl);




  return;
    }


/* Comparison */
function avShowSearchResults()
{
   if(avGetElementById('strSearchTerm').value == "")
   {
   	return;
   }
   else
   {
    	var strUrl = 'http://classic.avantlink.com/api.php?module=ProductSearch'
        + '&affiliate_id=125311'
        + '&website_id=150351'
        + '&merchant_ids=10072|12725|13970|10260|11105|10060|12989|13051|11741|10461|11929|10865|10008|10913|11243|12291|10971|13637|10785|11491|10270|13757|12493|11545|10537|11113|12135|13410|10485|13582|12025|10509|11877|11957|12857|11725|12681|11857|10086|11419|10068|13562|13273|10083|10242|10263|10248|10049|10869|12389|10921|11723|10279|10345|13606|12357|10593|10280|10937|13646|10337|13023|10943|10881|12515|10573|10505|11217'
        + '&output=html'
        + '&search_results_options=noheader'
        + '&search_results_count=8'
        + '&search_results_layout=list'
        + '&search_results_fields=Thumbnail+Image|Product+Name|Merchant+Name|Sale+Price'
        + '&search_results_sort_order=Sale+Price|asc'
	+ '&search_term=' + avGetElementById('strSearchTerm').value;
   }



    // Refresh the currently displayed results
    avMakeHttpRequest(strUrl);

    return;
}

function avGetElementById(id)
{
    if (document.getElementById)
    {
        return (document.getElementById(id));
    }
    else if (document.all)
    {
        return (document.all[id]);
    }
    else
    {
        if ((navigator.appname.indexOf("Netscape") != -1) && parseInt(navigator.appversion == 4)) {
            return (document.layers[id]);
        }
    }
}



function avMakeHttpRequest(strUrl)
{
    var xmlHttp = false;
    try {
        xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
    }
    catch (e) {
        try {
            xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        catch (E) {
            xmlHttp = false;
        }
    }

    if (!(xmlHttp)) {
        try {
            xmlHttp = new XMLHttpRequest();
        }
        catch (e) {
            xmlHttp = false;
        }
    }

    if (xmlHttp) {

        xmlHttp.open("GET", strUrl, true);
        xmlHttp.onreadystatechange=function() {
            if (xmlHttp.readyState==4) {

                avGetElementById('av_search_results').innerHTML = xmlHttp.responseText;

                return;
            }
        }
        xmlHttp.send(null)
    }

    return;
}



/* Bootstrap File */

/*!
 * Bootstrap v3.3.5 (http://getbootstrap.com)
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */

/*!
 * Generated using the Bootstrap Customizer (http://getbootstrap.com/customize/?id=99aca5e46f558a3ca38ca5682934dc71)
 * Config saved to config.json and https://gist.github.com/99aca5e46f558a3ca38ca5682934dc71
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),s=n.data("bs.button"),o="object"==typeof e&&e;s||n.data("bs.button",s=new i(this,o)),"toggle"==e?s.toggle():e&&s.setState(e)})}var i=function(e,n){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,n),this.isLoading=!1};i.VERSION="3.3.6",i.DEFAULTS={loadingText:"loading..."},i.prototype.setState=function(e){var i="disabled",n=this.$element,s=n.is("input")?"val":"html",o=n.data();e+="Text",null==o.resetText&&n.data("resetText",n[s]()),setTimeout(t.proxy(function(){n[s](null==o[e]?this.options[e]:o[e]),"loadingText"==e?(this.isLoading=!0,n.addClass(i).attr(i,i)):this.isLoading&&(this.isLoading=!1,n.removeClass(i).removeAttr(i))},this),0)},i.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var n=t.fn.button;t.fn.button=e,t.fn.button.Constructor=i,t.fn.button.noConflict=function(){return t.fn.button=n,this},t(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(i){var n=t(i.target);n.hasClass("btn")||(n=n.closest(".btn")),e.call(n,"toggle"),t(i.target).is('input[type="radio"]')||t(i.target).is('input[type="checkbox"]')||i.preventDefault()}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(e){t(e.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(e.type))})}(jQuery),+function(t){"use strict";function e(e){var i=e.attr("data-target");i||(i=e.attr("href"),i=i&&/#[A-Za-z]/.test(i)&&i.replace(/.*(?=#[^\s]*$)/,""));var n=i&&t(i);return n&&n.length?n:e.parent()}function i(i){i&&3===i.which||(t(s).remove(),t(o).each(function(){var n=t(this),s=e(n),o={relatedTarget:this};s.hasClass("open")&&(i&&"click"==i.type&&/input|textarea/i.test(i.target.tagName)&&t.contains(s[0],i.target)||(s.trigger(i=t.Event("hide.bs.dropdown",o)),i.isDefaultPrevented()||(n.attr("aria-expanded","false"),s.removeClass("open").trigger(t.Event("hidden.bs.dropdown",o)))))}))}function n(e){return this.each(function(){var i=t(this),n=i.data("bs.dropdown");n||i.data("bs.dropdown",n=new a(this)),"string"==typeof e&&n[e].call(i)})}var s=".dropdown-backdrop",o='[data-toggle="dropdown"]',a=function(e){t(e).on("click.bs.dropdown",this.toggle)};a.VERSION="3.3.6",a.prototype.toggle=function(n){var s=t(this);if(!s.is(".disabled, :disabled")){var o=e(s),a=o.hasClass("open");if(i(),!a){"ontouchstart"in document.documentElement&&!o.closest(".navbar-nav").length&&t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click",i);var r={relatedTarget:this};if(o.trigger(n=t.Event("show.bs.dropdown",r)),n.isDefaultPrevented())return;s.trigger("focus").attr("aria-expanded","true"),o.toggleClass("open").trigger(t.Event("shown.bs.dropdown",r))}return!1}},a.prototype.keydown=function(i){if(/(38|40|27|32)/.test(i.which)&&!/input|textarea/i.test(i.target.tagName)){var n=t(this);if(i.preventDefault(),i.stopPropagation(),!n.is(".disabled, :disabled")){var s=e(n),a=s.hasClass("open");if(!a&&27!=i.which||a&&27==i.which)return 27==i.which&&s.find(o).trigger("focus"),n.trigger("click");var r=" li:not(.disabled):visible a",l=s.find(".dropdown-menu"+r);if(l.length){var d=l.index(i.target);38==i.which&&d>0&&d--,40==i.which&&d<l.length-1&&d++,~d||(d=0),l.eq(d).trigger("focus")}}}};var r=t.fn.dropdown;t.fn.dropdown=n,t.fn.dropdown.Constructor=a,t.fn.dropdown.noConflict=function(){return t.fn.dropdown=r,this},t(document).on("click.bs.dropdown.data-api",i).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",o,a.prototype.toggle).on("keydown.bs.dropdown.data-api",o,a.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",a.prototype.keydown)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),s=n.data("bs.tab");s||n.data("bs.tab",s=new i(this)),"string"==typeof e&&s[e]()})}var i=function(e){this.element=t(e)};i.VERSION="3.3.6",i.TRANSITION_DURATION=150,i.prototype.show=function(){var e=this.element,i=e.closest("ul:not(.dropdown-menu)"),n=e.data("target");if(n||(n=e.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!e.parent("li").hasClass("active")){var s=i.find(".active:last a"),o=t.Event("hide.bs.tab",{relatedTarget:e[0]}),a=t.Event("show.bs.tab",{relatedTarget:s[0]});if(s.trigger(o),e.trigger(a),!a.isDefaultPrevented()&&!o.isDefaultPrevented()){var r=t(n);this.activate(e.closest("li"),i),this.activate(r,r.parent(),function(){s.trigger({type:"hidden.bs.tab",relatedTarget:e[0]}),e.trigger({type:"shown.bs.tab",relatedTarget:s[0]})})}}},i.prototype.activate=function(e,n,s){function o(){a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),r?(e[0].offsetWidth,e.addClass("in")):e.removeClass("fade"),e.parent(".dropdown-menu").length&&e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),s&&s()}var a=n.find("> .active"),r=s&&t.support.transition&&(a.length&&a.hasClass("fade")||!!n.find("> .fade").length);a.length&&r?a.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),a.removeClass("in")};var n=t.fn.tab;t.fn.tab=e,t.fn.tab.Constructor=i,t.fn.tab.noConflict=function(){return t.fn.tab=n,this};var s=function(i){i.preventDefault(),e.call(t(this),"show")};t(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',s).on("click.bs.tab.data-api",'[data-toggle="pill"]',s)}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var n=t(this),s=n.data("bs.affix"),o="object"==typeof e&&e;s||n.data("bs.affix",s=new i(this,o)),"string"==typeof e&&s[e]()})}var i=function(e,n){this.options=t.extend({},i.DEFAULTS,n),this.$target=t(this.options.target).on("scroll.bs.affix.data-api",t.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",t.proxy(this.checkPositionWithEventLoop,this)),this.$element=t(e),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};i.VERSION="3.3.6",i.RESET="affix affix-top affix-bottom",i.DEFAULTS={offset:0,target:window},i.prototype.getState=function(t,e,i,n){var s=this.$target.scrollTop(),o=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return i>s?"top":!1;if("bottom"==this.affixed)return null!=i?s+this.unpin<=o.top?!1:"bottom":t-n>=s+a?!1:"bottom";var r=null==this.affixed,l=r?s:o.top,d=r?a:e;return null!=i&&i>=s?"top":null!=n&&l+d>=t-n?"bottom":!1},i.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(i.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},i.prototype.checkPositionWithEventLoop=function(){setTimeout(t.proxy(this.checkPosition,this),1)},i.prototype.checkPosition=function(){if(this.$element.is(":visible")){var e=this.$element.height(),n=this.options.offset,s=n.top,o=n.bottom,a=Math.max(t(document).height(),t(document.body).height());"object"!=typeof n&&(o=s=n),"function"==typeof s&&(s=n.top(this.$element)),"function"==typeof o&&(o=n.bottom(this.$element));var r=this.getState(a,e,s,o);if(this.affixed!=r){null!=this.unpin&&this.$element.css("top","");var l="affix"+(r?"-"+r:""),d=t.Event(l+".bs.affix");if(this.$element.trigger(d),d.isDefaultPrevented())return;this.affixed=r,this.unpin="bottom"==r?this.getPinnedOffset():null,this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix","affixed")+".bs.affix")}"bottom"==r&&this.$element.offset({top:a-e-o})}};var n=t.fn.affix;t.fn.affix=e,t.fn.affix.Constructor=i,t.fn.affix.noConflict=function(){return t.fn.affix=n,this},t(window).on("load",function(){t('[data-spy="affix"]').each(function(){var i=t(this),n=i.data();n.offset=n.offset||{},null!=n.offsetBottom&&(n.offset.bottom=n.offsetBottom),null!=n.offsetTop&&(n.offset.top=n.offsetTop),e.call(i,n)})})}(jQuery),+function(t){"use strict";function e(e){var i,n=e.attr("data-target")||(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]+$)/,"");return t(n)}function i(e){return this.each(function(){var i=t(this),s=i.data("bs.collapse"),o=t.extend({},n.DEFAULTS,i.data(),"object"==typeof e&&e);!s&&o.toggle&&/show|hide/.test(e)&&(o.toggle=!1),s||i.data("bs.collapse",s=new n(this,o)),"string"==typeof e&&s[e]()})}var n=function(e,i){this.$element=t(e),this.options=t.extend({},n.DEFAULTS,i),this.$trigger=t('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};n.VERSION="3.3.6",n.TRANSITION_DURATION=350,n.DEFAULTS={toggle:!0},n.prototype.dimension=function(){var t=this.$element.hasClass("width");return t?"width":"height"},n.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var e,s=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(s&&s.length&&(e=s.data("bs.collapse"),e&&e.transitioning))){var o=t.Event("show.bs.collapse");if(this.$element.trigger(o),!o.isDefaultPrevented()){s&&s.length&&(i.call(s,"hide"),e||s.data("bs.collapse",null));var a=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var r=function(){this.$element.removeClass("collapsing").addClass("collapse in")[a](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!t.support.transition)return r.call(this);var l=t.camelCase(["scroll",a].join("-"));this.$element.one("bsTransitionEnd",t.proxy(r,this)).emulateTransitionEnd(n.TRANSITION_DURATION)[a](this.$element[0][l])}}}},n.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var e=t.Event("hide.bs.collapse");if(this.$element.trigger(e),!e.isDefaultPrevented()){var i=this.dimension();this.$element[i](this.$element[i]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var s=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};return t.support.transition?void this.$element[i](0).one("bsTransitionEnd",t.proxy(s,this)).emulateTransitionEnd(n.TRANSITION_DURATION):s.call(this)}}},n.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},n.prototype.getParent=function(){return t(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(t.proxy(function(i,n){var s=t(n);this.addAriaAndCollapsedClass(e(s),s)},this)).end()},n.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var s=t.fn.collapse;t.fn.collapse=i,t.fn.collapse.Constructor=n,t.fn.collapse.noConflict=function(){return t.fn.collapse=s,this},t(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(n){var s=t(this);s.attr("data-target")||n.preventDefault();var o=e(s),a=o.data("bs.collapse"),r=a?"toggle":s.data();i.call(o,r)})}(jQuery),+function(t){"use strict";function e(i,n){this.$body=t(document.body),this.$scrollElement=t(t(i).is(document.body)?window:i),this.options=t.extend({},e.DEFAULTS,n),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",t.proxy(this.process,this)),this.refresh(),this.process()}function i(i){return this.each(function(){var n=t(this),s=n.data("bs.scrollspy"),o="object"==typeof i&&i;s||n.data("bs.scrollspy",s=new e(this,o)),"string"==typeof i&&s[i]()})}e.VERSION="3.3.6",e.DEFAULTS={offset:10},e.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},e.prototype.refresh=function(){var e=this,i="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),t.isWindow(this.$scrollElement[0])||(i="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var e=t(this),s=e.data("target")||e.attr("href"),o=/^#./.test(s)&&t(s);return o&&o.length&&o.is(":visible")&&[[o[i]().top+n,s]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){e.offsets.push(this[0]),e.targets.push(this[1])})},e.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),n=this.options.offset+i-this.$scrollElement.height(),s=this.offsets,o=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),e>=n)return a!=(t=o[o.length-1])&&this.activate(t);if(a&&e<s[0])return this.activeTarget=null,this.clear();for(t=s.length;t--;)a!=o[t]&&e>=s[t]&&(void 0===s[t+1]||e<s[t+1])&&this.activate(o[t])},e.prototype.activate=function(e){this.activeTarget=e,this.clear();var i=this.selector+'[data-target="'+e+'"],'+this.selector+'[href="'+e+'"]',n=t(i).parents("li").addClass("active");n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate.bs.scrollspy")},e.prototype.clear=function(){t(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var n=t.fn.scrollspy;t.fn.scrollspy=i,t.fn.scrollspy.Constructor=e,t.fn.scrollspy.noConflict=function(){return t.fn.scrollspy=n,this},t(window).on("load.bs.scrollspy.data-api",function(){t('[data-spy="scroll"]').each(function(){var e=t(this);i.call(e,e.data())})})}(jQuery),+function(t){"use strict";function e(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(void 0!==t.style[i])return{end:e[i]};return!1}t.fn.emulateTransitionEnd=function(e){var i=!1,n=this;t(this).one("bsTransitionEnd",function(){i=!0});var s=function(){i||t(n).trigger(t.support.transition.end)};return setTimeout(s,e),this},t(function(){t.support.transition=e(),t.support.transition&&(t.event.special.bsTransitionEnd={bindType:t.support.transition.end,delegateType:t.support.transition.end,handle:function(e){return t(e.target).is(this)?e.handleObj.handler.apply(this,arguments):void 0}})})}(jQuery);
