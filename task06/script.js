const input = document.querySelector('input');
const button = document.querySelector('.button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
  let text = input.value;
  
  const point = document.createElement('li');
  point.textContent = text;
  list.append(point);

  input.value = '';
});