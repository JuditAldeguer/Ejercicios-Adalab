'use strict';

// modificamos una variable de ámbito global
let secretLetter = 'y';
console.log(secretLetter); // devuelve "y"

function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(mySecretLetter()); // devuelve "x"
console.log(secretLetter); // devuelve "x" porq busca dentro del ámbito de la funcion