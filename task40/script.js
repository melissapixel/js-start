// Задание 1. Базовый Promise
// Создай функцию getGreeting(name), которая возвращает Promise. Внутри через setTimeout (1 секунда) вызывай resolve с текстом "Привет, [name]!".
// Проверка: вызови функцию и выведи результат через .then.
const getGreeting = new Promise ((resolve) => {
  const name = 'Mel';
  setTimeout(() => {
    resolve(`Hello, ${name}`);
  }, 1000);
})

getGreeting.then((result) => {
  console.log(result);
})

// Создай Promise, который через 1 секунду выведет в консоль "Привет!". Используй setTimeout и resolve. Подключи .then, чтобы вывести результат.
const sendGreeteng = new Promise ((resolve) => {
  setTimeout(() => {
    resolve('Hi');
  }, 1000)
})
sendGreeteng.then((result) => {
  console.log(result);
})


// Создай Promise, который через 500 миллисекунд вызовет resolve с числом 42. Выведи это число в консоль через .then.
const sendNum = new Promise ((resolve) => {
  setTimeout(() => {
    resolve('42');
  }, 500);
})
sendNum.then((res) => {
  console.log(res);
})

// Создай Promise, который через 1 секунду вызовет reject("Ошибка!"). Подключи .catch, чтобы вывести эту ошибку в консоль.
const sendError = new Promise ((resolve, reject) => {
  setTimeout(() => {
    reject('Error!');
  }, 1000);
});
sendError.catch((res) => {
  console.log(res);
});


// Создай Promise, который через 1 секунду вызовет resolve("Успех!"). Подключи и .then, и .catch. Убедись, что срабатывает только .then.
const sendStatus = new Promise ((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
    reject('Err');
  }, 1000);
});
sendStatus.then((res) => {
  console.log(res);
});
sendStatus.catch((err) => {
  console.log(err);
});


// Создай переменную const isSuccess = true. Создай Promise, который через 1 секунду проверяет эту переменную: если true — вызывает resolve("Всё хорошо"), если false — вызывает reject("Всё плохо"). Подключи .then и .catch.
const isSuccess = false;

const checkSuccess = new Promise ((resolve, reject) => {
  setTimeout(() => {
    if (isSuccess) {
      resolve('ALL GOOD');
    } else {
      reject('ALL BAD!');
    }
  }, 1000);
});
checkSuccess
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });


// Создай Promise, который через 1 секунду вызывает resolve(10). В .then умножь это число на 2 и верни результат (используй return). Подключи второй .then, который выведет финальное число в консоль.
const calc = new Promise ((resolve) => {
  setTimeout (() => {
    resolve(10);
  }, 1000);
})
calc
  .then((res) => {
    return res * 2;
  })
  .then((res) => {
    console.log(res);
  });


// Создай два Promise: первый через 1 секунду вызывает resolve("Первый"), второй через 2 секунды вызывает resolve("Второй"). Подключи их последовательно через .then, чтобы сначала вывелся "Первый", потом "Второй".
const firstPromise = new Promise ((resolve) => {
  setTimeout(() => {
    resolve('First');
  }, 1000);
})

firstPromise
  .then((res) => {
    console.log(res);
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve('Second');
      }, 2000);
    })
  })
  .then((res) => {
    console.log(res);
  });


// Сценарий: У тебя есть "сервер" — функция fetchUser(id), которая возвращает Promise. Через 1 секунду она "отдаёт" объект пользователя { id, name, email } или ошибку, если id не найден.
const user = { id: 1, name: "Mel", email: "mel@example.com" };
function fetchUser(id) {
  return new Promise ((resolve, reject) => {

    setTimeout(() => {
      if (user['id'] === id) {
        resolve(id);
      } else {
        reject('User not found');
      }
    }, 1000);

  })
  .then((res) => {
    console.log(`Id is ${res}`);
  })
  .catch((err) => {
    console.log(err);
  })
}
fetchUser(1);


// Сценарий: В реальном приложении ты часто получаешь данные по цепочке: сначала пользователя, потом его заказы, потом детали заказа.
// Построй цепочку .then: получи пользователя → получи его заказы → возьми первый заказ → получи детали. Выведи финальный результат в консоль.
const userObj = {
  id: 1,
  name: "Mel",
  email: "mel@example.com",
  orderId: 101,
  books: [
    { title: "JavaScript: The Good Parts", price: 25 },
    { title: "Clean Code", price: 30 }
  ],
  total: 55
};
function getUserId (id) {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(id);
    }, 1000);
  })

}
function getUserBooks (books) {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(books);
    }, 1000);
  })
}
function getUserTotal (total) {
  return new Promise ((resolve) => {
    setTimeout(() => {
      resolve(total);
    }, 1000);
  })
}


getUserId(`User id is ${userObj['id']}`);
getUserBooks(`Books of User ${userObj['books']}`);
getUserTotal(`User total books: ${userObj['total']}`);