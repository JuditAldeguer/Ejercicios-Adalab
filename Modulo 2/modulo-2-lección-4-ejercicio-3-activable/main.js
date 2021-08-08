'use strict';

const activableSection = document.querySelector('.activable-section');

// Si contiene la clase hidden
if (activableSection.classList.contains('hidden')) {
  // Elimina la clase
  activableSection.classList.remove('hidden');
} else {
  // Si no, en caso contrario
  // Añade la clase hidden
  activableSection.classList.add('hidden');
}