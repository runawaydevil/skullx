// JavaScript files are compiled and minified during the build process to the assets/built folder. See available scripts in the package.json file.

// Import CSS
import "../css/index.css";

// Import JS
import menuOpen from "./menuOpen";
import initHighlight from "./Highlight.js";
import initSocialLinks from "./initSocialLinks.js";

// Call the menu functions
menuOpen();

// Highlight.js
initHighlight();

// Sidebar author social links
initSocialLinks();
