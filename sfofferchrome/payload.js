// send the page title as a chrome message

var s = document.createElement("script");
s.src="https://code.jquery.com/jquery-3.4.1.js";
s.onload = function(e){ /* now that its loaded, do something */ }; 
document.head.appendChild(s); 
$(document).ready(function(){

//SF Account:
var account = $("table.detailList th:contains('Account')").siblings("td").first().text()
var message = {"account":account};



//Offer Name:
//var offerName = $(“table.detailList th:contains('Offer Name')").siblings("td").first().text()


//Network Link ID:
//var linkID = $("table.detailList th:contains('Network Link ID')").siblings("td").first().text()



//Online Code:
//var onlineCode = $("table.detailList th:contains('Online Code')").siblings("td").first().text()



//Exclusions:
//var exclusions = $("table.detailList th:contains('Terms & Conditions')").siblings("td").first().text()



//Start Date:
//var startDate = $("table.detailList th:contains('Start Date')").text()



//End Date:
//var endDate = $("table.detailList th:contains('End Date')").next().text()


chrome.runtime.sendMessage(document.title);
});