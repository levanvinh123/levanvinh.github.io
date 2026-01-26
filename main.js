// Vinh Le Van Portfolio - Enhanced Interactive JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // 1. Core Initializations
    initializeAnimations();
    initializeNavbarLogic();     // New: Handles the nav shrinking/blurring
    initializeScrollSpy();       // New: Highlights nav links as you scroll
    initializeTiltEffect();      // New: 3D Tilt for cards
    initializeContactForm();
    initializeProjectModals();
    
    // 2. Add smooth scrolling to all anchor links with offset correction
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            
            if (target) {
                // Calculate offset to account for fixed header
                const headerOffset = 80; 
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});

// ==========================================
// 1. Navigation & Scroll Logic (The Smooth Stuff)
// ==========================================

function initializeNavbarLogic() {
    const nav = document.getElementById('mainNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Scrolled State: Black background, blur, smaller padding
            nav.classList.remove('bg-transparent', 'py-6');
            nav.classList.add('bg-black/90', 'backdrop-blur-md', 'py-3', 'shadow-lg', 'border-b', 'border-gray-800');
        } else {
            // Top State: Transparent, larger padding
            nav.classList.add('bg-transparent', 'py-6');
            nav.classList.remove('bg-black/90', 'backdrop-blur-md', 'py-3', 'shadow-lg', 'border-b', 'border-gray-800');
        }
    });
}

function initializeScrollSpy() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // Activate link when section is 1/3 way up the screen
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('text-neon-blue', 'font-bold');
            link.classList.add('text-gray-300');
            
            if (link.getAttribute('href').includes(current)) {
                link.classList.remove('text-gray-300');
                link.classList.add('text-neon-blue', 'font-bold');
            }
        });
    });
}

// ==========================================
// 2. Interactive 3D Tilt Effect
// ==========================================

function initializeTiltEffect() {
    // Select both interest cards and potential project cards
    const cards = document.querySelectorAll('.philosophy-card, .social-link, .timeline-item');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Calculate rotation based on mouse position
            const xRotation = -((y - rect.height / 2) / 20); // Rotate X axis
            const yRotation = (x - rect.width / 2) / 20;  // Rotate Y axis
            
            // Apply the transform
            card.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
            card.style.transition = 'transform 0.1s ease';
        });

        card.addEventListener('mouseleave', () => {
            // Reset position when mouse leaves
            card.style.transform = 'perspective(1000px) scale(1) rotateX(0) rotateY(0)';
            card.style.transition = 'transform 0.5s ease';
        });
    });
}

// ==========================================
// 3. Animations (Anime.js)
// ==========================================

function initializeAnimations() {
    // Hero Animations
    const timeline = anime.timeline({
        easing: 'easeOutExpo',
        duration: 1000
    });

    timeline
    .add({
        targets: '#home-section h2',
        opacity: [0, 1],
        translateY: [50, 0],
        delay: 300
    })
    .add({
        targets: '#home-section p',
        opacity: [0, 1],
        translateY: [30, 0],
    }, '-=600') // Overlap previous animation
    .add({
        targets: '.cute-arrow-line',
        width: ['0px', '100px'], // Assuming you style this in CSS
        opacity: [0, 1],
        duration: 1500
    }, '-=400');

    // Scroll Observer for Fade-In elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, { threshold: 0.1 });

    // Add a class in your CSS for .animate-fade-in-up or use anime.js on scroll
    document.querySelectorAll('.timeline-item, .philosophy-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`; // Staggered delay
        
        // Simple scroll trigger
        new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }).observe(el);
    });
}

// ==========================================
// 4. Contact Form Logic (Preserved & Cleaned)
// ==========================================

function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        const submitBtn = document.getElementById('submitBtn');
        const originalText = submitBtn.innerHTML;
        
        // Loading State
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';

        // Simulate sending (Replace with real backend later)
        await new Promise(resolve => setTimeout(resolve, 1500));

        // Success State
        submitBtn.innerHTML = 'Message Sent!';
        submitBtn.classList.add('text-green-400', 'border-green-400');
        form.reset();

        // Reset button after 3 seconds
        setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalText;
            submitBtn.classList.remove('text-green-400', 'border-green-400');
        }, 3000);
    });
}

// ==========================================
// 5. Modals (Preserved)
// ==========================================

function initializeProjectModals() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    window.openProjectModal = function(projectId) {
        const project = getProjectData(projectId);
        if (project) {
            document.getElementById('modalTitle').textContent = project.title;
            document.getElementById('modalContent').innerHTML = project.content;
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }
    };

    window.closeProjectModal = function() {
        modal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    };

    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeProjectModal();
    });
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeProjectModal();
    });
}

function getProjectData(projectId) {
    const projects = {
        'arduino-car': {
            title: 'Arduino Servo-Steered Car',
            content: `<p class="text-gray-300">Detailed description of the car project...</p>`
        },
        'data-logger': {
            title: 'Raspberry Pi Data Logger',
            content: `<p class="text-gray-300">Detailed description of the Pi project...</p>`
        }
    };
    return projects[projectId];
}
// Add a "press" animation when clicking the cards
document.querySelectorAll('.philosophy-card').forEach(card => {
    card.addEventListener('mousedown', () => {
        anime({
            targets: card,
            scale: 0.95, // Shrinks slightly when pressed
            duration: 100,
            easing: 'easeOutQuad'
        });
    });

    card.addEventListener('mouseup', () => {
        anime({
            targets: card,
            scale: 1.02, // Returns to hover scale
            duration: 250,
            easing: 'easeOutElastic(1, .6)'
        });
    });
});
