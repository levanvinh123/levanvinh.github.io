// Vinh Le Van Portfolio - Main JavaScript Functions

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeScrollEffects();
    initializeContactForm();
    initializeProjectModals();
});

// Text animations for hero sections
function initializeAnimations() {
    // Hero title animation
    const heroTitle = document.getElementById('heroTitle');
    if (heroTitle) {
        anime({
            targets: heroTitle,
            opacity: [0, 1],
            translateY: [50, 0],
            duration: 1500,
            delay: 500,
            easing: 'easeOutExpo'
        });
    }

    // Hero subtitle animation
    const heroSubtitle = document.getElementById('heroSubtitle');
    if (heroSubtitle) {
        anime({
            targets: heroSubtitle,
            opacity: [0, 1],
            translateY: [30, 0],
            duration: 1200,
            delay: 800,
            easing: 'easeOutExpo'
        });
    }

    // Hero description animation
    const heroDescription = document.getElementById('heroDescription');
    if (heroDescription) {
        anime({
            targets: heroDescription,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            delay: 1100,
            easing: 'easeOutExpo'
        });
    }

    // Animate achievement numbers if they exist
    const achievementsSection = document.querySelector('.achievements-section');
    if (achievementsSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateNumbers();
                    observer.unobserve(entry.target);
                }
            });
        });
        observer.observe(achievementsSection);
    }
}

// Animate achievement numbers
function animateNumbers() {
    const numbers = document.querySelectorAll('.achievement-number');
    
    numbers.forEach((num, index) => {
        const target = parseInt(num.textContent) || 0;
        
        anime({
            targets: { value: 0 },
            value: target,
            duration: 2000,
            delay: index * 200,
            easing: 'easeOutExpo',
            update: function(anim) {
                const value = Math.round(anim.animatables[0].target.value);
                num.textContent = value;
            }
        });
    });
}

// Smooth scroll effects
function initializeScrollEffects() {
    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.project-card, .contact-card, .social-link').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Contact form functionality
function initializeContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    const submitBtn = document.getElementById('submitBtn');
    const successMessage = document.getElementById('successMessage');
    const errorMessage = document.getElementById('errorMessage');
    const charCount = document.getElementById('charCount');
    const messageTextarea = document.getElementById('message');

    // Character count for message
    if (messageTextarea && charCount) {
        messageTextarea.addEventListener('input', function() {
            const count = this.value.length;
            charCount.textContent = count;
            
            if (count > 1000) {
                this.value = this.value.substring(0, 1000);
                charCount.textContent = 1000;
            }
        });
    }

    // Form validation
    function validateField(field) {
        const value = field.value.trim();
        const errorElement = field.parentNode.querySelector('.error-text');
        let isValid = true;
        let errorMessage = '';

        // Remove existing classes
        field.classList.remove('error', 'success');
        if (errorElement) {
            errorElement.classList.add('hidden');
        }

        // Required field validation
        if (field.hasAttribute('required') && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }

        // Email validation
        if (field.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid email address';
            }
        }

        // Name validation
        if (field.type === 'text' && value && (field.id === 'firstName' || field.id === 'lastName')) {
            const nameRegex = /^[a-zA-Z\s]+$/;
            if (!nameRegex.test(value)) {
                isValid = false;
                errorMessage = 'Please enter a valid name (letters only)';
            }
        }

        // Apply validation styles
        if (value) {
            if (isValid) {
                field.classList.add('success');
            } else {
                field.classList.add('error');
                if (errorElement) {
                    errorElement.textContent = errorMessage;
                    errorElement.classList.remove('hidden');
                }
            }
        }

        return isValid;
    }

    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });

    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();

        // Hide previous messages
        if (successMessage) successMessage.classList.add('hidden');
        if (errorMessage) errorMessage.classList.add('hidden');

        // Validate all fields
        let isFormValid = true;
        inputs.forEach(input => {
            if (!validateField(input)) {
                isFormValid = false;
            }
        });

        // Check privacy checkbox
        const privacyCheckbox = document.getElementById('privacy');
        if (privacyCheckbox && !privacyCheckbox.checked) {
            isFormValid = false;
        }

        if (!isFormValid) {
            return;
        }

        // Show loading state
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.querySelector('span').textContent = 'Sending...';
            submitBtn.querySelector('.loading-spinner').classList.remove('hidden');
        }

        // Simulate form submission
        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Show success message
            if (successMessage) {
                successMessage.classList.remove('hidden');
                anime({
                    targets: successMessage,
                    opacity: [0, 1],
                    translateY: [-20, 0],
                    duration: 500,
                    easing: 'easeOutExpo'
                });
            }

            form.reset();
            if (charCount) charCount.textContent = '0';
            
            // Remove validation classes
            inputs.forEach(input => {
                input.classList.remove('success', 'error');
            });

        } catch (error) {
            // Show error message
            if (errorMessage) {
                errorMessage.classList.remove('hidden');
                anime({
                    targets: errorMessage,
                    opacity: [0, 1],
                    translateY: [-20, 0],
                    duration: 500,
                    easing: 'easeOutExpo'
                });
            }
        } finally {
            // Reset button state
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.querySelector('span').textContent = 'Send Message';
                submitBtn.querySelector('.loading-spinner').classList.add('hidden');
            }
        }
    });
}

