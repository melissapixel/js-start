const productList = document.querySelector('.shopping__list');
const button = document.querySelector('.card__button');

let totalSum = 0;
function doBuy(button) {
  const point = document.createElement("li");

  const card = button.closest('.card');
  const title = card.querySelector('.card__title').textContent;
  const priceText = card.querySelector('.card__price').textContent; // "1$"
  const price = parseInt(priceText); // 1

  totalSum += price;

  point.append(title);

  productList.append(point);
  document.querySelector('.shopping__total').textContent = `Total: ${totalSum}$`;


  // delete point
  point.addEventListener('click', (e) => {
    point.remove();
    totalSum -= price;
  });
}