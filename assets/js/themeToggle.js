// Theme Toggle Functionality
export default function initThemeToggle() {
    // #region agent log
    console.log('[DEBUG] initThemeToggle called');
    // #endregion
    const toggleButton = document.querySelector('.gh-theme-toggle');
    // #region agent log
    console.log('[DEBUG] Toggle button search', {buttonFound: !!toggleButton});
    // #endregion
    if (!toggleButton) return;

    // Get current theme
    function getCurrentTheme() {
        return document.documentElement.getAttribute('data-theme') || 
               (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    }

    // Set theme
    function setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateToggleIcon(theme);
    }

    // Toggle theme
    function toggleTheme() {
        const currentTheme = getCurrentTheme();
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    }

    // Update toggle icon visibility
    function updateToggleIcon(theme) {
        const sunIcon = toggleButton.querySelector('.gh-theme-toggle-icon-sun');
        const moonIcon = toggleButton.querySelector('.gh-theme-toggle-icon-moon');
        
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'block';
                moonIcon.style.display = 'none';
            } else {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'block';
            }
        }
    }

    // Initialize icon on load
    const currentTheme = getCurrentTheme();
    updateToggleIcon(currentTheme);

    // Listen for system theme changes (if no manual preference)
    if (!localStorage.getItem('theme')) {
        window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                setTheme(e.matches ? 'light' : 'dark');
            }
        });
    }

    // Toggle on button click
    toggleButton.addEventListener('click', toggleTheme);
}

