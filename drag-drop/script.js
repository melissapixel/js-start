const box = document.querySelector('.box');

// начало перетаскивания
box.addEventListener('dragstart', () => {
  console.log('start');
});
// конец перетаскивания
box.addEventListener('dragend', () => {
  console.log('End');
});


const boxCart = document.querySelector('.box-cart');

// элемент входит
boxCart.addEventListener('dragenter', () => {
  boxCart.style.backgroundColor = '#868686';
});
// элемент выходит
boxCart.addEventListener('dragleave', () => {
  boxCart.style.backgroundColor = '#d6d6d6';
});
// "боросок в корзину" (подготовка)
boxCart.addEventListener('dragover', (e) => {
  e.preventDefault();
})
// office подбросили
boxCart.addEventListener('drop', () => {
  const boxNew = box.cloneNode(true);
  boxCart.append(boxNew);
})