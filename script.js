const buttonOpen = document.querySelector('button');
const dialog = document.querySelector('dialog');
const buttonClose = dialog.querySelector(':scope > button');

buttonOpen.addEventListener('click', () => {
  dialog.showModal();
});

buttonClose.addEventListener('click', () => {
  dialog.close();
});

document.querySelector('body').addEventListener('scroll', () => {
  dialog.close();
});
