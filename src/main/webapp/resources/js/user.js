function myFunction() {
	//alert(document.getElementById)("exam").innerhtml);
	if(document.getElementById("exam").innerHTML == "변경후")
	   document.getElementById("exam").innerHTML = "변경전"
	else
		document.getElementById("exam").innerHTML = "변경후"
}