const filters = document.querySelector('.filters');
const filter_genre = document.querySelector('.filter_genre');
const cards = document.querySelector('.cards');
const countText = document.querySelector('.count');

// запрос
let data = null;
async function dataFetch() {
  const url = 'data.json';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error!");
    }

   data = await response.json();

  } catch (err) {
    console.log(err);
  }
}


function renderGenre() {
  const genres = data.map(el => el.genre);
  const uniqueGenres = [...new Set(genres)];

  uniqueGenres.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('filter');
    li.textContent = el;
    li.setAttribute('data-filter', 'genre-' + el);
    filter_genre.append(li);
  });
}

function renderMovies(array) {
  cards.innerHTML = '';
  array.forEach(el => {
    const card = document.createElement('div');
    card.classList.add('card');

    const title = document.createElement('p');
    title.classList.add('card__title');
    title.textContent = `${el.title}`;

    const genre = document.createElement('p');
    genre.classList.add('card__genre');
    genre.textContent = `genre is ${el.genre}`;

    const price = document.createElement('p');
    price.classList.add('card__price');
    price.textContent = `price is ${el.price}`;

    const rating = document.createElement('p');
    rating.classList.add('card__rating');
    rating.textContent = el.rating;

    card.appendChild(title);
    card.appendChild(genre);
    card.appendChild(price);
    card.appendChild(rating);

    cards.append(card);
  });
}

function renderCountMovies() {
  const count = document.querySelectorAll('.card').length;
  countText.textContent = `Number of films ${count}`;
}
// default render
async function main() {
  await dataFetch();
  renderGenre();
  renderMovies(data);
  renderCountMovies()
}
main();


// обработчик
filters.addEventListener('click', (event) => {
  let filterItems = [];
  let filteredMovies = [...data];

  const filter = event.target.closest('.filter');
  if (filter) {
    filter.classList.toggle('filter--active');

    const filtered = document.querySelectorAll('.filter--active');
    
    if (filtered.length === 0) {
      renderMovies(filteredMovies);
      renderCountMovies();
      return;
    }

    let filterItem = null;

    filtered.forEach(node => {
      filterItem = node.getAttribute('data-filter');
      filterItems.push(filterItem);
    });

    if (filterItems.includes('price')) {
      filteredMovies = filterPrice(filteredMovies);
    }
    if (filterItem.includes('rating')) {
      filteredMovies = filterRating(filteredMovies);
    }
    if (filterItems.includes('all')){
      filteredMovies = data;
    }
    filterItems.forEach(filterItem => {
      if (filterItem.startsWith('genre-')) {
        const result = filterItem.replace("genre-", ""); 
        filteredMovies = filterGenre(filteredMovies, result);
      }
    });

    renderMovies(filteredMovies);
    renderCountMovies();
    
  }
});


function filterPrice(arr) {
  return arr.sort((a, b) => b.price - a.price);
}
function filterRating(arr) {
  return arr.sort((a, b) => b.rating - a.rating);
}
function filterGenre(arr, genre) {
  return arr.filter(item => item.genre === genre);
}