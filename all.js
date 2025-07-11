const html = document.getElementById("htmlPage");
const logo = document.getElementById("logo");
const footerLogo = document.getElementById("footer-logo");
const footerLogoWeb = document.getElementById("footer-logo-web");
const proveLgWeb = document.getElementById("prove-lg-web");
const search = document.getElementById("search");
const media = document.getElementById("media");
const download = document.getElementById("download");
const theme = document.getElementById("theme");
const themeMobile = document.getElementById("theme-mobile");

let isDark = html.getAttribute("data-bs-theme") === "dark";

function toggleTheme() {
  isDark = !isDark;

  if (isDark) {
    html.setAttribute("data-bs-theme", "dark");
    logo.src = "https://www.ofiii.com/image/header/desktop/dark/logo.svg";
    search.src = "https://www.ofiii.com/image/header/desktop/dark/search.svg";
    media.src = "https://www.ofiii.com/image/header/desktop/dark/media.svg";
    download.src = "https://www.ofiii.com/image/header/desktop/dark/download.svg";
    theme.src = "https://www.ofiii.com/image/header/desktop/dark/sun.svg";
    themeMobile.src = "https://www.ofiii.com/image/header/desktop/dark/sun.svg";
    footerLogo.src = "https://www.ofiii.com/image/footer/mobile/dark/logo.png";
    footerLogoWeb.src = "https://www.ofiii.com/image/footer/desktop/dark/logo.png";
    proveLgWeb.src = "https://www.ofiii.com/image/footer/desktop/dark/ott.png";
  } else {
    html.setAttribute("data-bs-theme", "light");
    logo.src = "https://www.ofiii.com/image/header/desktop/light/logo.png";
    search.src = "https://www.ofiii.com/image/header/desktop/light/search.svg";
    media.src = "https://www.ofiii.com/image/header/desktop/light/media.svg";
    download.src = "https://www.ofiii.com/image/header/desktop/light/download.svg";
    theme.src = "https://www.ofiii.com/image/header/desktop/light/moon.svg";
    themeMobile.src = "https://www.ofiii.com/image/header/desktop/light/moon.svg";
    footerLogo.src = "https://www.ofiii.com/image/footer/mobile/light/logo.png";
    footerLogoWeb.src = "https://www.ofiii.com/image/footer/desktop/light/logo.png";
    proveLgWeb.src = "https://www.ofiii.com/image/footer/desktop/light/ott.png";
  }
}

// 綁定兩個按鈕的點擊事件
theme.addEventListener("click", toggleTheme);
themeMobile.addEventListener("click", toggleTheme);


// swiper

var swiper = new Swiper(".mySwiper", {
  loop: true,
  // multipleActiveThumbs: true,
  spaceBetween: 10,
  // slidesPerView: 7.5,
  breakpoints: {
    // 小於 576px (手機)
    0: {
      slidesPerView: 2.5,
    },
    // 小於 768px (小平板)
    576: {
      slidesPerView: 4.5,
    },
    // 小於 992px (一般平板)
    768: {
      slidesPerView: 5.5,
    },
    // 大於 992px (桌面)
    992: {
      slidesPerView: 7.5,
    }
  },
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

swiper2.on('slideChange', function () {
  const activeIndex = swiper2.realIndex;
  const thumbnailSlides = document.querySelectorAll('.mySwiper .swiper-slide');
  const activeThumb = thumbnailSlides[activeIndex];

  if (activeThumb) {
    activeThumb.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest'
    });
  }
});

var swiper = new Swiper(".mySwiperMobile", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// navbar

// 選取 navbar 的 collapse 區塊和 toggle 按鈕
const navbarCollapse = document.querySelector('.navbar-collapse');
const navbarToggler = document.querySelector('.navbar-toggler');

// 當使用者點擊文件中任何地方
document.addEventListener('click', function (event) {
  const isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);

  // 如果點擊不是在 navbar 裡，且 navbar 是展開狀態
  if (!isClickInsideNavbar && navbarCollapse.classList.contains('show')) {
    new bootstrap.Collapse(navbarCollapse).hide(); // 手動關閉 navbar
  }
});

// const navbar = document.getElementById("mainNavbar");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 10) {
//     navbar.classList.add("navbar-scrolled");
//   } else {
//     navbar.classList.remove("navbar-scrolled");
//   }
// });
