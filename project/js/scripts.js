const navBtn = document.querySelector(".navigation .btn");
const navLinks = document.querySelector(".nav-links");

navBtn.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});
