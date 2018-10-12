const numbers = document.querySelectorAll('[data-time]');
const arrayNumbers = Array.from(numbers);
const seconds = arrayNumbers.map(number => number.dataset.time);

const secNums = seconds.map(sec => sec.replace(':', '.'));

const convertedSeconds = secNums.map(secNum => parseFloat(secNum));

const sum = convertedSeconds.reduce((acc, currVal) => acc + currVal);