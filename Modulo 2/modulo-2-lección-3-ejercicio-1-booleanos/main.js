'use strict';

// avatar por defecto
const DEFAULT_AVATAR = 'http://placehold.it/300x300';
// avatar que eligió el usuario al registrarse
const userAvatar = 'http://www.fillmurray.com/300/300';


//User HAS image:
let user__name = document.querySelector('.user__name');
let user = 'Bill'
user__name = user === 'Bill' // true

//User doesn't have image:


// The avatar will be userAvatar but if this ones false it will pick DEFAULT_AVATAR
let js_user_avatar = document.querySelector('.js_user_avatar');
const Avatar = userAvatar || DEFAULT_AVATAR;

js_user_avatar.innerHTML += `<img src="${Avatar}" alt="profile image" class="user__avatar js_user_avatar" />`;