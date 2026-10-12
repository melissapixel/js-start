const list = document.querySelector('.container');
const cards = document.querySelectorAll('.block');

list.addEventListener('click', (event) => {
  
  const point = event.target.closest('.block');
  
  if (point) {
    removeActive(cards);

    let button = point.querySelector('button');
    button.classList.add('button--active');

    let text = point.querySelector('p');
    text.classList.remove('text--hidden');
  }
});


function removeActive (els) {
  els.forEach(el => {
    let button = el.querySelector('button');
    button.classList.remove('button--active');

    let text = el.querySelector('p');
    text.classList.add('text--hidden');
  });
}