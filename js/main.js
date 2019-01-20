onLoad = function() {
	document.getElementById("about-me").innerHTML = "This is pure javascript!";
	// document.getElementById("about-me").src = "resources/aboutme.html"

	// $("#about-me").text("This was set with jQuery!");
	// $("#about-me").load( "resources/aboutme.html" );

	// var xhr = typeof XMLHttpRequest != 'undefined' 
	// 		? new XMLHttpRequest() 
	// 		: new ActiveXObject('Microsoft.XMLHTTP');
	// xhr.open('get', 'resources/aboutme.html', true);
	// xhr.onreadystatechange = function() {
	//     if (xhr.readyState == 4 && xhr.status == 200) { 
	//         document.getElementById("about-me").innerHTML = xhr.responseText;
	//     } 
	// }
	// xhr.send();
}
