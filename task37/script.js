const name = document.querySelector('.name');
const email = document.querySelector('.email');

name.addEventListener('input', () => {
  setTimeout(() => {
    localStorage.setItem('name', name.value);
  }, 2000);
})

email.addEventListener('input', () => {
  setTimeout(() => {
    localStorage.setItem('email', email.value);
  }, 2000);
})

name.value = localStorage.getItem('name') || '';
email.value = localStorage.getItem('email') || '';