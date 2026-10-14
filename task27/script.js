const tasks = [];
const list = document.querySelector('.list');
const listSave = document.querySelector('.list__save');
const content = document.querySelector('.content');


content.addEventListener('click', (event) => {

  const addBtn = event.target.closest('button');
  if (addBtn) {
    const text = document.querySelector('input').value;
    const point = document.createElement('li');

    point.textContent = text;
    list.append(point);

    tasks.push(point.textContent);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
})


function loadingData (array, listContainer) {
  array.forEach(el => {
    const point = document.createElement('li');
    point.textContent = el;
    listContainer.append(point);
  });
}

loadingData(JSON.parse(localStorage.getItem('tasks')), listSave);
