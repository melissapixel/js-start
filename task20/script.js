const buyBtn = document.querySelector('button');
const result = document.querySelector('p');

let count = 1;
const limit = 10;
result.textContent = count;

buyBtn.addEventListener('click', () => {
  count++;
  result.textContent = count;
  
  if (count >= limit) {
    buyBtn.textContent = 'It is Limit';
    buyBtn.disabled = true;
  }
});