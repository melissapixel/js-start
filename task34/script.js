const container = document.querySelector('.container');

const shopList = document.querySelector('.shop__list');
const cartList = document.querySelector('.cart__list');

let draggedItem = null;


// берем ссылки
shopList.addEventListener('dragstart', (event) => {
  const shopItem = event.target.closest('li');
  if (shopItem) {
    draggedItem = shopItem;
  }
})
cartList.addEventListener('dragstart', (event) => {
  const cartItem = event.target.closest('li');
  if (cartItem) {
    draggedItem = cartItem;
  }
})


// "боросок в корзину" (подготовка)
shopList.addEventListener('dragover', (e) => {
  e.preventDefault();
})
cartList.addEventListener('dragover', (e) => {
  e.preventDefault();
})


// office подбросили
shopList.addEventListener('drop', () => {
  if (draggedItem) {
    shopList.append(draggedItem);
    draggedItem = null;
  }
})
cartList.addEventListener('drop', () => {
  if (draggedItem) {
    cartList.append(draggedItem);
    draggedItem = null;
  }
})