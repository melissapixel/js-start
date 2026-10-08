const button = document.querySelector('.button__img');
const img = document.querySelector('.img');

button.addEventListener('click', () => {
  if (img.style.display == 'none') {
    img.style.display = 'block';
  } else {
    img.style.display = 'none';
  }
});

console.log(img);
console.log(img.style.display);