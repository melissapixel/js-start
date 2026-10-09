
const num = document.querySelector('.num');

const minus = document.querySelector('.button-minus');
const add = document.querySelector('.button-add');


let count = 1;
num.textContent = count;    // default value


minus.addEventListener('click', () => {
  if (count > 0) {
    count--;
    num.textContent = count;
    if (count === 0) {
      minus.disabled = true; // Выключаем кнопку, когда дошли до нуля
    }
  }
});

add.addEventListener('click', () => {
  num.textContent = ++count;
});