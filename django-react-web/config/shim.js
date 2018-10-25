/* React components depedns on requestAnimationFrame. Make sure you laod a polyfil in older browsers */
global.requestAnimationFrame = (callback) => {
    setTimeout(callback, 0);
};