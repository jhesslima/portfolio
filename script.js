// Fade-in (opcional)
const elements = document.querySelectorAll("[data-fade]");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.2 });
elements.forEach(el => observer.observe(el));

// Blur dos outros cards
const cards = document.querySelectorAll('[data-card]');

cards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    cards.forEach(c => {
      if (c !== card) c.classList.add('hovered');
    });
  });

  card.addEventListener('mouseleave', () => {
    cards.forEach(c => c.classList.remove('hovered'));
  });
});

// Página Sobre - aba das universidades

  const text = document.querySelector('.universities-text');

  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // scroll para baixo → mostra
      text.classList.add('visible');
    } else {
      // scroll para cima → esconde
      text.classList.remove('visible');
    }

    lastScrollY = currentScrollY;
  });