const cards = document.querySelector('.cards');
const buttons = document.querySelector('.buttons');


let data = null;

async function dataFetch() {
  try {
    const url = "data.json";
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error!");
    }

    data = await response.json();
  }
  catch (err) {
    console.log(err.message);
  }
}


function renderCities(array) {
  array.forEach(el => {
    const card = document.createElement('li');
    card.classList.add('card');

    // 2. Create and populate the country paragraph
    const countryEl = document.createElement('p');
    countryEl.classList.add('card__country');
    countryEl.textContent = `${el.country}`;

    const populationEl = document.createElement('p');
    populationEl.className = 'card__population';
    populationEl.textContent = `${el.population}`;

    const capitalEl = document.createElement('p');
    capitalEl.className = 'card__capital';
    capitalEl.textContent = `${el.capital}`;

    card.appendChild(countryEl);
    card.appendChild(populationEl);
    card.appendChild(capitalEl);

    cards.append(card);
  });
}

async function main() {
  await dataFetch();
  renderCities(data);
}

main();


buttons.addEventListener('click', (event) => {

  const button_population = event.target.closest('.button_population');
  if (button_population) {
    const dataSorted = [...data].sort((a, b) => b.population - a.population);

    cards.innerHTML = '';

    renderCities(dataSorted);
  }

  const button_alphabet = event.target.closest('.button_alphabet');
  if (button_alphabet) {
    const dataSorted = [...data].sort((a, b) => a.country.localeCompare(b.country))
    cards.innerHTML = '';

    renderCities(dataSorted);
  }
})