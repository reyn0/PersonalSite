// Retro JavaScript Effects

// Global variables for retro effects
let cursorTrail = [];
let isRetroMode = false;

// Function declarations that need to be available globally
function handleMouseMove(e) {
    if (!isRetroMode) return;
    if (Math.random() > 0.95) { // Only create sparkles occasionally
        createSparkle(e.pageX, e.pageY);
    }
}

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.fontSize = '20px';
    sparkle.textContent = ['✨', '⭐', '💫', '🌟'][Math.floor(Math.random() * 4)];
    sparkle.style.zIndex = '9999';
    sparkle.style.animation = 'sparkleFloat 1s ease-out forwards';
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 1000);
}

function handleCursorTrail(e) {
    if (!isRetroMode) return;
    
    if (cursorTrail.length > 5) {
        const old = cursorTrail.shift();
        if (old && old.parentNode) {
            old.remove();
        }
    }
    
    if (Math.random() > 0.8) {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '5px';
        trail.style.height = '5px';
        trail.style.borderRadius = '50%';
        trail.style.background = ['#FF00FF', '#00FFFF', '#FFFF00', '#00FF00'][Math.floor(Math.random() * 4)];
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '9998';
        trail.style.animation = 'fadeOut 0.5s forwards';
        
        document.body.appendChild(trail);
        cursorTrail.push(trail);
        
        setTimeout(() => {
            if (trail.parentNode) {
                trail.remove();
            }
        }, 500);
    }
}

function addFloatingElements() {
    // Remove existing floating elements first
    const existingElements = document.querySelectorAll('.floating-element');
    existingElements.forEach(el => el.remove());
    
    const symbols = ['⭐', '💫', '✨', '🌟', '💻', '📀', '💾'];
    
    for (let i = 0; i < 10; i++) {
        const element = document.createElement('div');
        element.className = 'floating-element';
        element.textContent = symbols[Math.floor(Math.random() * symbols.length)];
        element.style.position = 'fixed';
        element.style.left = Math.random() * 100 + '%';
        element.style.top = Math.random() * 100 + '%';
        element.style.fontSize = '20px';
        element.style.opacity = '0.3';
        element.style.pointerEvents = 'none';
        element.style.zIndex = '-1';
        element.style.animation = `float ${3 + Math.random() * 3}s ease-in-out infinite`;
        element.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(element);
    }
}

// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const themeStylesheet = document.getElementById('theme-stylesheet');
const themeText = document.getElementById('themeText');
const themeIcon = document.getElementById('themeIcon');

console.log('Theme toggle elements:', { themeToggle, themeStylesheet, themeText, themeIcon });

// Check for saved theme preference, default to modern
const currentTheme = localStorage.getItem('theme') || 'modern';
isRetroMode = currentTheme === 'retro';
console.log('Current theme:', currentTheme, 'isRetroMode:', isRetroMode);
setTheme(currentTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        console.log('Theme toggle clicked!');
        const currentHref = themeStylesheet.getAttribute('href');
        console.log('Current stylesheet:', currentHref);
        const newTheme = currentHref === 'style-modern.css' ? 'retro' : 'modern';
        console.log('Switching to theme:', newTheme);
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        isRetroMode = newTheme === 'retro';
        
        // Add a fun animation on toggle
        this.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            this.style.transform = 'rotate(0deg)';
        }, 300);
    });
} else {
    console.error('Theme toggle button not found!');
}

function setTheme(theme) {
    console.log('setTheme called with:', theme);
    if (theme === 'retro') {
        themeStylesheet.setAttribute('href', 'style.css');
        themeText.textContent = 'Modern Mode';
        themeIcon.textContent = '✨';
        isRetroMode = true;
        console.log('Retro theme applied, stylesheet set to style.css');
        // Add retro effects
        enableRetroEffects();
        // Restore emojis
        restoreEmojis();
    } else {
        themeStylesheet.setAttribute('href', 'style-modern.css');
        themeText.textContent = 'Retro Mode';
        themeIcon.textContent = '🎨';
        isRetroMode = false;
        console.log('Modern theme applied, stylesheet set to style-modern.css');
        // Remove retro effects
        disableRetroEffects();
        // Remove emojis
        removeEmojis();
    }
}

// Function to enable retro effects
function enableRetroEffects() {
    // Re-enable event listeners for retro effects
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleCursorTrail);
    
    // Add floating elements
    addFloatingElements();
}

// Function to disable retro effects
function disableRetroEffects() {
    // Remove event listeners
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mousemove', handleCursorTrail);
    
    // Remove all floating elements
    const floatingElements = document.querySelectorAll('.floating-element');
    floatingElements.forEach(el => el.remove());
    
    // Remove all cursor trail elements
    const trailElements = document.querySelectorAll('.cursor-trail');
    trailElements.forEach(el => el.remove());
    
    // Clear cursor trail array
    cursorTrail.forEach(trail => {
        if (trail && trail.parentNode) {
            trail.remove();
        }
    });
    cursorTrail = [];
}

