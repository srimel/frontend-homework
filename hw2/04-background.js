// Stuart Rimel
const bodyElement = document.getElementsByTagName('body');
const intervalInputElement = document.getElementById('intervalInput');
const buttonElement = document.getElementById('input-btn');
const ALPHA = 0.7;
let interval = '';
let intervalID = null;

const getRandomColor = function getRandomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgba(${r}, ${g}, ${b}, ${ALPHA})`;
};

const setRandomBackgroundColor = function setRandomBackgroundColor() {
  bodyElement[0].style.backgroundColor = getRandomColor();
};

const handlePageLoad = function handlePageLoad() {
  setRandomBackgroundColor();
  buttonElement.disabled = true;
};

const isValidInput = function isValidInput(input) {
  if (input.length > 0 && input !== '0') {
    if (!input.includes('-') && !input.includes('.')) {
      return true;
    }
  }
  return false;
};

const handleIntervalInput = function handleIntervalInput(event) {
  interval = event.target.value;
  if (isValidInput(interval)) {
    buttonElement.disabled = false;
  } else {
    buttonElement.disabled = true;
  }
};

const transformButton = function transformButton(incomingAction) {
  buttonElement.value = incomingAction === 'Start' ? 'Stop' : 'Start';
  buttonElement.className =
    incomingAction === 'Start' ? 'btn btn-danger' : 'btn btn-primary';
};

const handleBackgroundCycle = function handleBackgroundCycle(event) {
  const action = event.target.value;
  transformButton(action);
  if (action === 'Start') {
    intervalInputElement.disabled = true;
    intervalID = setInterval(setRandomBackgroundColor, interval + '000');
  } else {
    clearInterval(intervalID);
    intervalID = null;
    intervalInputElement.disabled = false;
  }
};

window.addEventListener('load', handlePageLoad);
intervalInputElement.addEventListener('input', handleIntervalInput);
buttonElement.addEventListener('click', handleBackgroundCycle);
