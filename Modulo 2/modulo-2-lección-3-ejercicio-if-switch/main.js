'use strict';

//Opcion 1 - If else
const todayDate = 'Viernes';

if (todayDate === 'Lunes') {
  console.log('Hoy me tomo un café con Maricarmen');
} else if (todayDate === 'Martes') {
  console.log('Bajar al perro');
} else if (todayDate === 'Miércoles') {
  console.log('Vamos al cine a ver una peli');
} else if (todayDate === 'Jueves') {
  console.log('Juernesss');
} else if (todayDate === 'Viernes') {
  console.log('Cumpleaños de Paco');
} else if (todayDate === 'Sábado') {
  console.log('Comida con los suegros');
} else {
  console.log('Dormir hasta las 12');
}

//Opcion 2 - Switch
const todayDate = 'Viernes';

switch (todayDate) {
  case 'Lunes':
    console.log('Hoy me tomo un café con Maricarmen');
    break;
  case 'Martes':
    console.log('Bajar al perro');
    break;
  case 'Miércoles':
    console.log('Vamos al cine a ver una peli');
    break;
  case 'Jueves':
    console.log('Juernesss');
    break;
  case 'Viernes':
    console.log('Cumpleaños de Paco');
    break;
  case 'Sábado':
    console.log('Comida con los suegros');
    break;
  default:
    console.log('Dormir hasta las 12');
}