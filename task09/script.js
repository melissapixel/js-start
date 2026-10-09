const list = document.querySelector('ul');
const points = document.querySelectorAll('li');

points.forEach((point) => {
  point.addEventListener('click', () => {
    point.remove();
  });
});