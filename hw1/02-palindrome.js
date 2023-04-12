const input = document.querySelector('input');
const result = document.getElementById('result');

const isBadInput = function checkIfBadInput(inputNumberStr) {
  return !/^[0-9.]*$/.test(inputNumberStr);
};

const isPalindrome = function checkIfPalindrome(inputNumberStr) {
  const reverseNumberStr = inputNumberStr.split('').reverse().join('');
  return inputNumberStr === reverseNumberStr;
};

const handleInput = function handleInputEvent(e) {
  const inputNumberStr = e.target.value;
  if (inputNumberStr.length < 1) {
    result.textContent = '';
  } else if (isBadInput(inputNumberStr)) {
    result.className = 'card-text text-danger';
    result.textContent = 'Invalid Input Error: Only positive numbers allowed.';
  } else if (isPalindrome(inputNumberStr)) {
    result.className = 'card-text text-success';
    result.textContent = 'Yes. This is a palindrome!';
  } else {
    result.className = 'card-text text-danger';
    result.textContent = 'No. Try again.';
  }
};

input.addEventListener('input', handleInput);