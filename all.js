const html = document.getElementById("htmlPage");
const logo = document.getElementById("logo");
const footerLogo = document.getElementById("footer-logo");
const footerLogoWeb = document.getElementById("footer-logo-web");
const proveLgWeb = document.getElementById("prove-lg-web");
const search = document.getElementById("search");
const media = document.getElementById("media");
const download = document.getElementById("download");
const theme = document.getElementById("theme");

let isDark = html.getAttribute("data-bs-theme") === "dark";

// let isDark = false;

theme.addEventListener("click", () => {
  isDark = !isDark;

  if (isDark) {
    html.setAttribute("data-bs-theme", "dark");
    logo.src = "https://www.ofiii.com/image/header/desktop/dark/logo.svg";
    search.src = "https://www.ofiii.com/image/header/desktop/dark/search.svg";
    media.src = "https://www.ofiii.com/image/header/desktop/dark/media.svg";    
    download.src = "https://www.ofiii.com/image/header/desktop/dark/download.svg";
    theme.src = "https://www.ofiii.com/image/header/desktop/dark/sun.svg";
    footerLogo.src = "https://www.ofiii.com/image/footer/mobile/dark/logo.png";
    footerLogoWeb.src = "https://www.ofiii.com/image/footer/desktop/dark/logo.png";
    proveLgWeb.src = "https://www.ofiii.com/image/footer/desktop/dark/ott.png";
  } else {
    html.setAttribute("data-bs-theme", "light");
    logo.src = "https://www.ofiii.com/image/header/desktop/light/logo.png";
    footerLogoWeb.src = "https://www.ofiii.com/image/footer/desktop/light/logo.png";
    search.src = "https://www.ofiii.com/image/header/desktop/light/search.svg";
    media.src = "https://www.ofiii.com/image/header/desktop/light/media.svg";    
    download.src = "https://www.ofiii.com/image/header/desktop/light/download.svg";
    theme.src = "https://www.ofiii.com/image/header/desktop/light/moon.svg";
    footerLogo.src = "https://www.ofiii.com/image/footer/mobile/light/logo.png";
    proveLgWeb.src = "https://www.ofiii.com/image/footer/desktop/light/ott.png";
  }
});

