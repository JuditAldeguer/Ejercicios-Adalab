'use strict';

const age = 35;

if (age > 30) {
  console.log('Tienes más de 30 años'); //Esta línea se ejecuta solo si se cumple la condición
} else if (age >= 20) {
  console.log('Tienes entre 20 y 30 años'); //Esta línea se ejecuta solo si se NO cumple la primera condición y SÍ se cumple la segunda
} else if (age >= 10) {
  console.log('Tienes entre 10 y 19 años'); //Esta línea se ejecuta solo si se NO cumplen la primeras condiciones y SÍ se cumple la última
} else {
  console.log('Eres un niño entre 0 y 9 años'); //Esta línea se ejecuta solo si se NO cumplen ninguna de las condiciones anteriores
}


//Operador ternario
const theme = 'hallowen';
const fontColor = theme === 'hallowen' ? '#ff5722' : '#000';