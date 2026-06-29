import { abscomIcon, colorPalette, generateColorClasses, mainClasses, abs_info } from 'abscomfonts';

const iconKeys = Object.keys(abscomIcon);
console.log('Icon count:', iconKeys.length);
console.log('Heart:', abscomIcon['heart']);
console.log('Twitter:', abscomIcon['twitter']);

const palette = Object.keys(colorPalette);
console.log('Palette colors:', palette.join(', '));

const allCSS = mainClasses + generateColorClasses();
console.log('Total CSS size:', allCSS.length, 'chars');

abs_info();
