'use strict';

/*              Sección de elementos que usamos en el HTML             */
/*  -----------------------------------------------------------------  */
const hamburgerMenu = document.querySelector('.js_header__menu');
const menuDropDown = document.querySelector('.js_menuDropDown');
const boardData = document.querySelector('.js_boardData');
const buttonListView = document.querySelector('.js_list_view');
const buttonTableView = document.querySelector('.js_table_view');
const formNewLineBtn = document.querySelector('.js_btnLine');
const formNewLine = document.querySelector('.data-actions__add');
const dataList = document.querySelector('.data__list');
const formBtnAccept = document.querySelector('.accept');
const formBtnCancel = document.querySelector('.cancel');
const inputArray = document.querySelectorAll('.data-actions__input');
const inputArrayText = inputArray.value;

//Menu desplegable
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
function handleClicView(event) {
  event.preventDefault();
  if (event.currentTarget.value === 'list') {
    boardData.classList.remove('tableview');
    boardData.classList.add('listview');
    buttonTableView.classList.remove('selected');
    buttonListView.classList.add('selected');
  } else {
    boardData.classList.remove('listview');
    boardData.classList.add('tableview');
    buttonTableView.classList.add('selected');
    buttonListView.classList.remove('selected');
  }
}
buttonListView.addEventListener('click', handleClicView);
buttonTableView.addEventListener('click', handleClicView);

//Añadir sección para nueva linea en table / nueva tarjeta
function handleClickBtn(event) {
  event.preventDefault();
  formNewLine.classList.toggle('hidden');
  formNewLineBtn.classList.toggle('hidden');
}
formNewLineBtn.addEventListener('click', handleClickBtn);
//Cerrar sección con Cancelar
formBtnCancel.addEventListener('click', handleClickBtn);

//Funcion nueva linea en tabla
const bmkData_1 = {};
bmkData_1.url = 'https://adalab.es/';
bmkData_1.desc = 'Home de Adalab';
bmkData_1.seen = false;
bmkData_1.tags_1 = '<li class="item__tag">HTML</li>';
bmkData_1.tags_2 = '<li class="item__tag">CSS</li>';

let htmlLine = `
  <li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        <a href="${bmkData_1.url}" target="_blank" rel="noopener noreferrer">
        ${bmkData_1.url}
        </a>
      </p>
      <p class="item__seen">
        <input type="checkbox" ${bmkData_1.seen} name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">${bmkData_1.desc}</p>
      <ul class="item__tags">
      ${bmkData_1.tags_1} ${bmkData_1.tags_2}
      </ul>
    </article>
  </li>
  `;

function checking() {
  debugger;
  let interactionCheck = '';
  if (inputArray[1].checked === true) {
    interactionCheck = 'checked';
  } else if (inputArray[1].checked === false) {
    interactionCheck = '';
  }
  return interactionCheck;
}
function htmlLineInput() {
  debugger;
  let htmlLineInput = `
  <li class="data__listitem">
    <article class="data__item">
      <p class="item__url">
        <a href="${
          inputArray[0].value
        }" target="_blank" rel="noopener noreferrer">
        ${inputArray[0].value}
        </a>
      </p>
      <p class="item__seen">
        <input type="checkbox" ${checking()} name="item_imp_2" id="item_imp_2">
      </p>
      <p class="item__desc">${inputArray[2].value}</p>
      <ul class="item__tags item__tag">
      ${inputArray[3].value}
      </ul>
    </article>
  </li>
  `;
  dataList.innerHTML += htmlLineInput;
}

function newLineAdded(event) {
  event.preventDefault();
  dataList.innerHTML += htmlLine;
  console.log(inputArray);
  htmlLineInput();
}
formBtnAccept.addEventListener('click', newLineAdded);

//Listener Pendientes
//si etiqueta está vacia --> display none - si etiqueta está llena --> ok
// Lección 2.3	ejercicio 1 (condicionales)
// avatar por defecto
