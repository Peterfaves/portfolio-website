// ===== MOBILE MENU TOGGLE =====
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

// Toggle mobile menu on click
menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x');
});

// Close mobile menu when clicking on a navigation link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    });
});

// ===== HEADER SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('scrolled', window.scrollY > 100);
});

// ===== ACTIVE NAVIGATION LINK ON SCROLL =====
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== SMOOTH SCROLL FOR ALL ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
});

// ===== TYPING EFFECT FOR HOME SECTION (OPTIONAL) =====
const typingText = document.querySelector('.home-content h3 span');
const textToType = 'Web Developer';
let charIndex = 0;

function typeText() {
    if (charIndex < textToType.length) {
        typingText.textContent += textToType.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 150);
    }
}

// Start typing effect when page loads
window.addEventListener('load', () => {
    typingText.textContent = '';
    typeText();
});
*/

// ===== FORM VALIDATION AND SUBMISSION =====
const contactForm = document.querySelector('.contact form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(contactForm);
        const name = formData.get('name') || contactForm.querySelector('input[type="text"]').value;
        const email = formData.get('email') || contactForm.querySelector('input[type="email"]').value;
        const phone = formData.get('phone') || contactForm.querySelector('input[type="tel"]').value;
        const subject = formData.get('subject') || contactForm.querySelectorAll('input[type="text"]')[1].value;
        const message = formData.get('message') || contactForm.querySelector('textarea').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill in all required fields!');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address!');
            return;
        }
        
        // If validation passes, you can submit the form
        // For now, we'll just show a success message
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
        
        // TODO: Add your form submission logic here
        // ===== EMAILJS FORM SUBMISSION =====
        const contactForm = document.querySelector('.contact form');
        
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const submitBtn = contactForm.querySelector('input[type="submit"]');
                const originalText = submitBtn.value;
                submitBtn.value = 'Sending...';
                submitBtn.disabled = true;
                
                // EmailJS configuration
                const serviceID = 'YOUR_SERVICE_ID'; // e.g., 'service_abc123'
                const templateID = 'YOUR_TEMPLATE_ID'; // e.g., 'template_xyz789'
                
                // Send email
                emailjs.sendForm(serviceID, templateID, contactForm)
                    .then(() => {
                        alert('✅ Message sent successfully! I will get back to you soon.');
                        contactForm.reset();
                    })
                    .catch((error) => {
                        alert('❌ Oops! Something went wrong. Please try again.');
                        console.error('EmailJS Error:', error);
                    })
                    .finally(() => {
                        submitBtn.value = originalText;
                        submitBtn.disabled = false;
                    });
            });
        }

// ===== SCROLL TO TOP BUTTON (OPTIONAL) =====
// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '<i class="bx bx-up-arrow-alt"></i>';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary), var(--accent));
    border: none;
    border-radius: 50%;
    color: white;
    font-size: 24px;
    cursor: pointer;
    display: none;
    z-index: 999;
    transition: all 0.3s;
`;

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
});

// Scroll to top when clicked
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
*/

// ===== PROJECT CARDS HOVER EFFECT =====
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== SERVICE BOXES ANIMATION =====
const serviceBoxes = document.querySelectorAll('.service-box');

serviceBoxes.forEach((box, index) => {
    box.style.animationDelay = `${index * 0.1}s`;
});

// ===== CONSOLE MESSAGE =====
console.log('%c👋 Welcome to my portfolio!', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cLooking for a web developer? Let\'s work together!', 'color: #ec4899; font-size: 14px;');

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== PREVENT FORM RESUBMISSION ON REFRESH =====
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
