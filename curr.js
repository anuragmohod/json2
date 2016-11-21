// JavaScript Document

	      function convertCurrency() {
			  'use strict';
			  var from = document.getElementById("from").value;
			  var to = document.getElementById("to").value;
			  
			  var ajaxRequest = new XMLHttpRequest();
			  var url = "http://api.fixer.io/latest?symbols="+from+","+to;
			  ajaxRequest.open("GET", url, true);
			  ajaxRequest.send();
			  
			  ajaxRequest.onreadystatechange = function () {
				  if (ajaxRequest.readyState === 4 && ajaxRequest.status === 200){
					  
					  var result = ajaxRequest.responseText;
					  var jsonData = JSON.parse(result);

					  var oneUnit = jsonData.rates[to]/jsonData.rates[from];
					  var amt = document.getElementById('fromAmount').value;
					  document.getElementById('toAmount').value = (oneUnit*amt).toFixed(2);
				  }
			  };
			  
		  };
	