function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

//Initialize display elements
const visitsDisplay = document.querySelector(" .visits");

//get the stored value in localStorage
let noVisits = Number(window.localStorage.getItem("visits-ls"));

//Determine if this is the first visit or display the number of visibility: 
if (noVisits !== 0){
    visitsDisplay.textContent = noVisits;
} else {
    visitsDisplay.textContent = 'This is your first visit!';
}

//Increment the number of visits.
noVisits++;

//Store the new number of visits.
localStorage.setItem("visits-ls", noVisits);
