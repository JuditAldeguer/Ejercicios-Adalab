'use strict';

//variables
const updateBtn = document.querySelector('.update');
const result = document.querySelector('.result');
const selectBtn = document.querySelector('.select');
const body = document.querySelector('body');

//Funcion
function showResult(event) {
  debugger;
  console.log(event.currentTarget);
  const clickedBtn = document.querySelector('.select');
  if (clickedBtn.value === 'sad') {
    body.classList.add('sad');
    body.classList.add('happy');
    result.innerHTML = ':(';
  } else {
    body.classList.remove('sad');
    body.classList.add('happy');
    result.innerHTML = ':)';
  }
}

//Listener
updateBtn.addEventListener('click', showResult);
