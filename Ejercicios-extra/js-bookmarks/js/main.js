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
const inputArray = document.querySelector('input');
const dataList = document.querySelector('.data__list');
const formBtnAccept = document.querySelector('.accept');

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

function newLineAdded(event) {
  debugger;
  event.preventDefault();
  dataList.innerHTML += htmlLine;
}
formBtnAccept.addEventListener('click', newLineAdded);

//Listener Pendientes
//si etiqueta está vacia --> display none - si etiqueta está llena --> ok
// Lección 2.3	ejercicio 1 (condicionales)
// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
// let userAvatar = 'http://www.fillmurray.com/300/300'; -> parte 1 del ejercicio
let userAvatar = '';
/*----------------------------------------------------------*
 *   Añadir la imagen userAvatar a la etiqueta de HTML img   *
 *----------------------------------------------------------*/
// crear constante que hace referencia a la imagen de avatar del HTML
const imagen = document.querySelector('.user__avatar');
// Cambiar el valor del atributo "src" del avatarImg al valor de userAvatar, que tiene la imagen de Bill Murray
// avatarImg.setAttribute("src", userAvatar); --> parte 1 del ejercicio
imagen.src = userAvatar;
/*----------------------------------------------------------*
 *            Mostrar una imagen de usuario SI o SI          *
 *----------------------------------------------------------*/
// Si tenemos el avatar del usuario se muestre este
// Si no tenemos datos del avatar del usuario, se muestre el avatar por defecto
imagen.setAttribute('src', userAvatar || DEFAULT_AVATAR);
// ejemplo
if (userAvatar === '') {
  imagen.src = DEFAULT_AVATAR;
} else {
  imagen.src = userAvatar;
}

// display seccion crear nueva linea
//crear linea
