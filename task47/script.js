const card_name = document.querySelector('.card__name');
const card_email = document.querySelector('.card__email');
const card_img = document.querySelector('img');

async function randomUser() {
  const url = 'https://randomuser.me/api/';

  card_name.textContent = 'Loading!';
  card_email.textContent = '';
  card_img.src = '';

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Request error!"); 
    }

    const data = await response.json();

    card_name.textContent = data.results[0]?.name?.first;
    card_email.textContent = data.results[0]?.email;
    card_img.src = data.results[0]?.picture?.large;

  } catch (err){
    console.log(err.message);
  } 
}


function random_user() {
  randomUser();
}