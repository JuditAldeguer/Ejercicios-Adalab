'use strict';

const ul = document.querySelector('.js-ul');
let tasks = [];

fetch('http://api.igarrido.es/tasks.json')
  .then((response) => response.json())
  .then((jsonData) => {
    tasks = jsonData;
    render();
  });

function render() {
  ul.innerHTML = '';
  for (let index = 0; index < tasks.length; index++) {
    const data = tasks[index];
    debugger;
    if (data.completed) {
      const html = `<li><input id="${index}" class="js_input" checked type="checkbox"/><label id="name-${index}" class="completed">${data.name}</label></li>`;
      ul.innerHTML += html;
    } else if (data.completed !== true) {
      const html = `<li><input id="${index}" class="js_input" type="checkbox"/><label id="name-${index}" class="">${data.name}</label></li>`;
      ul.innerHTML += html;
    }
  }

  listenerEv();
}

function listenerEv() {
  const allInput = document.querySelectorAll('.js_input');
  console.log(allInput); //array checkbox
  for (const eachInput of allInput) {
    eachInput.addEventListener('click', handleClickTask);
  }
}
function handleClickTask(ev) {
  const labelSister = ev.target.parentNode.querySelector('label');
  labelSister.classList.toggle('completed');
}
