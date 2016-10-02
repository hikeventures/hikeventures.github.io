var existingTitle = 'Sale Price';
var newTitle = 'Price';

var tableHeaderElements = document.getElementsByTagName('th');
for (var i = 0; i < tableHeaderElements.length; i++) {
    if (tableHeaderElements[i].innerHTML.indexOf(searchString) !== -1) {
        tableHeaderElements[i].innerHTML=tableHeaderElements[i].innerHTML.replace(existingTitle,newTitle);          break;
        
    }
}


// HTML Display Portion  //
///////////////////////////

	function avShowSearchResults() 
	{ 
	// set parameters 
	// set in the parent document 
	var strUrl = 'http://classic.avantlink.com/api.php?module=ProductSearch' 
	+ '&affiliate_id=125311' 
	+ '&website_id=150351' 
	+ '&merchant_ids=10060' 
	+ '&output=html' 
	+ '&search_results_options=noheader'
	+ '&search_results_count=6' 
	+ '&search_results_layout=list' 
	+ '&search_results_fields=Thumbnail+Image|Product+Name|Merchant+Name|Retail+Price' 
	+ '&search_term=jacket';

	// Refresh the currently displayed results 
	avMakeHttpRequest(strUrl);

	return; 
	}

	function avGetElementById(id){ 
	    if (document.getElementById) { 
		return (document.getElementById(id));xo 
	    } else if (document.all) { 
		return (document.all[id]); 
	    } else { 
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

// JSON Return portion //
////////////////////////

	function jsonAlexander() {
	var strUrl = 'http://classic.avantlink.com/api.php?module=ProductSearch' 
	+ '&affiliate_id=125311' 
	+ '&website_id=150351' 
	+ '&merchant_ids=10060' 
	+ '&output=json'  // request json data type
	+ '&search_results_count=6' 
	+ '&search_results_options=noheader'
	+ '&search_results_layout=list' 
	+ '&search_results_fields=Thumbnail+Image|Product+Name|Merchant+Name|Retail+Price' 
	+ '&search_term=jacket';

	// Need to call, but not update on - page, using custom
	returnJsonData(strUrl);

	return; 
	}

	// Make request but don't update the inner HTML
	function returnJsonData(strUrl) 
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
			var parseOnAblyResponse = JSON.parse(xmlHttp.responseText); //returns JSON as actual object
			productArray.push(parseOnAblyResponse); // builds array
			
		//	var out = productArray[0][1].strProductName;
			
		//	var arr = JSON.parse(response);
    			var i;
			var out = "<table>";

    			for(i = 0; i < 5; i++) {
        			out += "<tr><td>" +
        			productArray[0][i].strProductName +
        			"</td><td>" +
        			productArray[0][i].dblProductPrice +
        			"</td><td>" +
			        //productArray[0][i].strThumbnailImage +
			        //"</td><td>" +
			        productArray[0][i].strMerchantName +
            			"</td></tr>";
    			}
    			out += "</table>";
			
			
 			document.getElementById("test").innerHTML = out;
			
			
		        return; 
		    } 
		} 
		xmlHttp.send(null) 
	    } 

	    return; 
	} 

// Main Loop //
///////////////

// Housekeeping - defining vars to ensure not undefined
var productArray = new Array();
var parseOnAblyResponse;

//This actually returns and displays the HTML portion
$(avShowSearchResults).html(JSON.stringify(avShowSearchResults));
//$(jsonAlexander).html(JSON.stringify(jsonAlexander));
//Call the JSON function, which will build the array
jsonAlexander();


//Popup 4 Alerts as example
alert("productArray[0][0].strProductName = "+productArray[0][0].strProductName);
//alert("productArray[0][0].dblProductPrice = "+productArray[0][0].dblProductPrice);
//alert("productArray[0][1].strProductName = "+productArray[0][0].strProductName);
//alert("productArray[0][1].dblProductPrice = "+productArray[0][0].dblProductPrice);

