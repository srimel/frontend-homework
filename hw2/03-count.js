// Stuart Rimel

const inputElement = document.getElementById('search-input');
const textElement = document.getElementById('text');
const originalInnerHTML = textElement.innerHTML;

const highlight = function highlight(word, searchText) {
  const wordPattern = new RegExp(`\\b${searchText}\\b`);
  return word.replace(
    wordPattern,
    `<span style="background-color: yellow">${searchText}</span>`
  );
};

const findAndHighlight = function findAndHighlight(searchText) {
  const words = originalInnerHTML.split(' ');
  words.forEach((word, index) => {
    if (word.includes(searchText)) {
      words[index] = highlight(word, searchText);
    }
  });
  textElement.innerHTML = words.join(' ');
};

const handleKeyDown = function handleKeyDown(event) {
  let searchText = event.target.value;
  if (event.key.length === 1 && event.ctrlKey === false) {
    searchText += event.key;
  } else if (event.key === 'Backspace') {
    searchText = searchText.slice(0, -1);
  }
  findAndHighlight(searchText);
};

inputElement.addEventListener('keydown', handleKeyDown);
