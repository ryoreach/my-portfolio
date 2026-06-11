        // Mobile nav toggle
        const toggle = document.getElementById('navToggle');
        const navLinks = document.getElementById('navLinks');

        toggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        function closeMenu() {
            navLinks.classList.remove('open');
        }