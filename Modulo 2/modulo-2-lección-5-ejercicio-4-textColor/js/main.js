"use strict";

// elemento de HTML
const div = document.querySelector(".js_div");

// handler
function colorText() {
  if (window.scrollY >= 250) {
    div.classList.remove("blue");
    div.classList.add("green");
  } else {
    div.classList.remove("green");
    div.classList.add("blue");
  }
}

// listener sobre el elemento, con tipo de evento y handler
window.addEventListener("scroll", colorText);
