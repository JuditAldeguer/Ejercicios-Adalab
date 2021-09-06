'use strict';

// //LocalStorage
// const tasks = [
//   { name: 'Recoger setas en el campo', completed: true },
//   { name: 'Comprar pilas', completed: true },
//   { name: 'Poner una lavadora de blancos', completed: true },
//   {
//     name: 'Aprender cómo funcionan los objetos de JavaScript',
//     completed: false,
//   },
// ];

// localStorage.setItem('tasks', JSON.stringify(tasks)); // transforma JS en JSON
// console.log(localStorage.getItem('tasks')); // string - versión JSON

// const savedTasks = JSON.parse(localStorage.getItem('tasks')); // transforma JSON en JS
// console.log(savedTasks); //array - versión JS

//Errores al servidor
fetch('https://api.github.com/repositories?since=abcds') //da error porque el parametro since es incorrecto, debe ser un número / fecha
  .then((response) => {
    debugger;
    if (!response.ok) {
      throw response;
    }
    return response.json();
  })
  .then((data) => console.log('success', data))
  .catch((err) => console.log('error', err));
