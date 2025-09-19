const btn = document.getElementById("swap");
const background = document.getElementById("app");

btn.addEventListener("click", () => {
  background.classList.toggle("night");
	btn.classList.toggle("button_night")
});