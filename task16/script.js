const list = document.querySelector('ul');

list.addEventListener('click', (event) => {
  const point = event.target.closest('li');
  if (point) {
    list.append(point);
  }
})