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

/* ===========================================================
 * jquery-subscribe-better.js v1
 * ===========================================================
 * Copyright 2014 Pete Rojwongsuriya.
 * http://www.thepetedesign.com
 *
 * Create a better, highly customizable subscription modal or
 * newsletter signup window with jQuery Subscribe Better
 *
 * https://github.com/peachananr/subscribe-better
 *
 * ========================================================== */

!function($){

  var defaults = {
    trigger: "atendpage", // atendpage | onload | onidle
    animation: "fade", // fade | flyInRight | flyInLeft | flyInUp | flyInDown
    delay: 0,
    showOnce: true,
    autoClose: false,
    scrollableModal: false
  };

  $.fn.subscribeBetter = function(options){
    var settings = $.extend({}, defaults, options),
        el = $(this),
        shown = false,
        animating = false;

    el.addClass("sb");

    $.fn.openWindow = function() {
      var el = $(this);
      if(el.is(":hidden") && shown == false && animating == false) {
        animating = true;

        setTimeout(function() {
          if (settings.scrollableModal == true) {
            if($(".sb-overlay").length < 1) {
              $("body").append("<div class='sb-overlay'><div class='sb-close-backdrop'></div><div class='sb sb-withoverlay'>" + $(".sb").html() + "</div></div>");
              $(".sb-close-backdrop, .sb-close-btn").one("click", function() {
                $(".sb.sb-withoverlay").closeWindow();
                return false;
              });
              $(".sb.sb-withoverlay").removeClass("sb-animation-" + settings.animation.replace('In', 'Out')).addClass("sb-animation-" + settings.animation);
              setTimeout(function(){
                $(".sb.sb-withoverlay").show();
                $("body").addClass("sb-open sb-open-with-overlay");
              }, 300);
            }
          } else {
            if ($(".sb-overlay").length < 1) {
              $("body").append("<div class='sb-overlay'><div class='sb-close-backdrop'></div></div>");
              $(".sb").removeClass("sb-animation-" + settings.animation.replace('In', 'Out')).addClass("sb-animation-" + settings.animation);
              $(".sb-close-backdrop, .sb-close-btn").one("click", function() {
                $(".sb").closeWindow();
                return false;
              });
              setTimeout(function(){
                $(".sb").show();
                $("body").addClass("sb-open");
              }, 300);
            }

          }
          if (settings.showOnce == true) shown = true;
          animating = false;
        }, settings.delay);
      }
    }

    $.fn.closeWindow = function() {
      var el = $(this);
      if(el.is(":visible") && animating == false) {
        animating = true;
        if (settings.scrollableModal == true) {

          $(".sb.sb-withoverlay").removeClass("sb-animation-" + settings.animation).addClass("sb-animation-" + settings.animation.replace('In', 'Out'));

          setTimeout(function(){
            $(".sb.sb-withoverlay").hide();
            $("body").removeClass("sb-open sb-open-with-overlay");
            setTimeout(function() {
              $(".sb-overlay").remove();
            }, 300);
          }, 300);

        } else {

          $(".sb").removeClass("sb-animation-" + settings.animation).addClass("sb-animation-" + settings.animation.replace('In', 'Out'));
          setTimeout(function(){
            $(".sb").hide();
            $("body").removeClass("sb-open");
            setTimeout(function() {
              $(".sb-overlay").remove();
            }, 300);
          }, 300);
        }
        animating = false;
      }
    }

    $.fn.scrollDetection = function (trigger, onDone) {
      var t, l = (new Date()).getTime();

      $(window).scroll(function(){
          var now = (new Date()).getTime();

          if(now - l > 400){
              $(this).trigger('scrollStart');
              l = now;
          }

          clearTimeout(t);
          t = setTimeout(function(){
              $(window).trigger('scrollEnd');
          }, 300);
      });
      if (trigger == "scrollStart") {
        $(window).bind('scrollStart', function(){
          $(window).unbind('scrollEnd');
          onDone();
        });
      }

      if (trigger == "scrollEnd") {
        $(window).bind('scrollEnd', function(){
          $(window).unbind('scrollStart');
          onDone();
        });
      }
    }

    switch(settings.trigger) {
      case "atendpage":
        $(window).scroll(function(){
          var yPos = $(window).scrollTop();
          if (yPos >= ($(document).height() - $(window).height()) ) {
            el.openWindow();
          } else {
            if (yPos + 300 < ($(document).height() - $(window).height()) ) {
              if(settings.autoClose == true) {
                el.closeWindow();
              }
            }
          }

        });
        break;
      case "onload":

        $(window).load(function(){
          el.openWindow();
          if(settings.autoClose == true) {
            el.scrollDetection("scrollStart", function() {
              el.closeWindow();
            });

          }
        });

        break;
      case "onidle":

        $(window).load(function(){
          el.scrollDetection("scrollEnd", function() {
            el.openWindow();
          });

          if(settings.autoClose == true) {
              el.scrollDetection("scrollStart", function() {
                el.closeWindow();
              });
          }
        });

        break;
    }


  }

}(window.jQuery);

