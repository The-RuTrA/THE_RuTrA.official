let current = 0;
const slides = document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('.slide');

  window.showSlide = function(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  };

  window.nextSlide = function() {
    current = (current + 1) % slides.length;
    showSlide(current);
  };

  window.prevSlide = function() {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };
});

document.addEventListener("DOMContentLoaded", () => {
  const emailElem = document.getElementById('email');
  const msg = document.getElementById('copy-msg');

  emailElem.addEventListener('click', () => {
    const emailText = emailElem.textContent.trim();
    navigator.clipboard.writeText(emailText).then(() => {
      msg.hidden = false;
      setTimeout(() => {
        msg.hidden = true;
      }, 1500);
    }).catch(() => {
      alert('Ошибка копирования email');
    });
  });
});

document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('light');
  const btn = document.getElementById('theme-toggle');
  if (document.body.classList.contains('light')) {
    btn.textContent = '🌞';
  } else {
    btn.textContent = '🌙';
  }
});
