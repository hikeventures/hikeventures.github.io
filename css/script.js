




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


/* GoSquared */


$( document ).ready(function() {
  $('#subscribe_widget_hikeventures').submit(function(event){
    var user_email = $('#email_input').val()
    _gs('identify', {
      email: user_email
    });
  });
});
