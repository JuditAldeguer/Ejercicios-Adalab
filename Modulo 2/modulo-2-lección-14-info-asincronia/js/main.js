'use strict';

// //setInterval();
// let counter = 0;
// const incrementAndShowCounter = () => {
//   counter++;
//   const time = document.querySelector('.time');
//   time.innerHTML = counter;
// };
// setInterval(incrementAndShowCounter, 1000);

// //setTimeout();
// const removeMsg = () => {
//   const msg = document.querySelector('.msg');
//   msg.innerHTML = '';
// };
// setTimeout(removeMsg, 6000);

// //clearInterval();
// let counter = 0;
// let temp;
// const incrementAndShowCounter = () => {
//   counter++;
//   const time = document.querySelector('.time');
//   time.innerHTML = counter;
//   if (counter === 10) {
//     clearInterval(temp);
//   }
// };
// temp = setInterval(incrementAndShowCounter, 1000);

//Ejemplo vario --------------------
let counter = 0;
let resta = 10;
const time = document.querySelector('.time');
function secondCount() {
  counter++;
  time.innerHTML = counter;
}
setInterval(secondCount, 1000); // si no podemos parámetro tiempo, se ejecuta inmediatamente
let endSetInterval;
function myFunction() {
  resta -= 1;
  const msg = document.querySelector('.msg');
  msg.innerHTML = `CUIDADO! Este texto desaparecerá en ${resta} segundos`;

  if (endSetInterval === undefined) {
    endSetInterval = setInterval(myFunction, 1000);
  }

  if (resta === 0) {
    clearInterval(endSetInterval);
    msg.innerHTML = '';
    btn.innerHTML = 'Desapareció!';
  }
}
setTimeout(myFunction, 3000);

const btn = document.querySelector('.js_button');
function resetBtn() {
  btn.classList.remove('hidden');
}
btn.addEventListener('click', resetBtn);
const resetBtnSetTime = setTimeout(resetBtn, 4000);

//clearTimeout()
//Es muy poco usado
let counter2 = 0;
let control;
const time2 = document.querySelector('.time2');
function secondCount2() {
  if (counter2 < 6) {
    counter2++;
    time2.innerHTML = counter2;
  } else if (counter2 === 6) {
    counter2 = 0;
    time2.innerHTML = counter2;
  }
  if (control === undefined) {
    control = setInterval(secondCount2, 1000);
  }
}
var myVar;
const btnTryIt = document.querySelector('.js_btnTryIt');
const btnStopIt = document.querySelector('.js_btnStopIt');
function showAlert() {
  counter2 = 0;
  time2.innerHTML = counter2;
  if (myVar === undefined) {
    myVar = setTimeout(function () {
      alert('Alert shown');
    }, 5000);
    secondCount2();
    myVar = undefined;
  } else {
    time2.innerHTML = 0;
    myStopFunction();
  }
}
function myStopFunction() {
  clearTimeout(myVar);
  clearInterval(control);
  control = undefined;
  counter2 = 0;
  time2.innerHTML = counter2;
}
btnTryIt.addEventListener('click', showAlert);
btnStopIt.addEventListener('click', myStopFunction);
