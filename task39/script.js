// Напиши функцию delayedMessage(message, delay), которая принимает текст и время в миллисекундах. Она должна использовать setTimeout, чтобы вывести этот текст в консоль ровно через указанное время.
// Проверка: Вызови функцию с текстом "Привет, Mel!" и задержкой 2000 мс. Убедись, что код после вызова функции выполняется до того, как появится сообщение.

let text = 'Hello!';
let time = 2000;

function delayedMessage (mess, delay) {
  setTimeout(() => {
    console.log(mess);
  }, delay);
}

delayedMessage(text, time);



// Задание 2. «Салат» (цепочка шагов)
// Представь, что ты готовишь салат. Шаги идут строго по порядку:

//     Помыть овощи (1 секунда)
//     Нарезать овощи (1 секунда)
//     Заправить салат (1 секунда)

// Каждый шаг не может начаться, пока не закончится предыдущий. И каждый шаг по завершении «зовёт» следующий.
// Твоя задача: Напиши три функции: washVegetables(callback), cutVegetables(callback), dressSalad(callback). Каждая внутри делает setTimeout на 1000 мс, пишет в консоль свой шаг («Овощи помыты», «Овощи нарезаны», «Салат заправлен») и вызывает переданный callback.
// Запусти их так, чтобы в консоли с интервалом в секунду появились все три сообщения по порядку.
// Цель: Почувствовать, как колбэки вкладываются друг в друга. Это и есть та самая «пирамида», от которой потом избавят Промисы.

function doStep1 () {
  setTimeout(() => {
    console.log('step 1');
    doStep2();
  }, 1000);
}

function doStep2 () {
  setTimeout(() => {
    console.log('step 2');
    doStep3();
  }, 1000);
}

function doStep3 () {
  setTimeout(() => {
    console.log('step 3');
  }, 1000);
}

doStep1();



// Задание 3. «Заказ в интернет-магазине»
// Представь: ты заказала книгу онлайн. Магазин думает 2 секунды. Потом может произойти одно из двух: либо товар пришёл на склад (успех), либо товар закончился (ошибка). Ты заранее говоришь магазину: «Если придёт — позвони мне по этому номеру. Если не придёт — позвони по этому другому номеру».
// Твоя задача: Напиши функцию orderBook(onSuccess, onError). Внутри setTimeout на 2000 мс. Случайным образом (через Math.random()) реши: если число больше 0.5 — вызывай onSuccess("Книга пришла!"), иначе — onError("Книги нет в наличии!").
// Вызови функцию и передай ей две разные функции: одна пишет успех в консоль, другая — ошибк

let limit = 5;
function orderBook(onSuccess, onError) {
  if (Math.floor(Math.random() * (10 - 1 + 1)) + 1 > 5) {
    onSuccess();
  } else {
    onError();
  }
}
function onSuccess () {
  console.log('Success');
}
function onError () {
  console.log('onError');
}
orderBook(onSuccess, onError);


// Ты нажала «Сохранить» в документе. Появляется зелёная плашка «Сохранено!» — и через 3 секунды сама исчезает. Ты не думаешь об этом, но кто-то должен сказать плашке: «Исчезай через 3 секунды».
const saveBtn = document.querySelector('.btn-save');

saveBtn.addEventListener('click', () => {
  const billetDiv = document.createElement('div');
  billetDiv.className = 'billet';
  billetDiv.innerHTML = '<p>It is Save!</p>';
  document.body.appendChild(billetDiv);

  setTimeout(() => {
    billetDiv.remove();
  }, 3000);
});



// Ты заказала пиццу. Курьер едет 20 минут. Всё это время ты видишь на экране «Пицца в пути...». Когда курьер доехал — надпись меняется на «Пицца доставлена!».
const onPathPizza = 'Пицца в пути...';
const onSuccessPizza = 'Пицца доставлена!';

const pPizza = document.querySelector('.p-buy');
const btnBuy = document.querySelector('.btn-buy');

function buyPizza () {
  pPizza.innerHTML = onPathPizza;

  setTimeout(() => {
    pPizza.innerHTML = onSuccessPizza;
  }, 2000);
}

btnBuy.addEventListener('click', () => {
  buyPizza();
});