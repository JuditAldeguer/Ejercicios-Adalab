"use strict";

// elemento de HTML
const strawberry = document.querySelector(".fruit-strawberry");
const banana = document.querySelector(".fruit-banana");
const kiwi = document.querySelector(".fruit-kiwi");

// handler
function handleFruitClick(event) {
  // Asignamos a una constante el elemento sobre el que pusimos el `listener` para trabajar cómodamente con él
  const selectedFruit = event.currentTarget;
  console.log(event.currentTarget); //no hace nada----------------------
  selectedFruit.classList.toggle("fruit--selected");
}

// listener sobre el elemento, con tipo de evento y handler
debugger;
strawberry.addEventListener("click", handleFruitClick);
banana.addEventListener("click", handleFruitClick);
kiwi.addEventListener("click", handleFruitClick);
