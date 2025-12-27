// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import initHighlight from "./Highlight.js";
import initTocBot from "./tocbot.js";
import initSocialLinks from "./initSocialLinks.js";


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
