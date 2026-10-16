const buttons = document.querySelector('.buttons');
let namesArray = ["Daria", "Pavel", "Gosha", "Michail", "Anna", "Masha"];
const namesBlock = document.querySelector('.names');

buttons.addEventListener('click', (event) => {

  const btnAlphabetic = event.target.closest('.alphabetic');
  if (btnAlphabetic) {
    namesBlock.textContent = '';
    createArray(namesArray.sort(), namesBlock);
  }

  const btnNonAlphabetic = event.target.closest('.non-alphabetic');
  if (btnNonAlphabetic) {
    namesBlock.textContent = '';
    createArray(namesArray.reverse(), namesBlock);
  }
})


function createArray (array, block) {
  array.forEach(el => {
    let p = document.createElement('p');
    p.textContent = el;
    block.append(p);
  });
}
createArray(namesArray, namesBlock);
