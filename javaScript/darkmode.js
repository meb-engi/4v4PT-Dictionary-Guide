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