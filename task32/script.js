const btnNotification = document.querySelector('.show-notification');
let position = 0;

btnNotification.addEventListener('click', (event) => {

  const notification = createNotification();

  setTimeout(() => {
    if (notification) {
      notification.remove();
      position = 0;
    }
  }, 3000);

});


function createNotification () {
  const blockNotification = document.createElement('div');
  blockNotification.className = 'block__notification';
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Save!';
  blockNotification.appendChild(paragraph);
  document.body.appendChild(blockNotification);

  position = position + 20;
  blockNotification.style.top = `${position}px`;
  blockNotification.style.left = `${position}px`;

  return blockNotification;
}