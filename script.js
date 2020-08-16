"use strict"

const button = document.querySelector('.button-nav');
const nav = document.querySelector('.nav');
const body = document.querySelector('.body');

button.onclick = function()
{
    nav.classList.toggle('nav--open');
}

body.onclick = function()
{
    nav.classList.remove('nav--open');
}
