// ============================================
// UTILITY FUNCTIONS
// ============================================

// Smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add active class to nav links
function updateActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        const section = document.querySelector(href);
        if (section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const scrollPosition = window.scrollY + 100;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                link.classList.add('active');
            }
        }
    });
}

// ============================================
// DARK/LIGHT MODE TOGGLE
// ============================================

const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light-mode';

// Set initial theme
if (currentTheme === 'dark-mode') {
    document.body.classList.add('dark-mode');
    updateThemeIcon();
}

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    updateThemeIcon();
    
    // Save preference
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDarkMode ? 'dark-mode' : 'light-mode');
});

function updateThemeIcon() {
    const isDarkMode = document.body.classList.contains('dark-mode');
    themeToggle.innerHTML = isDarkMode ? '☀️' : '🌙';
}

// ============================================
// HAMBURGER MENU
// ============================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const isClickInsideNav = document.querySelector('.nav-container').contains(event.target);
    if (!isClickInsideNav && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// SMOOTH SCROLLING FOR NAV LINKS
// ============================================

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', updateActiveNavLink);

// ============================================
// ANIMATED COUNTERS FOR STATS
// ============================================

function animateCounter(element, target) {
    const increment = target / 50;
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 40);
}

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                if (stat.textContent === '0') {
                    animateCounter(stat, target);
                }
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const aboutStats = document.querySelector('.about-stats');
if (aboutStats) {
    observer.observe(aboutStats);
}

// ============================================
// PROJECT FILTERING
// ============================================

const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        // Toggle active class
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        // Filter projects
        const filterValue = this.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.classList.remove('hidden');
                card.style.opacity = '0';
                setTimeout(() => {
                    card.style.opacity = '1';
                }, 10);
            } else {
                card.classList.add('hidden');
            }
        });
    });
});

// ============================================
// CONTACT FORM HANDLING
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Create mailto link
        const mailtoLink = `mailto:charles@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `From: ${name} (${email})\n\nMessage:\n${message}`
        )}`;
        
        window.location.href = mailtoLink;
        
        // Reset form after a short delay
        setTimeout(() => {
            contactForm.reset();
            alert('Thank you for your message! I\'ll be in touch soon.');
        }, 100);
    });
}

// ============================================
// PROGRESS BAR ANIMATION
// ============================================

const progressBars = document.querySelectorAll('.progress');
const skillsSection = document.querySelector('.skills');

if (skillsSection) {
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                progressBars.forEach(bar => {
                    const width = bar.style.width;
                    bar.style.width = '0';
                    setTimeout(() => {
                        bar.style.width = width;
                    }, 100);
                });
                skillsObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    skillsObserver.observe(skillsSection);
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

const scrollElements = document.querySelectorAll('.skill-card, .project-card, .testimonial-card');

const scrollObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.6s ease-out forwards';
            scrollObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

scrollElements.forEach(element => {
    scrollObserver.observe(element);
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        // Close mobile menu
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// ============================================
// LAZY LOADING FOR IMAGES (if images are added)
// ============================================

if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// PRINT/DOWNLOAD CV FUNCTIONALITY
// ============================================

const downloadCVButton = document.querySelector('a[download]');

if (downloadCVButton) {
    downloadCVButton.addEventListener('click', function(e) {
        // If the file doesn't exist, show a message
        fetch('assets/portfolio.pdf')
            .catch(() => {
                e.preventDefault();
                alert('CV file not found. Please add your portfolio.pdf to the assets folder.');
            });
    });
}

// ============================================
// PERFORMANCE: DEBOUNCE SCROLL
// ============================================

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

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Update active nav link on page load
    updateActiveNavLink();
    
    // Trigger initial progress bar animations after a delay
    setTimeout(() => {
        // This allows for animations to trigger when observing the element
    }, 500);
    
    console.log('Portfolio website loaded successfully!');
    console.log('Customization tip: Edit the placeholder text, colors, and links in the HTML and CSS files to match your personal brand.');
});

// ============================================
// THEME PERSISTENCE & SYSTEM PREFERENCE
// ============================================

// Check for system preference on first load
if (!localStorage.getItem('theme')) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) {
        document.body.classList.add('dark-mode');
        updateThemeIcon();
        localStorage.setItem('theme', 'dark-mode');
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('userThemePreference')) {
        if (e.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        updateThemeIcon();
    }
});
