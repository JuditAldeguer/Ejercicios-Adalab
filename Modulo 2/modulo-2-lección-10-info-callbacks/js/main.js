'use strict';

//XMLHttpRequest - callbacks
let request;

function showPicture() {
  const response = JSON.parse(request.responseText).result;
  document.querySelector('.js-result').innerHTML = response;
}

function sendRequest() {
  debugger;
  request = new XMLHttpRequest();
  request.open(
    'GET',
    'https://api.rand.fun/games/rockpaperscissorslizardspock'
  );
  request.addEventListener('load', showPicture);
  request.send();
}

document.querySelector('.js-emojiBtn').addEventListener('click', sendRequest);
window.addEventListener('load', function (event) {
  console.log("'Todos los recursos terminaron de cargar!");
});
