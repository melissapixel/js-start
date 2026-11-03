const btn = document.querySelector('button');
const input = document.querySelector('input');

const tempP = document.querySelector('.temp');
const descP = document.querySelector('.desc');
const errorP = document.querySelector('.error');


async function sendCity() {
  const city = input.value;
  const [temp, desc] = await fetchData(city);
  renderData(temp, desc);
}

async function fetchData(city) {
  const url = `https://wttr.in/${city}?format=j1`;

  tempP.textContent = "Loading";
  descP.textContent = "Loading"; 

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Error!");
    }

    const data = await response.json();

    const temp = data.current_condition[0]?.temp_C;
    const desc = data.current_condition[0]?.weatherDesc[0]?.value;

    console.log(temp, desc);

    return [temp, desc];

  } catch (err) {
    errorP.textContent = err.message;
  }
}

function renderData (temp, desc) {
  tempP.textContent = temp;
  descP.textContent = desc; 
}