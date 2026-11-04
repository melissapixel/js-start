const btn = document.querySelector('button');
const image = document.querySelector('img');

async function fetchData() {
  const url = 'https://dog.ceo/api/breeds/image/random';
  image.src = 'image.png';
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error!");
    }

    const data = await response.json();

    const srcImg = data.message;

    image.src = srcImg;

  }
  catch (err) {
    console.log(err.message);
  }
}


btn.addEventListener('click', fetchData)