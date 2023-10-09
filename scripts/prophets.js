const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';;
const cards = document.querySelector('#cards');
async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.prophets);
  }
  
  getProphetData();

  const displayProphets = (prophets) => {
    // card build code goes here
  }

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      // Create elements to add to the div.cards element
      let card = document.createElement('section');
      let fullName = document.createElement('__'); // fill in the blank
      let portrait = document.createElement('img');
  
      // Build the h2 content out to show the prophet's full name
      fullName.textContent = `${prophet._____} ____________`; // fill in the blank
      // Build the image portrait by setting all the relevant attributes
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portait of ${prophet.____} ______________`); // fill in the blank
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      // Append the section(card) with the created elements
      card.appendChild(_______); //fill in the blank
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); // end of arrow function and forEach loop