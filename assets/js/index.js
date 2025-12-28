// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// #region agent log
console.log('[DEBUG] JS entry point loaded');
// #endregion

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import initHighlight from "./Highlight.js";
import initTocBot from "./tocbot.js";
import initSocialLinks from "./initSocialLinks.js";
import initThemeToggle from "./themeToggle.js";


// import infiniteScroll from "./infiniteScroll";


// Call the menu and infinite scroll functions
menuOpen();
// infiniteScroll();

// Highlight.js
initHighlight();

// Tocbot
initTocBot();

// Sidebar author social links
initSocialLinks();

// Theme toggle
// #region agent log
try {
    console.log('[DEBUG] Calling initThemeToggle');
    initThemeToggle();
    console.log('[DEBUG] initThemeToggle completed');
} catch(e) {
    console.error('[DEBUG] Error in initThemeToggle', {error: e.message, stack: e.stack});
}
// #endregion
