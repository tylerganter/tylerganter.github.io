function onLoad() {
	setIntroHeight();
	swipeSquiggles();
	// Additional init code here if needed
  }
  
  // Dynamically sets the intro section to fill the viewport minus navbar height
  function setIntroHeight() {
	const windowHeight = window.innerHeight 
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
	const headerHeight = document.querySelector("header").offsetHeight;
	document.querySelector("#intro").style.height = (windowHeight - headerHeight) + "px";
  }
  
  // Animate the harmonic pitch image to swipe in from 100% to 0% width
  function swipeSquiggles() {
	let widthPercent = 100;
	const id = setInterval(frame, 15);
  
	function frame() {
	  if (widthPercent < 0) {
		clearInterval(id);
	  } else {
		$("#animation").css("background-size", widthPercent-- + "% 100%");
		// fade in text from 0 to 1 as background goes
		const fadeValue = 1.0 - Math.sqrt(widthPercent / 100);
		$("#intro-content-wrapper").css("opacity", fadeValue);
	  }
	}
  }
  
  // Optional: adjust on window resize
  window.addEventListener("resize", setIntroHeight);
  