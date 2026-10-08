const button = document.querySelector('button');
const list = document.querySelector('ul');

let count = 0;
button.addEventListener('click', () => {
  const point = document.createElement('li');
  point.textContent = `El is ${++count}`;
  list.append(point);
});