
const url = 'https://uzore.github.io/wdd230/scoots/data/members.json';
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
      <h4>${company.name}</h4>
      <p><strong>Rental Type:</strong> ${company.type}</p>
      <p><strong></strong> <a href="${company.website}" target="_blank">${company.website}</a></p>
      <p><strong>Rental Price:</strong> ${company.price}</p>
      <hr>
    `;

    const portrait = document.createElement('img');
    portrait.setAttribute('src', company.image);
    portrait.setAttribute('alt', `${company.name} Logo`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '300');
    portrait.setAttribute('height', '300');


    card.appendChild(portrait);

    card.appendChild(companyDiv);

    // Add the section card to the "cards" div
    cards.appendChild(card);
  });
};

getCompanyData();
