// DOM elements
const navbar = document.querySelector(".navbar");
const navbarList = document.querySelector(".navbar__bottom-list");

// Open mobile navigation
navbar.addEventListener("click", (e) => {
  const navbarOpen = e.target.closest(".navbar__open");
  if (navbarOpen) {
    navbarList.classList.remove("close");
    navbarList.classList.add("open");
  }
});

// Close mobile navigation
navbar.addEventListener("click", (e) => {
  const navbarOpen = e.target.closest(".navbar__close");
  if (navbarOpen) {
    navbarList.classList.remove("open");
    navbarList.classList.add("close");
  }
});
