'use strict';

//expressions genera un valor
// myVar;
// 3 + x;
// true ? 'Access allowed' : 'You may not pass';
// '' || 'OneEyedMan';

//statements genera una acción
let avocados;
const avocadoPrice = 1.5;
const money = 5;

if (money >= avocadoPrice) {
  avocados = money / avocadoPrice;
} else {
  avocados = 0;
}

console.log(avocados);