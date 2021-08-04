'use strict';

let homeAdress = 'BCN'
homeAdress = 'CST'

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement = document.querySelector('.title');
// Cambiamos su contenido con innerHTML
titleElement.innerHTML = 'Wellcome';
// Cambiamos el contenido del elemento, indicando que sea igual al actual, más una nueva palabra añadida
titleElement.innerHTML = titleElement.innerHTML + ' adalaber';


const pSelection = document.querySelector ('.seleccion')
const nameWinner = document.querySelector ('li')
pSelection.innerHTML = pSelection.innerHTML + nameWinner.innerHTML