const taskList = document.querySelector('.task__list');

const tasks = [
  "Buy groceries",
  "Call mom",
  "Read a book",
  "Go for a run",
  "Clean the kitchen"
];


let dragItem = null;
let dropItem = null;

// create list of li
tasks.forEach(el => {
  const li = document.createElement('li');
  li.draggable="true";

  const p = document.createElement('p');
  p.textContent = el;

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const btndelete = document.createElement('button');
  btndelete.textContent = 'Delete';

  taskList.appendChild(li);
  li.appendChild(p);
  li.appendChild(checkbox);
  li.appendChild(btndelete);

  checkbox.addEventListener('click', () => {
    if (checkbox.checked) {
      p.style.textDecoration = 'line-through'; 
    }
    else {
      p.style.textDecoration = ''; 
    }
  })

  btndelete.addEventListener('click', () => {
    li.remove();
  })

  li.addEventListener('dragstart', (e) => {
    dragItem = e.target;
  });

  li.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  li.addEventListener('drop', (e) => {
    dropItem = e.target;

    const text1 = dragItem;
    const text2 = dropItem.parentElement;

    console.log(text1);
    console.log(text2);

    const index1 = tasks.indexOf(text1);
    const index2 = tasks.indexOf(text2);

    swapNodes(text1, text2)
    console.log(index1, index2);

  });
});


function swapNodes(node1, node2) {
  const placeholder = document.createTextNode('');
  node1.before(placeholder);
  
  node2.before(node1);
  
  placeholder.before(node2);
  placeholder.remove();
}