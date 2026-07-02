// ===============================
// Responsive Hamburger Menu
// ===============================
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Close menu when clicking a link (mobile)
const navLinks = document.querySelectorAll('.main-nav a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('is-open')) {
      mainNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    }
  });
});

// ===============================
// Gallery Lightbox (Gallery Page)
// ===============================
const galleryImages = document.querySelectorAll('.gallery-grid img');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const lightboxClose = document.querySelector('.lightbox-close');

if (galleryImages && lightbox && lightboxImg && lightboxClose) {
  galleryImages.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightbox.style.display = 'flex';
      lightbox.setAttribute('aria-hidden', 'false');
    });
  });

  lightboxClose.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightbox.setAttribute('aria-hidden', 'true');
  });

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === 'flex') {
      lightbox.style.display = 'none';
      lightbox.setAttribute('aria-hidden', 'true');
    }
  });
}

// ===============================
// Dynamic Footer Year
// ===============================
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
