// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

const genCharacterElements = function genCharacterElements(data) {
  const sectionElement = document.querySelector('section');
  sectionElement.classList.add('characters');
  data.forEach((character) => {
    const { fullName, title, imageUrl } = character;

    const characterDiv = document.createElement('div');
    characterDiv.classList.add('character');

    const imageDiv = document.createElement('div');
    imageDiv.classList.add('image');

    const imgElement = document.createElement('img');
    imgElement.setAttribute('src', imageUrl);
    imgElement.setAttribute('alt', `${fullName}, ${title}`);
    imgElement.setAttribute('width', 225);
    imgElement.setAttribute('height', 225);

    const nameAndTitleDiv = document.createElement('div');
    const fullNameElement = document.createElement('h3');
    fullNameElement.classList.add('full-name');
    fullNameElement.textContent = fullName;
    const titleElement = document.createElement('p');
    titleElement.classList.add('title');
    titleElement.textContent = title;
    nameAndTitleDiv.appendChild(fullNameElement);
    nameAndTitleDiv.appendChild(titleElement);

    imageDiv.appendChild(imgElement);
    characterDiv.appendChild(imageDiv);
    characterDiv.appendChild(fullNameElement);
    characterDiv.appendChild(titleElement);

    sectionElement.appendChild(characterDiv);
  });
};

fetch(url)
  .then((response) => {
    console.log('Request successful', response);
    return response.json(); // returns a promise and is used in the next then clause
  })
  .then((data) => {
    genCharacterElements(data);
  })
  .catch((error) => {
    console.error('Request failed', error);
  });
