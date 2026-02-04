// Hamburger Menu Logic (copy from index.html)
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
// Auto Type Text Logic
var typed = new Typed(".multiple-text", {
  strings: ["Web Developer", "Javascript Developer", "Frontend Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
