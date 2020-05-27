
function myFunctions() {
	// alert(document.getElementById("exam").innerHTML);//디버그
	if (document.getElementById("exam").innerHTML == "변경후")
		document.getElementById("exam").innerHTML = "변경 전"
}
function myFunction() {
	//alert(document.getElementById)("exam").innerHtml);
	if(document.getElementById("exam").innerHTML == "변경후")
	   document.getElementById("exam").innerHTML = "변경전"
//>>>>>>> refs/remotes/origin/master
	else
		document.getElementById("exam").innerHTML = "변경후"
}