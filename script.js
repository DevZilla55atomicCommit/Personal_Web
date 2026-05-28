// DOM Elements
const hamburger = document.querySelector('.hamburger');
const navMobile = document.querySelector('.nav-mobile');
const navLinks = document.querySelectorAll('.nav-links a');
const themeToggle = document.querySelector('.theme-toggle');
const scrollToTop = document.querySelector('.scroll-to-top');
const contactForm = document.querySelector('.contact-form');
const formInputs = contactForm.querySelectorAll('input, textarea');

// Theme Toggle
function initThemeToggle() {
  const savedTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// Mobile Menu
function initMobileMenu() {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMobile.classList.toggle('active');
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMobile.classList.remove('active');
    });
  });
}

// Smooth Scroll Navigation
function initSmoothScroll() {
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Scroll Animations
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const scrollReveals = document.querySelectorAll('.scroll-reveal');
  scrollReveals.forEach(el => observer.observe(el));
}

// Scroll to Top Button
function initScrollToTop() {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTop.classList.add('visible');
    } else {
      scrollToTop.classList.remove('visible');
    }
  });

  scrollToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Form Handling
function initForm() {
  const form = contactForm;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    // Show success message
    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');

    // Reset form
    form.reset();

    // Simulate sending (remove setTimeout for production)
    setTimeout(() => {
      console.log('Form submitted:', { name, email, message });
    }, 100);
  });

  // Clear validation messages on input
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      input.parentElement.classList.remove('error');
    });
  });
}

// Notification System
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.setAttribute('role', 'alert');

  const colors = {
    success: '#10b981',
    error: '#ef4444',
    warning: '#f59e0b',
    info: '#6366f1'
  };

  notification.style.cssText = `
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    background: ${colors[type]};
    color: white;
    padding: 1rem 2rem;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
    z-index: 10000;
    font-weight: 500;
    opacity: 0;
    animation: slideDown 0.5s ease forwards;
  `;

  notification.textContent = message;
  document.body.appendChild(notification);

  // Remove after 4 seconds
  setTimeout(() => {
    notification.style.opacity = '0';
    notification.style.transform = 'translateY(-100px)';
    setTimeout(() => notification.remove(), 500);
  }, 4000);
}

// Add animation keyframes dynamically
const style = document.createElement('style');
style.textContent = `
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translate(-50%, -100px);
    }
    to {
      opacity: 1;
      transform: translate(-50%, 0);
    }
  }
`;
document.head.appendChild(style);

// Mouse Parallax Effect
function initParallax() {
  const hero = document.querySelector('.hero');
  if (!hero) return;

  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX - window.innerWidth / 2) / 100;
    const y = (e.clientY - window.innerHeight / 2) / 100;

    hero.style.transform = `translate(${x}px, ${y}px)`;
  });
}

// Hero Text Animation Sequence
function initHeroAnimation() {
  const elements = document.querySelectorAll('.hero .animate-in');
  elements.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.15}s`;
  });
}

// Active Link on Scroll
function initActiveLink() {
  const sections = document.querySelectorAll('section');

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPosition >= top && scrollPosition < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}

// Initialize All Functions
function init() {
  initThemeToggle();
  initMobileMenu();
  initSmoothScroll();
  initScrollAnimations();
  initScrollToTop();
  initForm();
  initParallax();
  initHeroAnimation();
  initActiveLink();
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Card Hover Tilt Effect
function initTiltEffect() {
  const cards = document.querySelectorAll('.feature-card, .service-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });
}

// Run tilt effect after a short delay
setTimeout(initTiltEffect, 100);

// Console Easter Egg
console.log('%c Welcome to DevZilla! %c Built with ❤️ ', 'background: #6366f1; color: white; font-size: 16px;', 'background: transparent; color: inherit; font-size: 14px;');
