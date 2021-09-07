'use strict';

const var1 = ['Fire', 'Air', 'Water'];
// //.join() junta elementos en string
// console.log(var1.join()); // expected output: "Fire,Air,Water" - por defecto separa elementos con ,
// console.log(var1.join('')); // expected output: "FireAirWater"
// console.log(var1.join('-')); // expected output: "Fire-Air-Water"
// //push() añade elemento al array
// var1.push('Earth');
// console.log(var1);
// //map() crea nuevas propiedades al array
// const capitalVar1 = var1.map((var1) => var1.toUpperCase());
// console.log(capitalVar1);

//filter() filtra
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const longNames = names.filter((name) => name.length > 5);
console.log(`Los nombres con más de 5 letras son ${longNames}`); // Susana Inmaculada
