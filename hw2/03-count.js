// Stuart Rimel

const inputElement = document.getElementById('search-input');
const textElement = document.getElementById('text');
const originalInnerHTML = textElement.innerHTML;

const highlight = function highlight(word, searchText) {
  return word.replace(
    searchText,
    `<span style="background-color: yellow">${searchText}</span>`
  );
};

const findAndHighlight = function findAndHighlight(searchText) {
  let words = originalInnerHTML.split(' ');
  for (i = 0; i < words.length; i++) {
    if (words[i].includes(searchText)) {
      words[i] = highlight(words[i], searchText);
    }
  }
  textElement.innerHTML = words.join(' ');
};

const handleKeyDown = function handleKeyDown(event) {
  let searchText = event.target.value;
  if (event.key.length === 1) {
    searchText += event.key;
  } else if (event.key === 'Backspace') {
    searchText = searchText.slice(0, -1);
  }
  findAndHighlight(searchText);
};

inputElement.addEventListener('keydown', handleKeyDown);
