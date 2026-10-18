const btnModalOpen = document.querySelector('.button__modal-open');
const btnModalClose = document.querySelector('.button__modal');
let modal = document.querySelector(".modal");
let modalOpen = false;

btnModalOpen.addEventListener('click', () => {
  createModal();
  modalOpen = true;
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && modalOpen) {
    modal = document.querySelector(".modal");
    deleteModal(modal);
    modalOpen = false;
  }
});

function deleteModal (modal) {
  modal.remove();
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
  document.body.style.overflow = 'visible';
}

// create modal
function createModal () {
  let modal = document.createElement('div');
  modal.className = 'modal';

  // Create paragraph
  const p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere nobis architecto quod vel labore ea odit dicta omnis, inventore aut non fugit praesentium obcaecati ex magni fugiat molestias ipsa exercitationem.';

  // Create close button
  const btnModalClose = document.createElement('button');
  btnModalClose.className = 'button__modal';
  btnModalClose.textContent = 'x';

  modal.appendChild(p);
  modal.appendChild(btnModalClose);

  // Append the modal to the document body (or a specific container)
  document.body.appendChild(modal);

  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  document.body.style.overflow = 'hidden';

  btnModalClose.addEventListener('click', (e) => {
    deleteModal(modal);
    modalOpen = false;
  });
}