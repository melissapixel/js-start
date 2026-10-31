const list = document.querySelector('.list');

async function renderBooks() {

  try {
    const response = await fetch('data.json');

    if (!response.ok) {
      throw new Error("Something went wrong!");
    }

    const data = await response.json();

    // const dataNew = data.filter(el => el.year > 1950);

    const dataSorted = [...data].sort((a, b) => a.year - b.year);

    dataSorted.forEach(el => {
      const li = document.createElement("li");
      li.textContent = `${el.title} - ${el.author} (${el.year})`;
      list.append(li);
    });
  }
  catch (err) {
    list.textContent = err.message;
    list.style.color = 'red';
  }
}

renderBooks();