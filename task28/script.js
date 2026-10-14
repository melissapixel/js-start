const content = document.querySelector('.container');
const task1Text = document.querySelector('.task1__num');
count = localStorage.getItem('count') || 0;
task1Text.textContent = count;

content.addEventListener('click', (event) =>{

  const task1 = event.target.closest('.task1');
  if (task1) {
    const addButton = event.target.closest('.button__add');
    const minusButton = event.target.closest('.button__minus');
    
    if (addButton) {
      ++count;
      task1Text.textContent = count;
      localStorage.setItem('count', count);
    }

    if (minusButton) {
      --count;
      task1Text.textContent = count;
      localStorage.setItem('count', count);
    }
  }
})


const task2 = document.querySelector('.task2');
task2.querySelector('button').addEventListener('click', () => {
  const inputElement = task2.querySelector('input');
  if (inputElement && inputElement.value.trim()) {
    localStorage.setItem('name', inputElement.value); 
  }
});
if (localStorage.getItem('name') !== null) {
  task2.querySelector('.name').textContent = `Hello, ${localStorage.getItem('name')}`;
}

const task3 = document.querySelector('.task3');
let theme = localStorage.getItem('theme') || 'white';
document.documentElement.setAttribute('data-theme', theme);
task3.querySelector('button').addEventListener('click', () => {
  if (theme === 'white') {
    theme = 'dark';
  } 
  else if (theme === 'dark') {
    theme = 'white'; 
  }
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme); 
})


const task4 = document.querySelector('.task4');
if (localStorage.getItem('subscribe') === true) {
  task4.querySelector('input').checked;
}
task4.querySelector('input').addEventListener('input', () => {
  localStorage.setItem('subscribe', task4.querySelector('input').checked);
})


const task5 = document.querySelector('.task5');
task5.querySelector('input').addEventListener('input', () => {
  let text = task5.querySelector('input').value;
  let textLength = text.length;
  
  task5.querySelector('p').textContent = textLength;

  localStorage.setItem('text', text);
  localStorage.setItem('countChar', textLength);
});
if (localStorage.getItem('text') && localStorage.getItem('countChar')) {
  task5.querySelector('input').textarea = localStorage.getItem('text');
  task5.querySelector('p').textContent = localStorage.getItem('countChar');
}