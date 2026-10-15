const container = document.querySelector('.container');
container.addEventListener('click', (event) => {

  const mainImg = document.querySelector('.img--big');
  const img = event.target.closest('img');

  if (img) {
    [mainImg.src, img.src] = [img.src, mainImg.src];
  }
})