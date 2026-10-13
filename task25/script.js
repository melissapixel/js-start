const container = document.querySelector('.content');

container.addEventListener('click', (event) => {

  const task1 = event.target.closest('.task1');
  if (task1) {
    setTimeout(() => {
      const out = task1.querySelector('p');
      out.textContent = 'Прошло 2 секунды';
    }, 2000);
  }

  const task2 = event.target.closest('.task2');
  if (task2) {
    const button = task2.querySelector('button');
    button.textContent = 'Wait';

    setTimeout(() => {
      button.textContent = 'Click me';
    }, 2000);
  }

  const task4 = event.target.closest('.task4');
  if (task4) {
    clearInterval(Intervale4);
  }

  const task6 = event.target.closest('.task6');
  if (task6) {
    const button = task6.querySelector('button');
    const p = task6.querySelector('p');

    p.textContent = 'It is save';
    setTimeout(() => {
      p.textContent = '';
    }, 3000);
  }

});


let countStart = 0;
let numStart = 0;
let count1Value = 5;
const count = document.querySelector('.count');
const num = document.querySelector('.num');
const count1 = document.querySelector('.count1');
const box = document.querySelector('.box');

const intervale = setInterval(() => {
  ++countStart;
  count.textContent = countStart;
}, 1000);

const Intervale4 = setInterval(() => {
  ++numStart;
  num.textContent = numStart;
}, 1000);

const Intervale5 = setInterval(() => {
  count1.textContent = --count1Value;
  if (count1Value == 0) {
    clearInterval(Intervale5);
  }
}, 1000);

setInterval(() => {
  if (box.style.backgroundColor === 'royalblue') {
    box.style.backgroundColor = 'rgb(211, 143, 143)';
  } else {
    box.style.backgroundColor = 'royalblue';
  }
}, 1000);