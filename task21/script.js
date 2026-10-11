const list = document.querySelector('.cards');
const buttons = document.querySelectorAll('button');

list.addEventListener('click', (event) => {
  const card = event.target.closest('.card');

  if (card) {
    const name = card.getAttribute('data-name');
    const text = card.querySelector('p');
    text.textContent = name;

    removeActive(buttons);

    const button = card.querySelector('button');
    button.classList.add('button-active');
  }
});

function removeActive (els) {
  els.forEach(el => {
    el.classList.remove('button-active');
  });
}