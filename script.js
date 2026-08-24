function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY + 120;
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                link.classList.add('active');
            }
        }
    });
}

const themeToggle = document.getElementById('themeToggle');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalMetrics = document.getElementById('modalMetrics');
const modalTech = document.getElementById('modalTech');
const progressBars = document.querySelectorAll('.progress');
const skillsSection = document.querySelector('.skills');
const scrollElements = document.querySelectorAll('.skill-card, .project-card, .testimonial-card');

function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    if (isDarkMode) {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'block';
    } else {
        moonIcon.style.display = 'block';
        sunIcon.style.display = 'none';
    }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark-mode') {
    document.body.classList.add('dark-mode');
} else if (savedTheme === 'light-mode') {
    document.body.classList.remove('dark-mode');
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
}
updateThemeIcon();

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
    updateThemeIcon();
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.addEventListener('click', (event) => {
    const isInsideNav = document.querySelector('.nav-container').contains(event.target);
    if (!isInsideNav && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

function animateCounter(element, target) {
    const increment = target / 50;
    let current = 0;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = `${target}+`;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 35);
}

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.stat-number').forEach((stat) => {
                    const target = parseInt(stat.getAttribute('data-target'), 10);
                    if (stat.textContent === '0') {
                        animateCounter(stat, target);
                    }
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    observer.observe(aboutStats);
}

filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        filterBtns.forEach((filterBtn) => filterBtn.classList.remove('active'));
        btn.classList.add('active');
        const filterValue = btn.getAttribute('data-filter');
        projectCards.forEach((card) => {
            const matches = filterValue === 'all' || card.getAttribute('data-category') === filterValue;
            card.classList.toggle('hidden', !matches);
        });
    });
});

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !subject || !message) {
            formFeedback.textContent = 'Please fill in all fields before sending your message.';
            return;
        }

        const mailtoLink = `mailto:charlesnat321@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
        window.location.href = mailtoLink;
        formFeedback.textContent = 'Thanks! Your email app should open with a draft ready for sending.';
        contactForm.reset();
    });
}

if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                progressBars.forEach((bar) => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 120);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });
    skillsObserver.observe(skillsSection);
}

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.6s ease-out forwards';
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

scrollElements.forEach((element) => revealObserver.observe(element));

document.querySelectorAll('.view-details').forEach((button) => {
    button.addEventListener('click', () => {
        const card = button.closest('.project-card');
        modalTitle.textContent = card.getAttribute('data-title');
        modalDescription.textContent = card.getAttribute('data-description');
        const metrics = card.getAttribute('data-metrics').split(';');
        modalMetrics.innerHTML = metrics.map((item) => `<span>${item.trim()}</span>`).join('');
        const tech = card.getAttribute('data-tech').split(',');
        modalTech.innerHTML = tech.map((item) => `<span>${item.trim()}</span>`).join('');
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    });
});

document.querySelectorAll('[data-close="true"], .modal-close').forEach((element) => {
    element.addEventListener('click', () => {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    });
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateActiveNavLink();
            ticking = false;
        });
        ticking = true;
    }
});

document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLink();
});
