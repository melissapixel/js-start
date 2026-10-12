const list = document.querySelector('.fruits-list');
const result = document.querySelector('.result');

list.addEventListener('click', (event) => {
  const button = event.target.closest('.fruit-btn');

  if (button) {
    const value = button.getAttribute('data-name');
    result.textContent = `Name of fruit: ${value}.`;
  }
});