// Function to remove emojis from text content
function removeEmojis() {
    // Emoji regex pattern
    const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{2600}-\u{27BF}]|[\u{2B50}]|[\u{231A}-\u{23FF}]|[\u{FE00}-\u{FEFF}]|[\u{1F1E6}-\u{1F1FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2700}-\u{27BF}]|[\u{1F900}-\u{1F9FF}]|[\u{1FA70}-\u{1FAFF}]/gu;
    
    // Target all text elements
    const selectors = [
        'h2', 'h3', 'p b', '#experience h3', '#education h3', 
        '#skills td b', '#contact a', 'li'
    ];
    
    selectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
            // Store original HTML for retro mode
            if (!el.dataset.originalHtml) {
                el.dataset.originalHtml = el.innerHTML;
            }
            // Remove emojis from text content
            const walker = document.createTreeWalker(
                el,
                NodeFilter.SHOW_TEXT,
                null
            );
            
            const textNodes = [];
            while (walker.nextNode()) {
                textNodes.push(walker.currentNode);
            }
            
            textNodes.forEach(node => {
                if (!node.parentElement.closest('img')) {
                    node.textContent = node.textContent.replace(emojiRegex, '').trim();
                }
            });
        });
    });
}

// Function to restore emojis
function restoreEmojis() {
    const elements = document.querySelectorAll('[data-original-html]');
    elements.forEach(el => {
        el.innerHTML = el.dataset.originalHtml;
    });
}

// Display last modified date
document.addEventListener('DOMContentLoaded', function() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const today = new Date();
        const dateString = today.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        const timeString = today.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit'
        });
        lastModifiedElement.textContent = `${dateString} at ${timeString}`;
    }

    // Smooth scroll for navigation
    const buttons = document.querySelectorAll('a[href^="#"]');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Experience Section Toggle
    const toggleBtn = document.getElementById('toggleExperience');
    const moreExperience = document.getElementById('moreExperience');
    const toggleIcon = document.getElementById('toggleIcon');
    
    if (toggleBtn && moreExperience) {
        toggleBtn.addEventListener('click', function() {
            if (moreExperience.classList.contains('experience-collapsed')) {
                // Expand
                moreExperience.classList.remove('experience-collapsed');
                moreExperience.classList.add('experience-expanded');
                toggleBtn.classList.add('expanded');
                toggleBtn.innerHTML = '<span id="toggleIcon">▼</span> Show Less Experience';
            } else {
                // Collapse
                moreExperience.classList.remove('experience-expanded');
                moreExperience.classList.add('experience-collapsed');
                toggleBtn.classList.remove('expanded');
                toggleBtn.innerHTML = '<span id="toggleIcon">▼</span> Show More Experience (6 more positions)';
                
                // Scroll to experience section
                document.getElementById('experience').scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    }

    // Random retro phrases for alert (optional easter egg)
    const retroPhrases = [
        "You've got mail! 📧",
        "Welcome to the World Wide Web! 🌐",
        "Loading... Please wait... ⏳",
        "This page is optimized for 800x600 resolution! 💾",
        "Don't forget to bookmark this page! 📌"
    ];

    // Easter egg: Click the header multiple times
    let clickCount = 0;
    const header = document.querySelector('.header');
    if (header) {
        header.addEventListener('click', function() {
            clickCount++;
            if (clickCount === 5) {
                const randomPhrase = retroPhrases[Math.floor(Math.random() * retroPhrases.length)];
                alert(randomPhrase);
                clickCount = 0;
            }
        });
    }

    // Add sparkle animation style if not exists
    if (!document.querySelector('#sparkleStyle')) {
        const style = document.createElement('style');
        style.id = 'sparkleStyle';
        style.textContent = `
            @keyframes sparkleFloat {
                0% {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }
                100% {
                    opacity: 0;
                    transform: translateY(-30px) scale(0.5);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Add fadeOut animation for cursor trail
    if (!document.querySelector('#cursorTrailStyle')) {
        const style = document.createElement('style');
        style.id = 'cursorTrailStyle';
        style.textContent = `
            @keyframes fadeOut {
                to {
                    opacity: 0;
                    transform: scale(0);
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Console message for fellow developers
    console.log('%c🌟 Welcome to the Retro Web! 🌟', 'font-size: 20px; color: #FF00FF; font-weight: bold; text-shadow: 2px 2px #00FFFF;');
    console.log('%cIf you\'re reading this, you\'re awesome! 😎', 'font-size: 14px; color: #0000FF;');
    console.log('%cBuilt with 💾 diskettes and 📠 fax machines', 'font-size: 12px; color: #666;');

    // Add floating elements only in retro mode
    if (isRetroMode) {
        addFloatingElements();
    } else {
        // Remove emojis on initial load if in modern mode
        removeEmojis();
    }
});
