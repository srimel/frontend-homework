const input = document.querySelector('input');
const result = document.getElementById('result');

input.addEventListener('input', handleInput);

function handleInput(e) {
  const inputNumberStr = e.target.value;
  if (inputNumberStr.length < 1) {
    result.textContent = '';
  } else if (isBadInput(inputNumberStr)) {
    result.style.color = 'red';
    result.textContent = 'Invalid Input Error: Only positive numbers allowed.';
  } else if (isPalindrome(inputNumberStr)) {
    result.style.color = 'green';
    result.textContent = 'Yes. This is a palindrome!';
  } else {
    result.style.color = 'red';
    result.textContent = 'No. Try again.';
  }
}

function isPalindrome(inputNumberStr) {
  const reverseNumberStr = inputNumberStr.split('').reverse().join('');
  return inputNumberStr === reverseNumberStr;
}

function isBadInput(inputNumberStr) {
  return !/^[0-9.]*$/.test(inputNumberStr);
}