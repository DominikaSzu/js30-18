const numbers = document.querySelectorAll('[data-time]');
const arrayNumbers = Array.from(numbers);
const seconds = 
      arrayNumbers.map(number => number.dataset.time)
                      .map(elem => {
                          const [mins, secs] = elem.split(':').map(parseFloat);
                          return (mins * 60) + secs;
                      })
                      .reduce((acc, val) => acc + val);

let secondsLeft = seconds;
let hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
let minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60; 

console.log(`${hours} : ${minutes} : ${secondsLeft}`)


//const min = [];
//const sec = [];
//let reggie = /:/;
//
//const lala = seconds.map(lal => {
//   return lal.split(reggie);
//});
//
//lala.forEach(lal => {
//    min.push(lal[0]);
//    sec.push(lal[1]);
//});
//
//function makeItNum (num) {
//    return parseFloat(num);
//}
//
//const minToNumber = min.map(num => makeItNum(num));
//const secToNumber = sec.map(num => makeItNum(num));
//
//function reduceItBabe (acc, currVal) {
//    return acc + currVal;
//}
//
//const minSum = minToNumber.reduce(reduceItBabe);
//const secSum = secToNumber.reduce(reduceItBabe);
//
//function sumItAll (mins, secs) {
//    let seconds = (mins * 60) + secs;
//    let restSec = seconds % 60;
//    let minutes = parseInt(seconds / 60);
//    let restMin = minutes % 60;
//    let hours = parseInt(minutes / 60);
//    return `${hours} : ${restMin} : ${restSec}`;
//}

//sumItAll(minSum, secSum);