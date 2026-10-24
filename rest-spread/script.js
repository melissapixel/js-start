// Есть два массива: const arr1 = [1, 2]; и const arr2 = [3, 4];. Создай третий массив arr3, который будет содержать все элементы из обоих массивов по порядку, используя spread.
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [...arr1, ...arr2];
console.log(arr3);


// Есть массив const colors = ["red", "green"];. Создай его копию в переменную colorsCopy с помощью spread. Добавь в colorsCopy цвет "blue". Выведи оба массива, чтобы убедиться, что исходный colors не изменился.
const colors = ["red", "green"];
const colorsCopy = [...colors, "blue"];
console.log(colors, colorsCopy);


// Напиши функцию greet, которая принимает имя первым аргументом, а все остальные аргументы (неизвестное количество) собирает в массив hobbies с помощью rest. Функция должна возвращать строку: "Привет, [имя]! Твои хобби: [список хобби через запятую]".
function greet (name, ...hobbies) {
  const hobbiesString = hobbies.join(', ');
  console.log(`Hello, ${name}. It is ur hobbies: ${hobbiesString}`);
}
greet('Mel', 'Reading books', 'coding', 'learning a new language');


// Есть объект: const car = { brand: "Toyota", model: "Camry", year: 2020, color: "black" };. Используя деструктуризацию с rest, вытащи brand и model в отдельные переменные, а всё остальное собери в объект carDetails.
const car = { brand: "Toyota", model: "Camry", year: 2020, color: "black" };
const { brand, model, ...carDetails } = car;
console.log(brand, model, carDetails);


// Есть объект пользователя: const user = { name: "Mel", status: "offline" };. Создай новый объект updatedUser на основе user с помощью spread, но измени status на "online". Исходный объект user должен остаться нетронутым.
const user = { name: "Mel", status: "offline" };
const updatedUser = { ...user, status: 'online' };
console.log(user, updatedUser);


// Есть строка const word = "JavaScript";. Используя spread-оператор, преврати её в массив отдельных букв: ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"].
const word = "JavaScript";
const wordArr = word.split('');
console.log(wordArr);