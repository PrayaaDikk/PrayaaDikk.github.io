const headerNav = document.querySelector(".header-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

hamburgerMenu.onclick = () => {
  headerNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!headerNav.contains(e.target) && !hamburgerMenu.contains(e.target)) {
    headerNav.classList.remove("active");
  }
});
