"use strict";

// elemento de HTML
const button = document.querySelector(".alert");
const body = document.querySelector("body");
const text = "Mi primer click, ¡ole yo y la mujer que me parió!";
// handler
function textAppears() {
  return (body.innerHTML += text);
}
// listener sobre el elemento, con tipo de evento y handler
button.addEventListener("click", textAppears);
