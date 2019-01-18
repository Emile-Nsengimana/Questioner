let modal = document.getElementById('simpleModal');
let modalBtn = document.getElementById('query');
let cls = document.getElementById('cls');

modalBtn.addEventListener('click',openModal);

function openModal(){
	modal.style.display = 'block';
}
cls.addEventListener('click', () => {
	modal.style.display = 'none';
});