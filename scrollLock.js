const dialog = document.querySelector('#custom-dialog');

const open = dialog.getAttribute('open');

if (open === 'true') {
  // id of element to prevent
  const body = document.querySelector('body');
  body.classList.add('lock');
} else {
  body.classList.remove('lock');
}
