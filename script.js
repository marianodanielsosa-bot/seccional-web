// Menú móvil
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#nav');
if (toggle && nav){
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}
// Año automático en el footer
const y = document.querySelector('#year');
if (y) y.textContent = new Date().getFullYear();
