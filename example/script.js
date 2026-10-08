/* 
  O(1) lookup по хешу
  Fast
*/
const block1 = document.getElementById('div');            // Use: root container, modal window, form
console.log(block1);

const block2 = document.querySelector('.div');    // processing all classes
console.log(block2);

const allParagraphs = document.getElementsByTagName('p'); // processing all tags
console.log(allParagraphs);

console.log(block1.lastElementChild);



const button = document.querySelector('.button');
button.addEventListener('click', buttonListener, { once: true });

let count = 0;
block1.addEventListener('mousemove', () => {
  count++;
  console.log(`click ${count}`);
})


document.addEventListener('keydown', (e) => {
  console.log(e.key);
});


function buttonListener(event) {
  console.log('Click');
}



const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');

p1.textContent = "LoremNo";   // fast, safe
p2.innerHTML = "<strong>I</strong>"; // dangerous


const addBlock = document.createElement('div');
addBlock.classname = 'add_block';
addBlock.textContent = 'This is addBlock';
document.body.appendChild(addBlock);


const deleteEl = document.querySelector('.delete');
deleteEl.remove();


console.log(block1.hasAttribute('data-count'));

block2.classList.add('exapleClass1', 'exapleClass2');


const box = document.querySelector('.box');
box.style.width = '100px';
box.style.height = '100px';
box.style.background = 'red';

const menu = document.querySelector('.menu');
const menuItems = document.querySelector('.menu__items');
menu.addEventListener('click', openMenu);
function openMenu(event) {
  menuItems.style.display = 'block';
}