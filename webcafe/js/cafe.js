function cal(){
	window.location.href="checkout.html"
}

function clearcontent(){
    
	document.getElementById("order").options.length = 0;
    document.getElementById("total").innerHTML="";
}

var total=0;
$(document).ready(function(e){
	
	var itemSelect = document.getElementById("order")
	document.getElementById("images/espresso_info.jpg").onclick=function(){
	var options = document.createElement("option")
		options.appendChild(document.createTextNode("$1.95-Espresso"))
		itemSelect.appendChild(options)	
		total=total+1.95
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
		
	}
	document.getElementById("images/latte_info.jpg").onclick=function(){
		var options = document.createElement("option")
		options.appendChild(document.createTextNode("$2.95-Latte"))
		itemSelect.appendChild(options)	
		total=total+2.95
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
	}
	
	document.getElementById("images/cappuccino_info.jpg").onclick=function(){
		var options = document.createElement("option")
		options.appendChild(document.createTextNode("$3.45-Cappuccino"))
		itemSelect.appendChild(options)	
		total=total+3.45
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
	}	
	
	document.getElementById("images/coffee_info.jpg").onclick=function(){
		var options = document.createElement("option")
		options.appendChild(document.createTextNode("$1.75-Drip coffee"))
		itemSelect.appendChild(options)	
		total=total+1.75
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
	}
	
	document.getElementById("images/biscotti_info.jpg").onclick=function(){
		var options = document.createElement("option")
		options.appendChild(document.createTextNode("$1.95-Biscotti"))
		itemSelect.appendChild(options)	
		total=total+1.95
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
	}
	
	document.getElementById("images/scone_info.jpg").onclick=function(){
		var options = document.createElement("option")
		options.appendChild(document.createTextNode("$2.95-Scone"))
		itemSelect.appendChild(options)	
		total=total+2.95
		document.getElementById("total").innerHTML="Total:$"+total.toFixed(2)
	}
});
