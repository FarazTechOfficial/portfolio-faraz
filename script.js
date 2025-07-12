// Dark Mode Toggle
        const darkModeToggle = document.getElementById('darkModeToggle');
        const body = document.body;
        const logoImage = document.getElementById('logoImage'); // Get the logo element

        function setDarkMode(isDark) {
            if (isDark) {
                body.classList.add('dark');
                localStorage.setItem('darkMode', 'enabled');
                darkModeToggle.querySelector('i').className = 'fas fa-sun text-white';
                if (logoImage) logoImage.src = '1.png'; // Set dark mode logo
            } else {
                body.classList.remove('dark');
                localStorage.setItem('darkMode', 'disabled');
                darkModeToggle.querySelector('i').className = 'fas fa-moon';
                if (logoImage) logoImage.src = '2.png'; // Set light mode logo
            }
        }

        darkModeToggle.addEventListener('click', () => setDarkMode(!body.classList.contains('dark')));

        // Check for saved theme preference or system preference
        if (localStorage.getItem('darkMode') === 'enabled' || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('darkMode') !== 'disabled')) {
            setDarkMode(true);
        } else {
            setDarkMode(false);
        }

        // Mobile Menu Toggle
        const mobileMenuButton = document.getElementById('mobileMenuButton');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuButton.addEventListener('click', () => { mobileMenu.classList.toggle('max-h-0'); mobileMenu.classList.toggle('max-h-screen'); });
        mobileMenu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { mobileMenu.classList.add('max-h-0'); mobileMenu.classList.remove('max-h-screen'); }));

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetElement = document.querySelector(this.getAttribute('href'));
                if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth' }); }
            });
        });

        // Typing effect
        const typedTextSpan = document.getElementById('typed-text');
        const textArray = ["Backend Developer", "Spring Boot Developer", "Enterprise Application Developer"];
        let textArrayIndex = 0, charIndex = 0, isDeleting = false;
        function type() {
            if (!typedTextSpan) return;
            const currentText = textArray[textArrayIndex];
            let typeSpeed = isDeleting ? 75 : 150;
            typedTextSpan.textContent = currentText.substring(0, charIndex);
            if (!isDeleting && charIndex < currentText.length) { charIndex++; }
            else if (isDeleting && charIndex > 0) { charIndex--; }
            else { isDeleting = !isDeleting; if (!isDeleting) { textArrayIndex = (textArrayIndex + 1) % textArray.length; } typeSpeed = isDeleting ? 75 : 2000; }
            setTimeout(type, typeSpeed);
        }
        document.addEventListener("DOMContentLoaded", () => setTimeout(type, 1000));