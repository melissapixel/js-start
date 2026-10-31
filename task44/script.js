const list = document.querySelector('.list');
const input = document.querySelector('input');
let data = null;


// ПОЛУЧАЕМ ДАННЫЕ И ВЫЗЫВАЕМ РЕНДЕР
async function dataFetch() {
  try {
    const response = await fetch('data.json');
    
    if (!response.ok) {
      throw new Error("Error!");
    }

    data = await response.json();

    renderDishes(data);

  } catch (err) {
    list.textContent = err.message;
    console.log(err);
  }
}
dataFetch();


// ОБЬЯВЛЯЕМ ФУНКЦИЮ РЕНДЕРА
function renderDishes(array) {
    array.forEach(el => {
    console.log(el);
    const li = document.createElement('li');
    li.textContent = `${el.dish} - ${el.time} min`;

    if (el.difficulty === 'easy') {
      li.classList.add('text--green');
    }
    if (el.difficulty === 'medium') {
      li.classList.add('text--yellow');
    }
    if (el.difficulty === 'hard') {
      li.classList.add('text--red');
    }

    list.append(li);
  });
}


// ОБЬЯВЛЯЕМ ОБРАБОТЧИК
input.addEventListener('input', () => {

  try {
    list.textContent = '';

    if (input.value === '') {
      renderDishes(data);
    } else {
      const dataFilter = data.filter(el => el.dish.startsWith(input.value));
      renderDishes(dataFilter);
    }

  } catch (err) {
    list.textContent = err.message;
    console.log(err);
  }

})