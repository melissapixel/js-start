const container = document.querySelector('.slider');
const mainImg = document.querySelector('.main__img');
const containerDot = document.querySelector('.slider__dot');

const arrowRight = document.querySelector('.arrow--right');
const arrowLeft = document.querySelector('.arrow--left');


const imgSrc = ['../img/city.jpeg', '../img/city1.jpeg', '../img/city2.jpeg', '../img/city3.jpeg'];


arrowRight.addEventListener('click', () => {
  let currentSrc = mainImg.getAttribute('src');
  if (imgSrc.includes(currentSrc)) {
    let currentIndex = imgSrc.indexOf(currentSrc);
    mainImg.src = imgSrc[++currentIndex];
  }
});

arrowLeft.addEventListener('click', () => {
  let currentSrc = mainImg.getAttribute('src');
  if (imgSrc.includes(currentSrc)) {
    let currentIndex = imgSrc.indexOf(currentSrc);
    mainImg.src = imgSrc[--currentIndex];
  }
})

// create dotches
if (imgSrc) {
  const countDot = imgSrc.length;
  for (let i = 0; i < countDot; i++) {
    const svgEl = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svgEl.setAttribute("width", "12");
    svgEl.setAttribute("height", "12");
    svgEl.setAttribute("viewBox", "0 0 12 12");
    svgEl.setAttribute("class", "dot");

    const circleEl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circleEl.setAttribute("cx", "6");
    circleEl.setAttribute("cy", "6");
    circleEl.setAttribute("r", "5");
    circleEl.setAttribute("fill", "currentColor");

    svgEl.appendChild(circleEl);
    containerDot.appendChild(svgEl); 

    svgEl.addEventListener('click', () => {
      mainImg.src = imgSrc[i];
      console.log(mainImg)
    });
  }
}