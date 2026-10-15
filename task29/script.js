const sendBtn = document.querySelector('button');

let nameRow = document.querySelector('.row__name');
let emailRow = document.querySelector('.row__email');
let paswsRow = document.querySelector('.row__password');

const messError = 'Error';
const messSuccess = 'Success';


sendBtn.addEventListener('click', () => {
  const nameData = document.querySelector('#name').value;
  const emailData = document.querySelector('#email').value;
  const passwData = document.querySelector('#password').value;


  if (nameData.trim()) {
    nameRow.textContent = messSuccess;
  } else {
    nameRow.textContent = messError;
  }

  if (emailData.includes('@')) {
    emailRow.textContent = messSuccess;
  } else {
    emailRow.textContent = messError;
  }

  if (passwData.length >= 6) {
    paswsRow.textContent = messSuccess;
  } else {
    paswsRow.textContent = messError;
  }
});