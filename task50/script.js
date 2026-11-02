const post = document.querySelector('.post');
const postTitle = document.querySelector('.post__title');
const postBody = document.querySelector('.post__body');
const btn = document.querySelector('input');

let defaultData = [];
async function fetchData(id = 1) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

  try {
    const response = await fetch(url);
    defaultData = await response.json();

  } catch (err) {
    console.log(err.message);
  }
}

function renderDefaultData(arr) {
  postTitle.textContent = arr.title;
  postBody.textContent = arr.body;
}

async function main(id) {
  await fetchData(id);
  renderDefaultData(defaultData);
}
main();


btn.addEventListener('click', () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  main(randomNumber);
})