const fragment = document.createDocumentFragment();
const cards = document.querySelector('.cards');
const buttons = document.querySelector('.buttons');

let page = 1;
async function fetchData(page) {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error!`);
    }

    const data = await response.json();
    return data;

  } catch (err) {
    console.log(err.message);
  }
}

async function main(id) {
  const data = await fetchData(id);
  renderData(data);
}
main();

function renderData(obj) {
  cards.innerHTML = '';
  obj?.results?.forEach(item => {
    const name = item?.name;
    const status = item?.status;
    const src = item?.image;

    const card = document.createElement('div');
    card.classList.add('card');

    const cardName = document.createElement('p');
    cardName.classList.add('card__name');
    cardName.textContent = name;

    const cardStatus = document.createElement('p');
    cardStatus.classList.add('card__status');
    cardStatus.textContent = status;

    const cardImg = document.createElement('img');
    cardImg.src = src;
    cardImg.alt = name;

    card.appendChild(cardName);
    card.appendChild(cardStatus);
    card.appendChild(cardImg);

    fragment.append(card);
  });
  cards.appendChild(fragment);
}




buttons.addEventListener('click', (event) => {
  const btn_back = event.target.closest('.btn_back');
  const btn_later = event.target.closest('.btn_later');

  if (btn_back) {
    if (page > 1) {
      --page;
      console.log(page);
    }
    if (page === 1) {
      btn_back.disabled = true;
    }
  }

  if (btn_later) {
    ++page;
    console.log(page);
    
    const backBtnElement = buttons.querySelector('.btn_back');
    if (backBtnElement) {
      backBtnElement.disabled = false;
    }
  }
  main(page);
});