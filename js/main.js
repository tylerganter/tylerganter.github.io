onLoad = function() {
	// document.getElementById("about-me").innerHTML = "This is pure javascript!";
	// $("#about-me").text("This was set with jQuery!");
	// $("#about-me").html("<h1>This is jQuery that overwrote the HTML</h1>");

	setIntroHeight();

	swipeSquiggles();
}


// TODO find the proper way to make webpages consistent 
// 		across browsers and devices
function tempFix() {
	var windowWidth = window.innerWidth
					   || document.documentElement.clientWidth
					   || document.body.clientWidth;

	$("body").width(windowWidth);
}


// set the height to align with the size of the browser window
function setIntroHeight() {
	var windowHeight = window.innerHeight 
					   || document.documentElement.clientHeight
					   || document.body.clientHeight;

	$("#intro").height(windowHeight - $("header").height());
}


// Animate on load to have squiggles swipe in
function swipeSquiggles() {
	var widthPercent = 100;
  	
  	var id = setInterval(frame, 15);
	
	function frame() {
		if (widthPercent < 0) {
	  		clearInterval(id);
		} else {
			$("#animation").css("background-size", widthPercent-- + "% 100%");
			$("#intro-content-wrapper").css("opacity", 1.0 - (widthPercent / 100) ** 0.5);
		}
	}
}
