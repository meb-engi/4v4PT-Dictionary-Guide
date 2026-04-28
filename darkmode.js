let darkmode = localStorage.getItem("darkmode")
const themeSwitch = document.getElementById("theme-switch")

const enableDarkMode = () => {
    document.body.classList.add("darkmode")
    localStorage.setItem("darkmode", "active")
    document.getElementById("apta").src = "images/APTA_LOGO.png"; //changes logo
}

const disableDarkMode = () => {
    document.body.classList.remove("darkmode")
    localStorage.setItem("darkmode", null)
    document.getElementById("apta").src = "images/APTA_LOGO_light.png";  //changes logo
}

if (darkmode === "active") enableDarkMode() 

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem("darkmode")
    darkmode !== "active" ? enableDarkMode() : disableDarkMode()
})