// Project modal functionality
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

    // Close modal when clicking outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeProjectModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
            closeProjectModal();
        }
    });
}

// Project data function
function getProjectData(projectId) {
    const projects = {
        'arduino-car': {
            title: 'Arduino Servo-Steered Car',
            content: `
                <div class="mb-8">
                    <h4 class="orbitron text-xl font-bold mb-4 neon-glow">Project Overview</h4>
                    <p class="text-gray-300 mb-6">A custom-built mini car featuring servo-based steering and variable-speed DC motor control. This project demonstrates embedded systems programming and feedback control principles through a practical, hands-on application.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Technical Specifications</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-300">
                            <li>Arduino Uno R3 as the main controller</li>
                            <li>SG90 servo motor for steering mechanism</li>
                            <li>L298N motor driver for DC motor control</li>
                            <li>Serial communication for command input</li>
                            <li>PWM signals for precise speed control</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Key Features</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-300">
                            <li>Real-time steering angle adjustment</li>
                            <li>Variable speed control (0-100%)</li>
                            <li>Obstacle avoidance capability</li>
                            <li>Serial command interface</li>
                            <li>Feedback control algorithms</li>
                        </ul>
                    </div>
                </div>
            `
        },
        'data-logger': {
            title: 'Raspberry Pi Data Logger with Web Dashboard',
            content: `
                <div class="mb-8">
                    <h4 class="orbitron text-xl font-bold mb-4 neon-glow">Project Overview</h4>
                    <p class="text-gray-300 mb-6">A comprehensive IoT data logging system built with Raspberry Pi that records environmental sensor data and provides real-time visualization through a web-based dashboard.</p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h4 class="orbitron text-lg font-bold mb-3 neon-glow">System Architecture</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-300">
                            <li>Raspberry Pi 4 as the central processing unit</li>
                            <li>DHT22 sensors for temperature and humidity</li>
                            <li>BH1750 light intensity sensor</li>
                            <li>SQLite database for data storage</li>
                            <li>Flask web framework for the dashboard</li>
                        </ul>
                    </div>
                    <div>
                        <h4 class="orbitron text-lg font-bold mb-3 neon-glow">Dashboard Features</h4>
                        <ul class="list-disc list-inside space-y-2 text-gray-300">
                            <li>Real-time data visualization with charts</li>
                            <li>Historical data analysis and trends</li>
                            <li>Export functionality for data analysis</li>
                            <li>Mobile-responsive design</li>
                            <li>Automated alerts for threshold values</li>
                        </ul>
                    </div>
                </div>
            `
        }
        // Add more projects as needed
    };

    return projects[projectId] || null;
}

// Utility functions
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Add neon glow effect to text on hover
document.addEventListener('DOMContentLoaded', function() {
    const neonElements = document.querySelectorAll('.neon-glow');
    
    neonElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.textShadow = '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff, 0 0 20px #00d4ff';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.textShadow = '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff';
        });
    });
});

// Smooth page transitions
window.addEventListener('beforeunload', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.3s ease';
});