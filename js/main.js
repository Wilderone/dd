'use strict:';

window.addEventListener('DOMContentLoaded', function () {
    let addAbil = document.querySelector('.add-abil');
    let delAbil = document.querySelector('.delete-abil');
    let overlayAbil = document.querySelector(".abilities-modal");
    let closeOverlayAbil = document.querySelector('.close');

    addAbil.addEventListener('click', function () {
        overlayAbil.classList.remove('hidden');
    });

    closeOverlayAbil.addEventListener('click', function () {
        closeOverlayAbil.parentElement.classList.add('hidden')
    })



});