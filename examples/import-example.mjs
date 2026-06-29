import { abscomIcon, colorPalette, generateColorClasses, abs_info } from 'abscomfonts';

console.log('Available icons:', Object.keys(abscomIcon).length);
console.log('Heart icon codepoint:', abscomIcon.heart);
console.log('Colors:', Object.keys(colorPalette));

const colorCSS = generateColorClasses();
console.log('Generated color classes length:', colorCSS.length);

abs_info();
