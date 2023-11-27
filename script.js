const x = document.querySelector(".x");
const nav = document.querySelector(".nav");

x.addEventListener("click", () => {
  nav.classList.toggle("hide");
});
