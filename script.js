/* ===========================
   Smooth Scroll for Nav Links
=========================== */
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

/* ===========================
   Highlight Active Navigation Link
=========================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 100; // Adjust for header
    if (pageYOffset >= sectionTop) current = sec.getAttribute('id');
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
});

/* ===========================
   Fade-in Sections on Scroll
=========================== */
const hiddenSections = document.querySelectorAll('.hidden');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });

hiddenSections.forEach(sec => observer.observe(sec));

/* ===========================
   Badge Hover Animation
=========================== */
document.querySelectorAll('.badge').forEach(badge => {
  badge.addEventListener('mouseenter', () => badge.style.transform='scale(1.1)');
  badge.addEventListener('mouseleave', () => badge.style.transform='scale(1)');
});

/* ===========================
   Dark Mode Toggle
=========================== */
const themeToggle = document.createElement('button');
themeToggle.id = 'themeToggle';
themeToggle.textContent = 'Toggle Dark Mode';
document.body.prepend(themeToggle);

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
