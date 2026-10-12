const container = document.querySelector('.content');

container.addEventListener('click', (event) => {

  const task1 = event.target.closest('.task1');
  if (task1) {
    setTimeout(() => {
      const out = task1.querySelector('p');
      out.textContent = 'Прошло 2 секунды';
    }, 2000);
  }

  const task2 = event.target.closest('.task2');
  if (task2) {
    const button = task2.querySelector('button');
    button.textContent = 'Wait';

    setTimeout(() => {
      button.textContent = 'Click me';
    }, 2000);
  }

});