'use strict';

const superWave = document.querySelector('.super-wave'); // asignar
console.log(superWave); // consultar valor en consola
superWave.classList.add('hightlight'); // le añadimos clase nueva

const names = 'Paquita';
const surnames = ' Salas';
console.log(names + surnames); // esto pinta en consola 'Paquita Salas'
const price = 11;
const shipping = 3;
console.log(price + shipping); // esto pinta en consola 13


const namee = 'Ada';
const surname = 'Lovelace';
console.log(`My name is ${namee} ${surname}.`);
// 'My name is Ada Lovelace.'


const browserName = 'Mozilla';
console.log(browserName.length); //dice número
console.log('Mozilla is ' + browserName.length + ' code units long'); //dice número en la frase


let notDefinedVar;
console.log(notDefinedVar); // undefined


// const userAge = document.querySelector('.user__age');
// console.log(userAge.innerHTML); // esto es un string
// const yearsToRetirement = 67 - parseInt(userAge.innerHTML); // convierte la variable string en número con el que poder operar
// console.log(`Te quedan ${yearsToRetirement} años para jubilarte`); //operación


let text = '¿De qué tipo soy?'
console.log(text + ' es del tipo ' + typeof(text)) //tipo texto
text = 123
console.log('ahora ' + text + ' es del tipo ' + typeof(text)) //tipo numero
text = undefined
console.log('y ahora ' + text + ' es del tipo ' + typeof(text)) //tipo undefined


let userAge = document.querySelector('.user__age');
userAge = parseInt(userAge.value);
console.log('ahora ' + userAge + ' es del tipo ' + typeof(userAge)) //tipo numero DA ERROR----------------------------------------
console.log('La usuaria no ha introducido una edad válida:', isNaN(userAge));
userAge = parseInt(userAge.innerHTML);
console.log('ahora ' + userAge + ' es del tipo ' + typeof(userAge)) //tipo numero
console.log('La usuaria no ha introducido una edad válida:', isNaN(userAge));