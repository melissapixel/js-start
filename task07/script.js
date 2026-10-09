const blocks = document.querySelectorAll('.block');

blocks.forEach(block => {
  block.addEventListener('click', () => {
    const color = block.getAttribute('data-color');
    block.nextElementSibling.textContent = color;
  });
});