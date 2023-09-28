
const nav = document.querySelector('#nav-menu');
const abrir = document.querySelector('#nav-open');
const cerrar = document.querySelector('#nav-close');

abrir.addEventListener('click', () => {
  nav.classList.add("visible");
})

cerrar.addEventListener('click', () => {
  nav.classList.remove("visible");
})