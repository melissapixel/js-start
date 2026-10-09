const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.disabled = true;

input.addEventListener('input', () => {
  if (input.value.trim() == '') {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
});
