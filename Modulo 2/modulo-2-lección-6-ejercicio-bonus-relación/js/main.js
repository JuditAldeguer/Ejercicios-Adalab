"use strict";

//Objeto 1
const adalaber = {
  name: "Rosa",
};
console.log(adalaber.name); // Rosa

//Objeto 2 se relaciona con objeto 1
const adalaber2 = adalaber;
console.log(adalaber2.name); // Rosa

// Cambiamos la propiedad `name` del Objeto 1
adalaber.name = "Rocío";
// Y cambia dicha propiedad de ambos Objetos a la vez
console.log(adalaber.name); //Rocío
console.log(adalaber2.name); //Rocío
