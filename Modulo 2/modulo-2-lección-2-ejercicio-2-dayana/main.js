'use strict';

const button2 = document.querySelector ('.button2');
button2.classList.add('disactivated')

console.log(button2); //para que la Consola nos diga el valor de la variable / constante




const welcomeParagraph = document.querySelector('.welcomeText'); //asigno variable
console.log('welcomeParagraph: ', welcomeParagraph);// Logueo el contenido de la constante welcomeParagraph en la consola y compruebo que tiene asignado el elemento de HTML que espero antes de cambiar su contenido
welcomeParagraph.innerHTML += ', Adalaber'; // modifico el texto de Html añadiendo Adalaber