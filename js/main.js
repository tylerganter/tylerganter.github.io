function onLoad() {
  setIntroHeight();
  swipeSquiggles();
  // Additional init code here if needed
}

// Dynamically sets the intro section to fill the viewport minus navbar height
function setIntroHeight() {
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;
  const headerHeight = document.querySelector("header").offsetHeight;
  const intro = document.querySelector("#intro");
  const h = windowHeight - headerHeight + "px";
  intro.style.height = h;
  intro.style.minHeight = h;
}

// Animate the harmonic pitch image to swipe in from 100% to 0% width
function swipeSquiggles() {
  const duration = 2000;
  const start = performance.now();

  function frame(now) {
    const elapsed = now - start;
    const t = Math.min(elapsed / duration, 1);
    // ease-out quadratic
    const eased = 1 - Math.pow(1 - t, 2);

    const widthPercent = 100 * (1 - eased);
    document.querySelector("#animation").style.backgroundSize =
      widthPercent + "% 100%";
    document.querySelector("#intro-content-wrapper").style.opacity = eased;

    if (t < 1) requestAnimationFrame(frame);
  }

  requestAnimationFrame(frame);
}

// Optional: adjust on window resize
window.addEventListener("resize", setIntroHeight);
