'use strict';
const item1 = document.querySelector('.item--1');
const ul = document.querySelector('.items');
const nameInput = document.querySelector('#firstname');
const label = document.querySelector('.firstname-label');
const myLink = document.querySelector('a');
//console.log(item1); // Devuelve una representación del elemento como HTML
//console.dir(item1); // Devuelve una representación del elemento como objeto

// //ParentElement
// const mother = item1.parentElement;
// console.log(
//   `La madre de nuestro elemento es un <${mother.nodeName.toLowerCase()}> y tiene la clase .${
//     mother.className
//   }`
// ); // Devuelve "La madre de nuestro elemento es un <ul> y tiene la clase .items"

// createElement() crea elemento
const newItem = document.createElement('li'); // Creamos un elemento nuevo, un <li>
//console.log(newItem); // Devuelve "<li></li>"

//createTextNode crea contenido
const newContent = document.createTextNode('Item nuevo'); // Ahora creamos algo de contenido
newItem.appendChild(newContent); // Y se lo añadimos a nuestro <li>
console.log(newItem); // Devuelve "<li>Item nuevo</li>"

//appendChild() lo añade a DOM
ul.appendChild(newItem);

//remove() lo elimina de DOM
//ul.remove();

//removeChild() elimina el hijo
const item2 = ul.querySelector('.item--2');
ul.removeChild(item2); // Elimina el elemento con clase .item--2 que es descendiente de .items

// Obtener info sobre los atributos de un elemento y modificarlos
console.log(nameInput.value); // Pintará el valor actual, 'Ada'
nameInput.value = 'Joan'; // Rellenará el input con el valor 'Joan'
nameInput.style.backgroundColor = 'red'; //Para poner un estilo, lo asignaremos usando la siguiente notación. style.propiedadCSS = 'valor' De esta forma no modificaremos los estilos previamente asignados. Si la propiedad CSS tiene un guión (background-color) lo convertiremos a camelcase asi backgroundColor
nameInput.style =
  'color: blue; text-decoration: line-through; background-color:yellow;'; //Si queremos poner varios estilos a la vez o sobreescribir los anteriores, usaremos esta notación
console.log(label.getAttribute('for')); // devolverá firstname
label.setAttribute('for', 'firstNAME');
console.log(label.getAttribute('for')); // devolverá firstNAME

//Atributos data-*
console.log(myLink.dataset['id']); // o con myLink.dataset.id //Para acceder a los datos desde JavaScript usamos los métodos getAttribute y setAttribute o mediante dataset.
