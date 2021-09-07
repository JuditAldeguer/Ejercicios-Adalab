'use strict';

const var1 = ['Fire', 'Air', 'Water'];
const names = ['María', 'Lucía', 'Susana', 'Rocío', 'Inmaculada'];
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 7];
const times = [56, 9, 45, 28, 35];
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
// const longNames = names.filter((name) => name.length > 5);
// console.log(`Los nombres con más de 5 letras son ${longNames}`); // Susana Inmaculada

// //reduce()
// const result = scores.reduce((acc, number) => acc + number, 0); // acc es una funcion con parametro de la funcion "acumulador de resultados" que se llama acc y es =0 inicialmente pero va obteniendo la suma de los números en él acc=acc+number[i]. Mientras que number es un parámetro con el valor variable number=number[i].value.
// console.log(result);
// const result2 = scores.reduce((acc, number) => acc + number); //el valor del acomulador inicial 0, es opcional. Sino lo inidcamos, tomara el number[0] como valor. En este caso, no influye.
// console.log(result2);

// //ENCADENAR MÉTODOS
// console.log(names);
// const longNames = names
//   .filter((name) => name.length > 5)
//   .map((name) => name.toUpperCase());
// console.log(longNames);

// //find() findIndex()
// const longName = names.find((name) => name.length > 5);
// const index = names.findIndex((name) => name.length > 5);
// console.log(`${longName} se encuentra en la posición ${index}`); //Susana y 2

// //sort()
// names.sort();
// console.log(names); //["Inmaculada", "Lucía", "María", "Rocío", "Susana"]
// times.sort((a, b) => a - b); // ordena de menor a mayor
// console.log(times); //[9, 28, 35, 45, 56]
// times.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return +1;
//   } else return 0;
// }); //ordena de mayor a menor (si le pusieramos los signos al revés odenaria de menor a mayor)
// console.log(times); //[56, 45, 35, 28, 9]
// names.sort((a, b) => {
//   if (a > b) {
//     return -1;
//   }
//   if (a < b) {
//     return +1;
//   } else return 0;
// });
// console.log(names); //["Susana", "Rocío", "María", "Lucía", "Inmaculada"]

// //Recorriendo las propiedades de un objeto
// const book = {
//   title: 'Harry Potter and the Deathly Hallows',
//   ds_title: 'Harry Potter 7',
//   author: 'J. K. Rowling',
//   ds_author: 'Rowling',
// };
// const keys = Object.keys(book);
// console.log(keys); //['title', 'ds_title', 'author', 'ds_author']
