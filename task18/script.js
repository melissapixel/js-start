const buttons = document.querySelector('.buttons');
const showBtn = document.querySelector('.btn-show');
const hiddenBtn = document.querySelector('.btn-hidden');

const text = document.querySelector('p');


buttons.addEventListener('click', (event) => {

  if (event.target.closest('.btn-show')) {
    text.classList.remove('block-hidden');
    showBtn.disabled = true;
    hiddenBtn.disabled = false;
  }

  if (event.target.closest('.btn-hidden')) {
    showBtn.disabled = false;
    hiddenBtn.disabled = true;
    text.classList.add('block-hidden');
  }
})