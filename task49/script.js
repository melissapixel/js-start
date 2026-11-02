const list = document.querySelector('.list');

async function dataFetch() {
  const ulr_user = 1; 
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${ulr_user}`;
  list.textContent = 'Loading';

  try {
    const response = await fetch(url);
    const data = await response.json();

    list.textContent = '';
    renderPosts(data);
  }
  catch (err) {
    console.log(err.message);
  }
  
}

function renderPosts(posts) {
  posts.forEach(el => {
    const li = document.createElement('li');
    li.textContent = el.title;
    list.append(li);
  });
}
dataFetch();