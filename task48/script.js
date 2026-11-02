// 1. Создаём невидимый фрагмент в памяти
const fragment = document.createDocumentFragment();

const list = document.querySelector('.list');

async function dataFetch() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  list.textContent = 'Loading';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error!");
    }

    const data = await response.json();

    data.forEach(el => {
      const li = document.createElement('li');
      li.textContent = el.title;
      fragment.append(li);
    });
    list.textContent = '';
    list.append(fragment);

  }
  catch (err) {
    console.log(err.message);
  }
}

dataFetch();