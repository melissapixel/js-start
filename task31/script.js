const cards = document.querySelector('.cards');
const shoppingCart = document.querySelector('.shopping-cart');
let arrPrice = [];

cards.addEventListener('click', (event) => {

  const card = event.target.closest('.card');
  const button = event.target.closest('button');
  if (button) {
    const price = card.getAttribute('data-price');
    arrPrice.push(price);
    
    shoppingCart.querySelector('p').textContent = getTotalPrice(arrPrice);
  }
})


function getTotalPrice (array) {
  let total = 0;
  array.forEach(element => {
    total += Number(element);
  });
  return total;
}
