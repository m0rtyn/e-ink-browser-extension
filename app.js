const filters = 'brightness(1) grayscale(1) invert()'
const pageRootStyles = document.documentElement.style
pageRootStyles.filter += ` ${filters}`; 