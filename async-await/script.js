// На странице есть кнопка и блок с текстом «Ожидание...». При клике на кнопку текст должен поменяться на «Готово!» ровно через 3 секунды.
const button1 = document.querySelector('.button1');
const p1 = document.querySelector('.p1');

button1.addEventListener('click', async () => {
  try {
    await wait();
    p1.textContent = 'Ready';
  }
  catch {
    p1.textContent = 'Error';
  }
});

function wait() { 
  return new Promise((resolve) => {
    setTimeout(() => { 
      resolve();
    }, 3000); 
  });
}


// На странице есть кнопка и пустой блок. При клике на кнопку получи данные с https://jsonplaceholder.typicode.com/users/1 и выведи имя и email пользователя в блок.
const button2 = document.querySelector('.button2');
const list2 = document.querySelector('.list2');

button2.addEventListener('click', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();

    const name = document.createElement('li');
    name.textContent = data['name'];

    const email = document.createElement('li');
    email.textContent = data['email'];

    list2.append(name, email);

  } catch {
    console.log('err');
  }
}) 


// На странице есть кнопка и пустой список. При клике на кнопку получи все посты с https://jsonplaceholder.typicode.com/posts и выведи заголовки первых пяти постов как пункты списка.
const button3 = document.querySelector('.button3');
const list3 = document.querySelector('.list3');

button3.addEventListener('click', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    const newData = data.slice(0, 5);

    for (let key in newData) {
      const el = document.createElement('li');
      el.textContent = newData[key].title;
      list3.append(el);
    }
  } catch {
    console.log('err');
  }
})


// На странице есть поле ввода и кнопка «Найти». Пользователь вводит ID, нажимает кнопку. Если пользователь с таким ID существует — выведи его имя на странице. Если не существует — выведи сообщение «Не найдено».
const input4 = document.querySelector('.task4');
const button4 = document.querySelector('.button4');
const p4 = document.querySelector('.p-4');

const users4 = [
  {
    id: 101,
    name: "Иван",
    role: "admin",
    contacts: { email: "ivan@test.com", phone: "+79991112233" }
  },
  {
    id: 102,
    name: "Елена",
    role: "user",
    contacts: { email: "elena@test.com", phone: "+79992223344" }
  },
  {
    id: 103,
    name: "Михаил",
    role: "user",
    contacts: { email: "mihail@test.com", phone: null }
  }
];

button4.addEventListener('click', async () => {
  try {

    let found = false;

    for (let arr of users4) {
      if (arr.id == input4.value) {
        p4.textContent = 'Success';
        found = true;
        break;
      }
    }

    if (!found) {
      throw new Error("User is not found");
    }

  } catch (err) {
    p4.textContent =  err;
  }
})


// На странице есть кнопка и блок. При клике на кнопку получи данные с заведомо несуществующего адреса и выведи сообщение «Что-то пошло не так» в блок, чтобы страница не сломалась.
const button5 = document.querySelector('.button5');
const p5 = document.querySelector('.p-5');

button5.addEventListener('click', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/this.com');
    
    if (!response.ok) {
      throw new Error("Response do not okey");
    }

  } catch (err) {
    p5.textContent = err.message;
  }
}) 



// На странице есть кнопка и пустой блок. При клике на кнопку получи данные пользователя с ID 1, а затем — все его посты. Выведи в блок имя пользователя и под ним список заголовков его постов.
const button6 = document.querySelector('.button6');
const p6 = document.querySelector('.p6');
const list6 = document.querySelector('.list6');

button6.addEventListener('click', async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const dataAll = await response.json();

    const data = dataAll.filter(item => item.userId == 1);

    const dataId = data.find(item => item.userId == 1);

    const id = dataId.userId;

    const posts = data.map(post => post.title);

    p6.textContent = `Ur id ${id}`;

    posts.forEach((post) => {
      const li = document.createElement('li');
      li.textContent = post;
      list6.append(li);
    });

  }
  catch (err) {
    console.log(err);
  }
})



// На странице есть три кнопки с номерами 1, 2, 3 и три пустых блока. При клике на любую  в соответствующем блоке должно появиться имя пользователя с этим ID.
const buttons7 = document.querySelector('.buttons7');

const users7 = [
  { id: 1, name: "Alice", email: "alice@example.com", isActive: true },
  { id: 2, name: "Bob", email: "bob@example.com", isActive: false },
  { id: 3, name: "Charlie", email: "charlie@example.com", isActive: true }
];

buttons7.addEventListener('click', (event) => {
  const btn = event.target.closest('button');
  if (btn) {
    const id = Number(btn.textContent);

    const userObj = users7.find(user => user.id === id);
    console.log(userObj);

    const box = document.querySelector(`[data-box="${id}"]`);
    console.log(box);

    box.textContent = userObj.name;
  }
})