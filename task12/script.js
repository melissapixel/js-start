const img = document.querySelector('img');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  if (img.src.includes('apple')) {
    img.src = '../img/banana.jpeg';
  } else {
    img.src = '../img/apple.jpeg';
  }
});