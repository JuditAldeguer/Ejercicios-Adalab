'use strict';

// //Método push()
// const arr = [1, 52, 73];
// console.log(arr);
// let arr2 = arr.push(22);
// console.log(arr2);
// arr2 = arr.push(33, 45, 56, 67);
// console.log(arr2); // Loguea 7, la nueva longitud de arr
// console.log(arr); // Loguea 1,2,3,3,5,6,7

// //Método pop()
// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// console.log(plants);
// console.log(plants.pop()); // expected output: "tomato"
// console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]
// plants.pop();
// console.log(plants); // expected output: Array ["broccoli", "cauliflower", "cabbage"]

// //Método concat()
// const letters = ['a', 'b', 'c'];
// console.log(letters);
// const numbers = [1, 2, 3];
// const booleans = [true, false];
// const result = letters.concat(numbers, booleans);
// console.log(result); // result tendrá ['a', 'b', 'c', 1, 2, 3, true, false]

// //Método slice()
// const names = ['Rita', 'María', 'Lucía', 'Ana', 'Vanesa'];
// console.log(names);
// console.log(names.slice(0, 4)); // ["Rita', 'María', 'Lucía', 'Ana']
// console.log(names.slice(1, 3)); // ["María", "Lucía"]
// console.log(names.slice(1, -1)); //["María", "Lucía"]

// //Método splice()
// let months = [
//   'January',
//   'February',
//   'March',
//   'April',
//   'May',
//   'June',
//   'July',
//   'Agust',
// ];
// console.log(months); //(8) ["January", "February", "March", "April", "May", "June", "July", "Agust"]
// let springMonths = months.splice(2, 3);
// console.log(months); //(5) ["January", "February", "June", "July", "Agust"]
// console.log(springMonths); //(3) ["March", "April", "May"]
// springMonths = months.splice(2, 4, 'MARCH', 'APRIL', 'MAY', 'JUNE');
// console.log(months); // (6) ["January", "February", "MARCH", "APRIL", "MAY", "JUNE"]
// console.log(springMonths); //(3) ["June", "July", "Agust"]-----------------------no comprendo?

// //Método indexOf()
// const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// const indexOfApril = months.indexOf('April');
// console.log(indexOfApril); // 3 -- que es la posición de April
// const indexOfOctober = months.indexOf('October');
// console.log(indexOfOctober); // esto muestra -1 porque October no está dentro de months
// const groceries = ['Eggs', 'Milk'];
// console.log(groceries);// ['Eggs', 'Milk']
// const newItem = 'Beer';
// if (groceries.indexOf(newItem) === -1) {
//   groceries.push(newItem);
// }
// console.log(groceries); // ['Eggs', 'Milk', 'Beer'] porque indexOf ha devuelto -1
