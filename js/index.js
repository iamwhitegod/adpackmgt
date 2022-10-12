// DOM elements
const navbar = document.querySelector(".navbar");
const navbarList = document.querySelector(".navbar__bottom-list");

const form = document.querySelector("#js--form");
const fullname = document.querySelector("#fullname");

const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");

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

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  form.querySelector(".btn").textContent = "Submitting...";

  const userData = {
    fullname: fullname.value,
    email: email.value,
    subject: subject.value,
    message: message.value,
  };

  const res = await fetch("https://adpackmgt.herokuapp.com/request", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const data = await res.json();

  // Clear form inputs
  fullname.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
  form.querySelector(".btn").textContent = "Send Message";

  const statusBar = document.createElement("div");
  statusBar.className = "form--success";
  statusBar.textContent = "Thanks for submitting. Message sent successfully.";
  form.insertAdjacentElement("beforeend", statusBar);

  setTimeout(() => {
    statusBar.remove();
  }, 10000);

  console.log(userData, data);
});
