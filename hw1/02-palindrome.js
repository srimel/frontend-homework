const input = document.querySelector('input');
const result = document.getElementById("result");

input.addEventListener('input', handleInput);

function handleInput(e) {
    const inputNumberStr = e.target.value;
    if (inputNumberStr.length < 2) {
        result.textContent = "";
    } else if (isPalindrome(inputNumberStr)) {
        result.style.color = "green"
        result.textContent = "Yes. This is a palindrome!";
    } else {
        result.style.color = "red"
        result.textContent = "No. Try again.";
    }
}

function isPalindrome(inputNumberStr) {
    const reverseNumberStr = inputNumberStr.split('').reverse().join('');
    return inputNumberStr === reverseNumberStr;
}