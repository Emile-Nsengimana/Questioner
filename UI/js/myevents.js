let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementsByClassName('ev-btn').item;
let closeBtn = document.getElementById('closeBtn');

modalBtn.addEventListener('click',openModal);

function openModal(){
   modal.style.display = 'block';
}