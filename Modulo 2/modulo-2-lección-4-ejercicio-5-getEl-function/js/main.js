'use strict';

// Declarar Funcion1
function getEl(a) {
    const resultInfo = document.querySelector(a);
    return resultInfo;
}

// Declarar Funcion2
function inEl(a) {
    const resultInfo = document.querySelector(a);
    return resultInfo.innerHTML;
}

// Llamar funcion1
debugger;
let spanText1 = getEl('.js_span2_1');
let spanText2= getEl('.ml-1');

console.log(spanText1);
console.log(spanText2);

// Llamar funcion2
spanText1 = inEl('.js_span2_1');
spanText2= inEl('.ml-1');
console.log(`Hola aqui añado texto1: ${spanText1} y texto2: ${spanText2} .`);