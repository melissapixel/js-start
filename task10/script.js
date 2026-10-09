const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');

button.addEventListener('click', () => {
  if (!input.value.trim()) return;
  let text = input.value;
  let point = document.createElement('li');
  point.textContent = text;

  list.append(point);
  input.value = '';
});