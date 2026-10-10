const listCards = document.querySelector('.cards');

listCards.addEventListener('click', (event) => {
  const card = event.target.closest('.card');
  if (card) {
    const price = card.getAttribute('data-price');
    const outPrice = card.querySelector('.card__price');
    outPrice.textContent = `Price is ${price}`;
  }
});