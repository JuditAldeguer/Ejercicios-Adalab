'use strict';

//variables
const updateBtn = document.querySelector('.update');
const result = document.querySelector('.result');
const selectBtn = document.querySelector('.select');
const body = document.querySelector('body');

//Funcion
function showResult(event) {
  console.log(event.currentTarget);
  const clickedBtn = document.querySelector('.select');
  if (clickedBtn.value === 'sad') {
    body.classList.add('sad');
    body.classList.remove('happy');
    result.innerHTML = ':(';
  } else {
    body.classList.remove('sad');
    body.classList.add('happy');
    result.innerHTML = ':)';
  }

  console.log(getRandomIntInclusive(1, 5));
  console.log(getRandomInt(1, 5));
  console.log(getRandomArbitrary(1, 5));
  console.log(getRandom());
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive.
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive.
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min; //The maximum is exclusive and the minimum is inclusive.Puede contener decimales.
}
function getRandom() {
  return Math.random(); //The 1 is exclusive and the 0 is inclusive. Puede contener decimales.
}

//Listener
updateBtn.addEventListener('click', showResult);
