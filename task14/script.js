const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('ul');

btn.addEventListener('click', () => {
  if (input.value.trim()) {
    let point = document.createElement('li');
    point.innerHTML = `<p>${input.value}</p><span>x</span>`;
    list.append(point);
  }
});

list.addEventListener('click', (event) => {
  // event.target — это элемент, по которому РЕАЛЬНО кликнули.
  // closest() поднимается вверх по дереву и ищет ближайший подходящий элемент.

  const deleteBtn = event.target.closest('span');
  if (deleteBtn) {
    const task = deleteBtn.closest('li');
    task.remove();
    return;
  }
})