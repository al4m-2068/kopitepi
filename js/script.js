// hero section: on scrolled
const navBar = document.querySelector("header");
const navLogo = document.querySelector('img[alt="nav-kepi-logo"]');
const logoBig = document.querySelector("header a");
const navMenu = document.querySelector("nav");
const navHp = document.querySelector("nav.navHp");
const menuImg = document.getElementById("menuImage");
const items = document.querySelectorAll(".menu-item");

// const heroLogo = document.getElementById('heroLogo');

window.addEventListener("scroll", () => {
  const scrollP =
    window.pageYOffset || window.scrollY || document.documentElement.scrollTop;
  if (scrollP > 50) {
    logoBig.classList.replace("opacity-0", "opacity-100");
    logoBig.classList.add("logoScrolled");
    navMenu.classList.add("navScrolled");
  } else {
    logoBig.classList.replace("opacity-100", "opacity-0");
    logoBig.classList.remove("logoScrolled");
    navMenu.classList.remove("navScrolled");
  }
});

function changeImage(menu, element) {
  // reset semua menu
  items.forEach((i) => i.classList.remove("active"));

  // aktifkan menu yg diklik
  element.classList.add("active");

  const images = {
    kuat: "./src/images/k_kuat.png",
    semangat: "./src/images/k_semangat.png",
    capcin: "./src/images/k_capcin.png",
    latte: "./src/images/k_latte.png",
    aren: "./src/images/k_aren.png",
    gayo: "./src/images/k_gayo.png",
    matcha: "./src/images/k_matcha.png",
    freshlatte: "./src/images/k_fresh.png",
  };

  menuImg.style.opacity = 0;
  setTimeout(() => {
    menuImg.src = images[menu] || "";
    menuImg.onload = () => {
      menuImg.style.opacity = 1;
    };
  }, 150);
}
