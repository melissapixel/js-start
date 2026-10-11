const checkbox = document.querySelector('.checkbox');
const result = document.querySelector('.result');

function giveTotalPoints () {
  let countPoints = document.querySelectorAll('input').length;
  let count = document.querySelector('.count');
  count.textContent = countPoints;
}
giveTotalPoints();

checkbox.addEventListener('change', (event) => {
  let count = document.querySelectorAll('input:checked').length;
  result.textContent = count;
});

