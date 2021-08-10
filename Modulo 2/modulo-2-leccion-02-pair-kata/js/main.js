'use strict';

// Objetivo:
//   Debéis poner el texto que está en el span de la derecha del primer div
// dentro del span del segundo div, transformando el texto en mayúsculas y
// usando unicamente JavaScript (podéis poner clases en las etiquetas del HTML).

// Pista: buscad en MDN los métodos de strings.
//
// Pasos:
//
// 1. Traer el <span> con el texto original a una constante.
// 2. Traer el <span> donde se escribirá el texto modificado.
// 3. Obtener el texto que contiene.
// 4. Transformar el texto a mayúsculas.
// 5. Poner el texto transformado en el <span> destino.

const containerOrigin = document.querySelector('.ml-1');
containerOrigin.classList.add('.js_origin'); //añadimos clase
console.log(containerOrigin); //consultamos estado - se debe borrar al transformarse en codigo producto

const containerTarget = document.querySelector('.js_target');
console.log(containerTarget); //consultamos estado - se debe borrar al transformarse en codigo producto



containerTarget.innerHTML = containerOrigin.innerHTML.toLocaleUpperCase(); // introducimos en variable containerTarget el texto de la variable conatinerOrigin transformado a mayúsculas


