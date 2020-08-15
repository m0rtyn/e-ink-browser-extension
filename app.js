const filters = 'brightness(0.97) grayscale(1) contrast(0.97)'
const pageRootStyles = document.documentElement.style
pageRootStyles.filter += ` ${filters}`;