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

// //filter() filtra
// const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
// const longNames = names.filter((name) => name.length > 5);
// console.log(`Los nombres con más de 5 letras son ${longNames}`); // Susana Inmaculada

//reduce()
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
const result = scores.reduce((acc, number) => acc + number, 0); // acc es una funcion con parametro de la funcion "acumulador de resultados" que se llama acc y es =0 inicialmente pero va obteniendo la suma de los números en él acc=acc+number[i]. Mientras que number es un parámetro con el valor variable number=number[i].value.
console.log(result);
const result2 = scores.reduce((acc, number) => acc + number); //el valor del acomulador inicial 0, es opcional. Sino lo inidcamos, tomara el number[0] como valor. En este caso, no influye.
console.log(result2);
