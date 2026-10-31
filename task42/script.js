const list = document.querySelector('.list');

async function fetchData() {
  try {
    const response = await fetch('data.json');

    if (!response.ok) {
      throw new Error('Error');
    }

    const data = await response.json();

    data.forEach(el => {
      if (el.color === 'red') {
        const li = document.createElement('li');
        li.textContent = el.name + ' ' + el.color;
        list.append(li);
      }
    });


  } catch (err) {
    console.log(err);
  }
}


fetchData();