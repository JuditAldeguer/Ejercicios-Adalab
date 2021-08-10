"use strict";

// elemento de HTML
const background = document.querySelector(".main");

// handler
function changeColor() {
  if (background.classList.contains("purple")) {
    background.classList.remove("purple");
    background.classList.add("red");
  } else if (background.classList.contains("red")) {
    background.classList.remove("red");
    background.classList.add("purple");
  }
}

// listener sobre el elemento, con tipo de evento y handler
window.addEventListener("keydown", changeColor);
