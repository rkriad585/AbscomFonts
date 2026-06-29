const { abscomIcon, colorPalette, abs_info } = require('abscomfonts');

console.log('Available icons:', Object.keys(abscomIcon).length);
console.log('Heart icon codepoint:', abscomIcon.heart);
console.log('Colors:', Object.keys(colorPalette));

abs_info();
