'use strict';


const menuDropDown = document.querySelector ('.js_menuDropDown');

menuDropDown.classList.remove('collapsed'); /*para q se muestre el menú desplegable*/

//Cambiar de vista targetas / tabla
const boardData = document.querySelector ('.js_boardData');

if(boardData.classList.contains('tableview')) {
    boardData.classList.remove('tableview')
    boardData.classList.add('listview')
    }
else {
    boardData.classList.remove('listview')
    boardData.classList.add('tableview')
   
}

//si etiqueta está vacia --> display none