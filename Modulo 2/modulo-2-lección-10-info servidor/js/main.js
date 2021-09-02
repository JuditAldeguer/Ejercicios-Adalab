'use strict';
// const div = document.querySelector('.js_div');
// const div1 = document.querySelector('.js_div1');

// // Función anónima
// fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     div.innerHTML = data.result;
//   });

// //Funcion arrow
// fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
//   .then((response) => response.json())
//   .then((data) => (div1.innerHTML = data.result));

// // Función normal
// function getEmoji() {
//   fetch('https://api.rand.fun/games/rockpaperscissorslizardspock')
//     .then((response) => response.json())
//     .then((data) => {
//       document.querySelector('.js-result').innerHTML = data.result;
//     });
// }
// document.querySelector('.js-emoji').addEventListener('click', getEmoji);

// //Imagen
// function getDogImage() {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response) => response.json())
//     .then((data) => {
//       const img = document.querySelector('img');
//       img.src = data.message;
//       img.alt = 'Un perro';
//     });
// }
// const btn1 = document.querySelector('.js-dog');
// btn1.addEventListener('click', getDogImage);

// //Lista
//function getBreeds() {
//   fetch('https://dog.ceo/api/breeds/list')
//     .then((response) => response.json())
//     .then((data) => {
//       console.log('Breeds data response: ', data);
//       const ul = document.querySelector('ul');
//       const breeds = data.message;
//       let ulContent = '';
//       for (const breed of breeds) {
//         const breedContent = `<li>${breed}</li>`;
//         ulContent += breedContent;
//       }
//       ul.innerHTML = ulContent;
//     });
// }
// const btn2 = document.querySelector('.js-btn');
// btn2.addEventListener('click', getBreeds);

// //Petición anidada------------------------------------------------------------------------------
// function getBreedsImage() {
//   debugger;
//   fetch('https://dog.ceo/api/breeds/list')
//     .then((breedsResponse) => breedsResponse.json())
//     .then((breedsData) => {
//       const breeds = breedsData.message;
//       return fetch('https://dog.ceo/api/breed/' + breeds[3] + '/images/random');
//     })
//     .then((imageResponse) => imageResponse.json())
//     .then((imageData) => {
//       const img = document.querySelector('img');
//       img.src = imageData.message;
//       img.alt = 'Un perro de raza';
//     });
// }
// const btn = document.querySelector('.js-btn');
// btn.addEventListener('click', getBreedsImage);

// //Petición en paralelo--------------------------------------------------------------------------------------
// const createPromise = () =>
//   fetch('https://dog.ceo/api/breeds/image/random').then((response) =>
//     response.json()
//   );

// function getBreedImages() {
//   debugger;
//   const promises = [createPromise(), createPromise()];
//   Promise.all(promises).then((responses) => {
//     for (let i = 0; i < responses.length; i++) {
//       const img = document.querySelector('.dog' + (i + 1));
//       img.src = responses[i].message;
//     }
//   });
// }
// const btn = document.querySelector('.js-btn');
// btn.addEventListener('click', getBreedImages);

//Gestión de errores con promesas
fetch('https://dog.ceo/api/breeds/list')
  .then((response) => response.json())
  .then((data) => {
    console.log(`Breeds data response: ${dataa}`); // en vez de "data" está escrito "dataa" lo cual da error
    const ul = document.querySelector('ul');
    const breeds = data.message;
    let ulContent = '';

    for (const breed of breeds) {
      const breedContent = `<li>${breed}</li>`;
      ulContent += breedContent;
    }
    ul.innerHTML = ulContent;
  })
  .catch((error) => console.log(`Ha sucedido un error: ${error}`)); // muestra el error en consola
