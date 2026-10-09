const sends = document.querySelectorAll('button');

sends.forEach((send) => {
  send.addEventListener('click', () => {
    send.previousElementSibling.classList.add('task--ready');
  })
});