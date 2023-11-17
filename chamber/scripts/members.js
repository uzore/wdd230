
const url = 'https://uzore.github.io/wdd230/chamber/data/members.json';
const cards = document.querySelector('#cards');

const getCompanyData = async () => {
  try {
    // Fetch data from the JSON source URL
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Convert the response to a JSON object
    const data = await response.json();
    console.table(data);

    // Call the displayCompanies function with data.companies as an argument
    displayCompanies(data.companies);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const displayCompanies = (companies) => {
  companies.forEach((company) => {
    const card = document.createElement('section');
    const companyDiv = document.createElement('div');
    
    companyDiv.innerHTML = `
      <h3>${company.name}</h3>
      <p><strong>Address:</strong> ${company.address}</p>
      <p><strong>Phone:</strong> ${company.phone}</p>
      <p><strong>Website:</strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
      <p><strong>Membership Level:</strong> ${company.membership_level}</p>
      <hr>
    `;

    const portrait = document.createElement('img');
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('alt', `${company.name} Logo`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '100');
    portrait.setAttribute('height', '60');


    card.appendChild(portrait);

    card.appendChild(companyDiv);

    // Add the section card to the "cards" div
    cards.appendChild(card);
  });
};

getCompanyData();


const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector("#cards");

gridButton.addEventListener("click", () => {

	display.classList.add("cards");
	display.classList.remove("list");
});

listButton.addEventListener("click", showList);

function showList() {
	display.classList.add("list");
	display.classList.remove("cards");
}
