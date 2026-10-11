const list = document.querySelector('ul');
const points = document.querySelectorAll('li');
const input = document.querySelector('input');

input.addEventListener('input', () => {
  points.forEach((point) => {
    const text = input.value;
    const clearPoint = point.textContent;

    if (clearPoint.includes(text)) {
      point.style.display = 'block';
    }
    else {
      point.style.display = 'none';
    }
  });
});