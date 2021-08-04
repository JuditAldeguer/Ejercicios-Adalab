'use strict';

const divContent = document.querySelector ('.div');

const h1In = '<h1 class="title">Lorem ipsum</h1>';
const imgIn = '<img src="http://via.placeholder.com/350x150" alt="img" />';
const pIn =  '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>';
divContent.innerHTML = h1In + imgIn + pIn;