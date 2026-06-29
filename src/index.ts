import { abscomIcon } from './icons.js';
import { colorPalette } from './palette.js';
import { mainClasses, generateColorClasses } from './css.js';
import { abs_info } from './info.js';

export { abscomIcon, colorPalette, mainClasses, generateColorClasses, abs_info };

function init(): void {
  if (typeof document === 'undefined') return;

  const colorClasses = generateColorClasses();
  const styleElement = document.createElement('style');
  let cssClass = mainClasses + colorClasses;

  for (const [name, code] of Object.entries(abscomIcon)) {
    cssClass += `
      .abs.abs-${name}::before { content: "\\${code}"; }
    `;
  }

  styleElement.textContent = cssClass;
  document.head.appendChild(styleElement);

  const utilityClassPrefixes = new Set([
    'abs-white', 'abs-black', 'abs-inherit',
    'abs-1x', 'abs-2x', 'abs-3x', 'abs-4x', 'abs-5x', 'abs-6x',
    'abs-7x', 'abs-8x', 'abs-9x', 'abs-10x', 'abs-11x', 'abs-12x',
    'abs-13x', 'abs-14x', 'abs-15x', 'abs-16x',
    'abs-relative-2xs', 'abs-relative-3xs', 'abs-relative-xs',
    'abs-relative-sm', 'abs-relative-lg', 'abs-relative-xl',
    'abs-relative-2xl', 'abs-relative-3xl',
    'abs-center', 'abs-center-icon', 'abs-flex', 'abs-block',
    'abs-float-left', 'abs-float-right',
    'abs-border',
    'abs-z-auto', 'abs-z-1', 'abs-z-2', 'abs-z-3', 'abs-z-4', 'abs-z-5',
    'abs-z-fast', 'abs-z-last',
    'abs-hover-scale', 'abs-hover-shadow',
    'abs-version', 'abs-author', 'abs-author-info',
    'abs-transform-90', 'abs-transform-180', 'abs-transform-270',
    'abs-transform-horizontal', 'abs-transform-vertical',
    'abs-transform-both',
    'abs-xs', 'abs-sm',
  ]);

  function isUtilityClass(cls: string): boolean {
    if (utilityClassPrefixes.has(cls)) return true;
    if (/^abs-(spin|spin-reverse|bounce|wobble|pulse|rgb-change|shake|skew|flip|fade|glow-gold|zoom|slide|slide-up-down|rotate3d|blink|swing|float|jelly|vibrate|rainbow|flip-horizontal|flip-vertical)$/.test(cls)) return true;
    if (/^abs-(rotate-(45|90|180|270|360|x|y|z|xyz)(-(90|180|270|360|5040))?)$/.test(cls)) return true;
    if (/^abs-[a-z]+-(50|100|200|300|400|500|600|700|800|900|950)$/.test(cls)) return true;
    if (/^bg-[a-z]+-(50|100|200|300|400|500|600|700|800|900|950)$/.test(cls)) return true;
    return false;
  }

  function isIconClass(cls: string): boolean {
    const name = cls.replace(/^abs-/, '');
    return name in abscomIcon;
  }

  const validateElements = () => {
    const elements = document.querySelectorAll('[class*="abs-"], .abs');

    elements.forEach(element => {
      const isIconElement = element.tagName === 'I';
      const hasAbsClass = element.classList.contains('abs');

      const iconClasses = [...element.classList].filter(c =>
        (c.startsWith('abs-') || c === 'abs') && !isUtilityClass(c)
      );
      const hasIconClass = iconClasses.length > 0;
      const hasActualIconName = [...element.classList].some(c => c.startsWith('abs-') && isIconClass(c));

      if (isIconElement && hasActualIconName && !hasAbsClass) {
        console.warn('ABSCOM: Please [added] missing abs class to element:', element);
      }

      if (!isIconElement && hasActualIconName) {
        console.error('ABSCOM: Icon classes used on non icon as [ i class=abs abs-[icon-name] ] element:', element);
      }

      if (!isIconElement && hasIconClass) {
        element.classList.remove(...iconClasses);
        console.error('ABSCOM: Blocked icon classes from', element, 'Use .abs for unblock.');
      }

      if (hasAbsClass && !hasIconClass && !hasActualIconName) {
        const hasOnlyUtility = [...element.classList].every(c => !c.startsWith('abs-') || c === 'abs' || isUtilityClass(c));
        if (!hasOnlyUtility) {
          console.warn('ABSCOM: abs class used without abs-[icon-name] classes on:', element);
        }
      }
    });
  };

  validateElements();

  if (document.body) {
    const observer = new MutationObserver(validateElements);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['class']
    });
  }
}

if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}
