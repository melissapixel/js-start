// Дан массив const numbers = [10, 20, 30, 40, 50];. Используя деструктуризацию, запиши первое число в переменную a, а второе — в переменную b. Остальные числа игнорируй.
const numbers = [10, 20, 30, 40, 50];
const [a, b] = numbers;
console.log(a, b);


// Дан объект const person = { firstName: 'Alex', lastName: 'Smith', age: 30 };. Извлеки из него firstName и age в отдельные переменные.
const person = { firstName: 'Alex', lastName: 'Smith', age: 30 };
const {firstName, age} = person;
console.log(firstName, age);


// Дан объект const settings = { theme: 'dark', volume: 80 };. Извлеки свойство theme, но назови новую переменную currentTheme.
const settings = { theme: 'dark', volume: 80 };
const {theme: currentTheme} = settings;
console.log(currentTheme);


// Дан объект const config = { url: 'https://api.test.com' };. Извлеки из него url и timeout. Для timeout сразу задай значение по умолчанию 5000, так как в объекте этого ключа нет.
const config = { url: 'https://api.test.com' };
const {url, timeout = 5000} = config;
console.log(url, timeout);


// Дан массив const coordinates = [100, 200, 300];. Используя деструктуризацию, поменяй значения переменных x и y местами за одну строку (подсказка: [x, y] = [y, x]).
let coordinates = [100, 200, 300];
let [x, y] = coordinates;
[coordinates[0], coordinates[1]] = [y, x];
console.log(coordinates);


// Дан объект const book = { title: 'JS Guide', author: { name: 'John', country: 'USA' } }. Используя вложенную деструктуризацию, извлеки имя автора сразу в переменную authorName.
const book = { title: 'JS Guide', author: 
                                  { name: 'John', country: 'USA' } 
              };
const { author: {name: authorName}} = book;
console.log(authorName);


// Дан массив const items = ['apple', 'banana', 'orange', 'grape'];. Используя деструктуризацию с оператором остатка (...), запиши первый элемент в переменную firstItem, а все остальные элементы — в массив otherItems.
const items = ['apple', 'banana', 'orange', 'grape'];
const [firstItem, ...rest] = items;
console.log(firstItem, rest);


// Напиши функцию printUser, которая принимает один аргумент — объект. Но в параметрах функции сразу используй деструктуризацию, чтобы извлечь name и role. Если role не передан, по умолчанию он должен быть 'guest'. Функция должна выводить в консоль: "Пользователь [name], роль: [role]".
function printUser (obj) {
  if (typeof obj === 'object') {
    const {name, role = 'guest'} = obj;
    console.log(`Ur name is ${name}, role is ${role}`);
  }
};
const user = {
  name: "Анна",
  // role: "admin"
};
printUser(user);