// На странице есть пустой список <ul> и кнопка «Загрузить». При клике на кнопку сделай GET-запрос на https://jsonplaceholder.typicode.com/users. Получи массив пользователей и просто выведи его в консоль. Ничего на странице пока не меняй.
// ЧИСТЫЙ GET И ВЫВОД
const btn1 = document.querySelector('.btn1');
const list1 = document.querySelector('.list1');

btn1.addEventListener('click', async () => {
  try {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }

    const data = await response.json();

    list1.innerHTML = ''; 

    data.forEach(el => {
      const li = document.createElement('li');
      li.textContent = el.name;
      list1.append(li)
    });
  } 
  catch (err) {
    console.log(err);
  }
})


// На странице есть поле ввода и кнопка «Найти». Пользователь вводит имя (или часть имени), нажимает кнопку — и на странице остаются только те пользователи, у которых в имени встречается введённая строка. Если поле пустое — показываются все.
// ADD ФИЛЬТРАЦИЮ
const input2 = document.querySelector('.input2');
const list2 = document.querySelector('.list2');

input2.addEventListener('input', async () => {

  const value = input2.value.trim();
  const url = 'https://jsonplaceholder.typicode.com/users';

  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Error of response');
    }

    const data = await response.json();

    list2.innerHTML = ''; 

    data.forEach(el => {
      if (el.name.includes(value)) {
        const li = document.createElement('li');
        li.textContent = el.name;
        list2.append(li);
      }
    });

  }
  catch (err) {
    console.log(err);
  }
});


