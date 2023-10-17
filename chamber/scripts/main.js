function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		body.style.background = "#00021A";
		body.style.color = "#ffff";
        modeButton.textContent = "❎";
	} else {
		body.style.background = "#eeee";
		body.style.color = "#00000";
		modeButton.textContent = "☑️";
	}
});
