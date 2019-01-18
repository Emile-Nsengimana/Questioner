/* eslint-disable no-undef */
const modal = document.getElementById('simpleModal');
const modalBtn = document.getElementById('query');
const cls = document.getElementById('cls');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});


cls.addEventListener('click', () => {
  modal.style.display = 'none';
});
