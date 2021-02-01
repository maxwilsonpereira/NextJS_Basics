// TROUBLESHOOT with IMAGES:
// Error: Module parse failed: Unexpected character '�' (1:0)
// SOLUTION: CREATE THE next.config.js FILE LIKE THIS:
// https://www.npmjs.com/package/next-images
// npm i next-images
const withImages = require("next-images");
module.exports = withImages();
