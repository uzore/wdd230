const baseURL = "https://uzore.github.io/wdd230/";
const linksURL = "https://uzore.github.io/wdd230/data/links.json";
const cards = document.querySelector('#rivers-cards');

const getLinks = async () => {
    try {
        const response = await fetch(linksURL);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        displayLinks(data.lessons);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const displayLinks = (lessons) => {
    lessons.forEach((lesson) => {
        const riversCard = document.createElement('section');
        const fullName = document.createElement('h2');
        fullName.textContent = `Lesson ${lesson.lessons}`;

        riversCard.appendChild(fullName);

        const linksList = document.createElement('ul');
        lesson.links.forEach((link) => {
            const listItem = document.createElement('li');
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.title;

            listItem.appendChild(linkElement);
            linksList.appendChild(listItem);
        });

        riversCard.appendChild(linksList);
        cards.appendChild(riversCard);
    });
};

getLinks();
