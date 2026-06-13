// darkmode

let darkmode = localStorage.getItem("darkmode") || "active"
const themeSwitch = document.getElementById("theme-switch")
const element = document.querySelector('html');

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    element.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
    if (document.getElementById("apta")) document.getElementById("apta").src = "images/logo/APTA_LOGO.webp"; //changes logo
    if (document.getElementById("bglogo")) document.getElementById("bglogo").src = "images/logo/APTA_LOGO.webp";  //changes logo
    if (document.getElementById("throbber")) document.getElementById("throbber").src = "images/THROBBER.webp";  //changes loading icon
    if (document.getElementById("landingBG")) document.getElementById("landingBG").style.backgroundImage = "url(images/BANNER_BG.webp)";  //changes landing bg 
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode")
    element.classList.remove("darkmode")
    localStorage.setItem("darkmode", "inactive")
    if (document.getElementById("apta")) document.getElementById("apta").src = "images/logo/APTA_LOGO_light.webp";  //changes logo
    if (document.getElementById("bglogo")) document.getElementById("bglogo").src = "images/logo/OCE_LOGO.webp";  //changes logo
    if (document.getElementById("throbber")) document.getElementById("throbber").src = "images/THROBBER_light.webp";  //changes loading icon
    if (document.getElementById("landingBG")) document.getElementById("landingBG").style.backgroundImage = "url(images/BANNER_BG_light.webp)";  //changes landing bg 
}

if (darkmode === "active") enableDarkMode(); else disableDarkMode();

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})

// preloader

var loader = document.getElementById("preloader");

window.addEventListener("load", function() {
    loader.style.display = "none";
})

// video player

const videos = document.querySelectorAll("video")

videos.forEach(video => {
  if(video.parentElement.localName !== 'script-ignore'){ //so the video in the landing page gets ignored by this
    video.addEventListener("mouseover", function () {
      this.play()
    })
  
    video.addEventListener("mouseout", function () {
      this.pause()
      this.currentTime = 0;
    })
  
    video.addEventListener("touchstart", function () {
      this.play()
    })
  
    video.addEventListener("touchend", function () {
      this.pause()
      this.currentTime = 0;
    })

    video.addEventListener("click", function () {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (this.requestFullscreen) {
        this.requestFullscreen().catch(err => {
          console.error(`Fullscreen error: ${err.message}`);
        });
      } else if (this.webkitRequestFullscreen) { /* Safari */
        this.webkitRequestFullscreen();
      } else if (this.msRequestFullscreen) { /* IE11 */
        this.msRequestFullscreen();
      }
    })
  }
})

// scroll to top

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

let lastScrollPosition = 0;

//only shows when user starts scrolling up
function scrollFunction() {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > lastScrollPosition || currentScrollPosition < 20) {
        mybutton.classList.remove("show");
    } else {
        mybutton.classList.add("show");
    }

    lastScrollPosition = currentScrollPosition;
};


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
} 