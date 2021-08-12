"use strict";

const options = ["coche", "viaje", "crucero", "llavero"];
const lotteryNumberInput = document.querySelector("#lotteryNumber");

function handleLotteryNumberChange(event) {
  debugger;
  const input = event.currentTarget;
  const selectedNumber = parseInt(input.value);
  const ind = selectedNumber - 1; // El índice empieza en 0
  const result = options[ind]; // Utilizamos una constante que contiene un número como valor
  console.log("Premio: ", result);
}

lotteryNumberInput.addEventListener("keyup", handleLotteryNumberChange);

//info tipo Array - si o no
const list = [1, 2, 3];
console.log(Array.isArray(list)); // true
const name = "Ada";
console.log(Array.isArray(name)); // false

//-------------------------------//

//Bucles1
for (let i = 0; i < 20; i++) {
  console.log("Voy por la vuelta " + i);
}

//Bucles2
const scores = [4, 2, 7, 8, 6, 7, 9, 1, 2, 6, 2.5];
let acc = 0; // Creamos variable fuera del bucle para que no se sobrescriba en cada iteración. En esta variable iremos sumando cada una de las puntuaciones
for (let i = 0; i < scores.length; i++) {
  acc += scores[i];
  // La i empieza en 0 porque el índice de los arrays empieza en 0 también
  // Sumamos a `acc` el valor actual del array en cada iteración del bucle
  // acc += arr[i] es igual a acc = acc + arr[i]
}
console.log("La puntuación final es " + acc);

//Bucles3
const bestAnimatedFeature2016Nominees = [
  "Zootopia",
  "Kubo and the Two Strings",
  "La tortue rouge",
  "Ma vie de Courgette",
  "Moana",
];
// sintaxis bucle for
for (let i = 0; i < bestAnimatedFeature2016Nominees.length; i++) {
  console.log(
    `"${bestAnimatedFeature2016Nominees[0]}" was nominated to 89th Academy Awards`
  );
}
// sintaxis bucle for...of
for (const movie of bestAnimatedFeature2016Nominees) {
  debugger;
  console.log(`"${movie}" HEYYYY was nominated to 89th Academy Awards`);
}

//Arrays y objetos mezclados
// Lista de contactos (array con objetos dentro)
const contacts = [
  {
    name: "Raquel",
    phone: "915552323",
    email: "raquel@inbox.com",
  },
  {
    name: "Pedro",
    phone: "915554564",
    email: "pedro@inbox.com",
  },
  {
    name: "Laura",
    phone: "915555656",
    email: "raquel@inbox.com",
  },
];
debugger;
console.log(contacts[0].name); // Muestra el nombre del primer contacto (Raquel)
contacts[2].email = "laura@inbox.com"; // Cambia el email del tercer contacto
console.log(contacts[2].email); // Muestra el email del tercer contacto ('laura@inbox.com')

// Tarea con participantes (objeto con array dentro)
const task = {
  name: "Crear un repositorio",
  participants: ["Raquel", "Pedro", "Laura"],
};
console.log(task.participants[0]); // Muestra el nombre del primer participante (Raquel)
task.participants.push("Diego"); // Añade un nuevo participante a la lista
task.participants[0] = "Andrea"; // Cambia el nombre del primer participante
console.log(task.participants); // Muestra Andrea, Pedro, Laura, Diego

//querySelectorAll
const paragraphs = document.querySelectorAll(".js_p"); // Guardamos una lista de todos los parrafos de la página
paragraphs[0].innerHTML = "Soy el primero"; // Modificamos el primer párrafo
console.log(paragraphs.length); // Muestra el número de parráfos que hay en nuestra web
for (let i = 0; i < paragraphs.length; i++) {
  paragraphs[i].classList.add("highlight");
  // Iteramos sobre todos los párrafos para asignarles a todos una clase
}

//for...in
const userData = {
  email: "info@email.com",
  password: "mi-contraseña-super-secreta",
};
for (let item in userData) {
  debugger;
  const inputElement = document.querySelector(`.js-${item}`);
  inputElement.value = userData[item];
}
