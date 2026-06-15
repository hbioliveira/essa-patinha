// Nav scroll shadow
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

// Hamburger menu
const hamburger = document.querySelector('.nav__hamburger');
const mobileMenu = document.querySelector('.nav__mobile');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Fecha menu ao clicar em link
document.querySelectorAll('.nav__mobile a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// Formulário de contato (placeholder — integrar com Formspree ou similar)
const form = document.querySelector('.contato__form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = '✓ Mensagem enviada!';
    btn.disabled = true;
    btn.style.background = '#3cb371';
    form.reset();
    setTimeout(() => {
      btn.textContent = 'Enviar mensagem';
      btn.disabled = false;
      btn.style.background = '';
    }, 4000);
  });
}
