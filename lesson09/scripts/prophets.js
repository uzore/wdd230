
const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

const getProphetData = async () => {
  try {
    // Fetch data from the JSON source url
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    // Convert the response to a JSON object
    const data = await response.json();
    console.table(data);

    // Call the displayProphets function with data.prophets as an argument
    displayProphets(data.prophets);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    const portrait = document.createElement('img');

    // build the image element
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '300');
    portrait.setAttribute('height', '400');

    // Append the heading and image elements to the section element
    card.appendChild(fullName);
    card.appendChild(portrait);

    // Add the section card to the "cards" div
    cards.appendChild(card);
  });
};
// Call the getProphetsData function to test the fetch and response.
getProphetData();
