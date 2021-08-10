"use strict";

// elemento de HTML
const buttonElement = document.querySelector(".button");

// handler
function handleButtonClick(event) {
  console.log(event.currentTarget);
}

// listener sobre el elemento, con tipo de evento y handler
buttonElement.addEventListener("click", handleButtonClick);
