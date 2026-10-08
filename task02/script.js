// VARIABLES
const title = document.querySelector('.title');
const button = document.querySelector('.button__change');

button.addEventListener('click', () => {

  if (title.textContent == 'Hello') {
    title.textContent = 'Good Bye';
  } else {
    title.textContent = 'Hello';
  }
});