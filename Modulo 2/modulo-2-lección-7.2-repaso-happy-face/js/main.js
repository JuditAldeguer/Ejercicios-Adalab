'use strict';

//variables
const updateBtn = document.querySelector('.update');
const result = document.querySelector('.result');
const clickedBtn = document.querySelector('.select');
const body = document.querySelector('body');

//Funcion
function handleUpdateBtnResult(event) {
  event.preventDefault();
  debugger;
  console.log(event.currentTarget);
  updateFace();
  numbColor();
}

function updateFace() {
  if (clickedBtn.value === ':(') {
    body.classList.add('sad');
    body.classList.remove('happy');
    result.innerHTML = clickedBtn.value;
  } else {
    body.classList.remove('sad');
    body.classList.add('happy');
    result.innerHTML = clickedBtn.value;
  }
}

function numbColor() {
  console.log(getRandomIntInclusive(0, 100));
  console.log(getRandomInt(1, 5));
  console.log(getRandomArbitrary(1, 5));
  console.log(getRandom());
  const randomNumb = Math.round(Math.random() * 100); // JS ya tiene una funcion Math.random que crea aleatorios del 0-1. Esto se multiplica por 100 y se aredondea.
  console.log(randomNumb);
  const restNumb = randomNumb % 2;
  if (restNumb === 0) {
    result.classList.add('par');
    result.classList.remove('impar');
  } else {
    result.classList.add('impar');
    result.classList.remove('par');
  }
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
updateBtn.addEventListener('click', handleUpdateBtnResult);
