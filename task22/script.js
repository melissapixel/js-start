const cards = document.querySelector('.cards');

cards.addEventListener('click', (event) => {
  const card = event.target.closest('.card');
  const cardsList = document.querySelectorAll('.card');

  if (card) {
    blocksHidden(cardsList);
    const text = card.querySelector('.card__desc');
    text.classList.toggle('block--hidden');
  }
})

function blocksHidden (els) {
  els.forEach(el => {
    const text = el.querySelector('.card__desc');
    text.classList.add('block--hidden');
  });
}