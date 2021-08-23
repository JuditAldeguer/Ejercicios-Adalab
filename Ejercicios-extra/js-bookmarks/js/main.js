'use strict';

//Menu desplegable
const hamburgerMenu = document.querySelector('.js_header__menu');
const menuDropDown = document.querySelector('.js_menuDropDown');
function handleClickMenu(event) {
  event.preventDefault();
  if (menuDropDown.classList.contains('collapsed')) {
    menuDropDown.classList.remove('collapsed');
  } else {
    menuDropDown.classList.add('collapsed');
  }
}
hamburgerMenu.addEventListener('click', handleClickMenu);

//Cambiar de vista targetas / tabla
const boardData = document.querySelector('.js_boardData');
const buttonListView = document.querySelector('.js_list_view');
const buttonTableView = document.querySelector('.js_table_view');

function handleClicView(event) {
  event.preventDefault();
  if (event.currentTarget.value === 'list') {
    boardData.classList.remove('tableview');
    boardData.classList.add('listview');
  } else {
    boardData.classList.remove('listview');
    boardData.classList.add('tableview');
  }
}
buttonListView.addEventListener('click', handleClicView);
buttonTableView.addEventListener('click', handleClicView);

//Añadir sección para nueva linea
const formNewLineBtn = document.querySelector('.js_btnLine');
const formNewLine = document.querySelector('.data-actions__add');
function handleClickBtn(event) {
  event.preventDefault();
  formNewLine.classList.toggle('hidden');
  formNewLineBtn.classList.toggle('hidden');
}
formNewLineBtn.addEventListener('click', handleClickBtn);

//Funcion nueva linea en tabla

let htmlLine = `<li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        <a href="fffff" target="_blank" rel="noopener noreferrer">
          fffff
        </a>
      </p>
      <p class="item__seen">
        <input type="checkbox" fffff name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">fffff</p>
      <ul class="item__tags">`;
//cambiar fffff por ${}

//Listener Pendientes
//si etiqueta está vacia --> display none - si etiqueta está llena --> ok

// display seccion crear nueva linea
//crear linea
