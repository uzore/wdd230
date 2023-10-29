function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

const modeButton = document.querySelector("#mode");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("☑️")) {
		body.style.background = "#00021A";
		body.style.color = "#CDA204";
        modeButton.textContent = "❎";
	} else {
		body.style.background = "#eeee";
		body.style.color = "#00021A";
		modeButton.textContent = "☑️";
	}
});

//Initialize display elements
const visitsDisplay = document.querySelector(" .visits");

//get the stored value in localStorage
let noVisits = Number(window.localStorage.getItem("visits-ls"));

//Determine if this is the first visit or display the number of visibility: 
if (noVisits === 0){
    // visitsDisplay.textContent = noVisits;
	visitsDisplay.textContent = "Back so soon! Awesome!";
} else if (noVisits === 1){
	visitsDisplay.textContent = "You visited 1 day ago.";
} else if (noVisits > 1) {
	visitsDisplay.textContent = noVisits;
}
else {
    visitsDisplay.textContent = "Welcome! Let's know if you have any questions";
}

//Increment the number of visits.
noVisits++;

//Store the new number of visits.
localStorage.setItem("visits-ls", noVisits);

