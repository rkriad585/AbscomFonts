import { colorPalette } from './palette.js';

export const mainClasses = `
    /*
    framowark:  abscomfonts,
    version:    1.0.0-abs,
    author:     RK Riad Khan,
    twitter/x:  x.com/rk_riad585,
    email:      rkriad585@gmail.com,
    github:     github.com/rkriad585,
    website:    rkstudio.com,
    product by: rkriad585
    */
    @font-face {
        font-family: 'AbsBrands';
        src: url('/fonts/abs-brands-400.woff2') format('woff2'),
        url('/fonts/abs-brands-400.ttf') format('truetype');
    }
    @font-face {
        font-family: 'AbsSolid';
        src: url('/fonts/abs-solid-900.woff2') format('woff2'),
        url('/fonts/abs-solid-900.ttf') format('truetype');
    }
    @font-face {
        font-family: 'AbsRegular';
        src: url('/fonts/abs-regular-400.woff2') format('woff2'),
        url('/fonts/abs-regular-400.ttf') format('truetype');
    }
    @font-face {
        font-family: 'AbsV4Compatibility';
        src: url('/fonts/abs-v4compatibility.woff2') format('woff2'),
        url('/fonts/abs-v4compatibility.ttf') format('truetype');
    }

    .abs {
        display: inline-block;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-rendering: auto;
        line-height: 1;
        font-family: 'AbsSolid',
        'AbsRegular',
        'AbsBrands',
        'AbsV4Compatibility';
    }

    .abs-spin {
        animation: abs-spin 2s infinite linear;
    }
    .abs-bounce {
        animation: abs-bounce 1s infinite ease-in-out;
    }
    .abs-wobble {
        animation: abs-wobble 1s infinite ease-in-out;
    }
    .abs-pulse {
        animation: abs-pulse 1.5s infinite ease-in-out;
    }
    .abs-rgb-change {
        animation: abs-rgb-change 3s infinite linear;
    }
    .abs-shake {
        animation: abs-shake 0.5s infinite ease-in-out;
    }
    .abs-skew {
        animation: abs-skew 2s infinite ease-in-out;
    }
    .abs-flip {
        animation: abs-flip 2s infinite ease-in-out;
    }
    .abs-fade {
        animation: abs-fade 2s infinite ease-in-out;
    }
    .abs-glow-gold {
        animation: abs-glow-gold 2s infinite ease-in-out;
    }
    .abs-zoom {
        animation: abs-zoom 2s infinite ease-in-out;
    }
    .abs-slide {
        animation: abs-slide 2s infinite ease-in-out;
    }
    .abs-slide-up-down {
        animation: abs-slide-up-down 2s infinite ease-in-out;
    }
    .abs-rotate3d {
        animation: abs-rotate3d 3s infinite linear;
    }
    .abs-blink {
        animation: abs-blink 1s infinite ease-in-out;
    }
    .abs-swing {
        animation: abs-swing 1s infinite ease-in-out;
    }
    .abs-float {
        animation: abs-float 2s infinite ease-in-out;
    }
    .abs-jelly {
        animation: abs-jelly 1s infinite ease-in-out;
    }
    .abs-vibrate {
        animation: abs-vibrate 0.1s infinite ease-in-out;
    }
    .abs-rainbow {
        animation: abs-rainbow 5s infinite linear;
    }
    .abs-spin-reverse {
        animation: abs-spin-reverse 2s infinite linear;
    }
    .abs-flip-horizontal {
        animation: abs-flip-horizontal 2s infinite ease-in-out;
    }
    .abs-flip-vertical {
        animation: abs-flip-vertical 2s infinite ease-in-out;
    }
    .abs-rotate-45 {
        animation: abs-rotate-45 2s infinite ease-in-out;
    }
    .abs-rotate-90 {
        animation: abs-rotate-90 2s infinite ease-in-out;
    }
    .abs-rotate-180 {
        animation: abs-rotate-180 2s infinite ease-in-out;
    }
    .abs-rotate-270 {
        animation: abs-rotate-270 2s infinite ease-in-out;
    }
    .abs-rotate-360 {
        animation: abs-rotate-360 2s infinite ease-in-out;
    }
    .abs-rotate-x {
        animation: abs-rotate-x 2s infinite ease-in-out;
    }
    .abs-rotate-y {
        animation: abs-rotate-y 2s infinite ease-in-out;
    }
    .abs-rotate-z {
        animation: abs-rotate-z 2s infinite ease-in-out;
    }
    .abs-rotate-xyz {
        animation: abs-rotate-xyz 2s infinite ease-in-out;
    }
    .abs-rotate-x-90 {
        animation: abs-rotate-x-90 2s infinite ease-in-out;
    }
    .abs-rotate-y-90 {
        animation: abs-rotate-y-90 2s infinite ease-in-out;
    }
    .abs-rotate-z-90 {
        animation: abs-rotate-z-90 2s infinite ease-in-out;
    }
    .abs-rotate-x-180 {
        animation: abs-rotate-x-180 2s infinite ease-in-out;
    }
    .abs-rotate-y-180 {
        animation: abs-rotate-y-180 2s infinite ease-in-out;
    }
    .abs-rotate-z-180 {
        animation: abs-rotate-z-180 2s infinite ease-in-out;
    }
    .abs-rotate-x-270 {
        animation: abs-rotate-x-270 2s infinite ease-in-out;
    }
    .abs-rotate-y-270 {
        animation: abs-rotate-y-270 2s infinite ease-in-out;
    }
    .abs-rotate-z-270 {
        animation: abs-rotate-z-270 2s infinite ease-in-out;
    }
    .abs-rotate-x-360 {
        animation: abs-rotate-x-360 2s infinite ease-in-out;
    }
    .abs-rotate-y-360 {
        animation: abs-rotate-y-360 2s infinite ease-in-out;
    }
    .abs-rotate-z-360 {
        animation: abs-rotate-z-360 2s infinite ease-in-out;
    }
    .abs-rotate-xyz-360 {
        animation: abs-rotate-xyz-360 2s infinite ease-in-out;
    }
    .abs-rotate-xyz-5040 {
        animation: abs-rotate-xyz-5040 2s infinite ease-in-out;
    }

    @keyframes abs-bounce {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    @keyframes abs-pulse {
        0%,
        100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
    }
    @keyframes abs-rgb-change {
        0% {
            color: red;
        }
        50% {
            color: blue;
        }
        100% {
            color: green;
        }
    }
    @keyframes abs-spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes abs-shake {
        0%,
        100% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-5px);
        }
        75% {
            transform: translateX(5px);
        }
    }
    @keyframes abs-fade {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0.5;
        }
    }
    @keyframes abs-flip {
        0%,
        100% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(180deg);
        }
    }
    @keyframes abs-glow-gold {
        0%,
        100% {
            filter: drop-shadow(0 0 5px gold);
        }
        50% {
            filter: drop-shadow(0 0 20px gold);
        }
    }
    @keyframes abs-skew {
        0%,
        100% {
            transform: skew(0deg);
        }
        50% {
            transform: skew(20deg);
        }
    }
    @keyframes abs-wobble {
        0%,
        100% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(-10deg);
        }
        75% {
            transform: rotate(10deg);
        }
    }
    @keyframes abs-zoom {
        0%,
        100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
    }
    
    @keyframes abs-slide {
        0%,
        100% {
            transform: translateX(0);
        }
        50% {
            transform: translateX(20px);
        }
    }
    
    @keyframes abs-slide-up-down {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(20px);
        }
    }
    
    @keyframes abs-rotate3d {
        0% {
            transform: rotate3d(1, 1, 1, 0deg);
        }
        100% {
            transform: rotate3d(1, 1, 1, 360deg);
        }
    }
    
    @keyframes abs-blink {
        0%,
        100% {
            opacity: 1;
        }
        50% {
            opacity: 0;
        }
    }
    
    @keyframes abs-swing {
        0%,
        100% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(15deg);
        }
        75% {
            transform: rotate(-15deg);
        }
    }
    
    @keyframes abs-float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-10px);
        }
    }
    
    @keyframes abs-jelly {
        0%,
        100% {
            transform: scale(1);
        }
        25% {
            transform: scale(1.2, 0.8);
        }
        50% {
            transform: scale(0.8, 1.2);
        }
        75% {
            transform: scale(1.1, 0.9);
        }
    }
    
    @keyframes abs-vibrate {
        0%,
        100% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-5px);
        }
        75% {
            transform: translateX(5px);
        }
    }
    
    @keyframes abs-rainbow {
        0% {
            color: red;
        }
        14% {
            color: orange;
        }
        28% {
            color: yellow;
        }
        42% {
            color: green;
        }
        57% {
            color: blue;
        }
        71% {
            color: indigo;
        }
        85% {
            color: violet;
        }
        100% {
            color: red;
        }
    }
    
    @keyframes abs-spin-reverse {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(-360deg);
        }
    }
    
    @keyframes abs-flip-horizontal {
        0%,
        100% {
            transform: scaleX(1);
        }
        50% {
            transform: scaleX(-1);
        }
    }
    
    @keyframes abs-flip-vertical {
        0%,
        100% {
            transform: scaleY(1);
        }
        50% {
            transform: scaleY(-1);
        }
    }
    
    @keyframes abs-rotate-45 {
        0%,
        100% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(45deg);
        }
    }
    
    @keyframes abs-rotate-90 {
        0%,
        100% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(90deg);
        }
    }
    
    @keyframes abs-rotate-180 {
        0%,
        100% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(180deg);
        }
    }
    
    @keyframes abs-rotate-270 {
        0%,
        100% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(270deg);
        }
    }
    
    @keyframes abs-rotate-360 {
        0%,
        100% {
            transform: rotate(0deg);
        }
        50% {
            transform: rotate(360deg);
        }
    }
    
    
    @keyframes abs-rotate-x {
        0%,
        100% {
            transform: rotateX(0deg);
        }
        50% {
            transform: rotateX(180deg);
        }
    }
    
    @keyframes abs-rotate-y {
        0%,
        100% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(180deg);
        }
    }
    
    @keyframes abs-rotate-z {
        0%,
        100% {
            transform: rotateZ(0deg);
        }
        50% {
            transform: rotateZ(180deg);
        }
    }
    
    @keyframes abs-rotate-xyz {
        0%,
        100% {
            transform: rotate3d(1, 1, 1, 0deg);
        }
        50% {
            transform: rotate3d(1, 1, 1, 180deg);
        }
    }
    
    @keyframes abs-rotate-x-90 {
        0%,
        100% {
            transform: rotateX(0deg);
        }
        50% {
            transform: rotateX(90deg);
        }
    }
    
    @keyframes abs-rotate-y-90 {
        0%,
        100% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(90deg);
        }
    }
    
    @keyframes abs-rotate-z-90 {
        0%,
        100% {
            transform: rotateZ(0deg);
        }
        50% {
            transform: rotateZ(90deg);
        }
    }
    
    @keyframes abs-rotate-x-180 {
        0%,
        100% {
            transform: rotateX(0deg);
        }
        50% {
            transform: rotateX(180deg);
        }
    }
    
    @keyframes abs-rotate-y-180 {
        0%,
        100% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(180deg);
        }
    }
    
    
    @keyframes abs-rotate-z-180 {
        0%,
        100% {
            transform: rotateZ(0deg);
        }
        50% {
            transform: rotateZ(180deg);
        }
    }
    
    
    @keyframes abs-rotate-x-270 {
        0%,
        100% {
            transform: rotateX(0deg);
        }
        50% {
            transform: rotateX(270deg);
        }
    }
    
    @keyframes abs-rotate-y-270 {
        0%,
        100% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(270deg);
        }
    }
    
    @keyframes abs-rotate-z-270 {
        0%,
        100% {
            transform: rotateZ(0deg);
        }
        50% {
            transform: rotateZ(270deg);
        }
    }
    
    @keyframes abs-rotate-x-360 {
        0%,
        100% {
            transform: rotateX(0deg);
        }
        50% {
            transform: rotateX(360deg);
        }
    }
    
    
    
    @keyframes abs-rotate-y-360 {
        0%,
        100% {
            transform: rotateY(0deg);
        }
        50% {
            transform: rotateY(360deg);
        }
    }
    
    @keyframes abs-rotate-z-360 {
        0%,
        100% {
            transform: rotateZ(0deg);
        }
        50% {
            transform: rotateZ(360deg);
        }
    }
    
    @keyframes abs-rotate-xyz-360 {
        0%,
        100% {
            transform: rotate3d(1, 1, 1, 0deg);
        }
        50% {
            transform: rotate3d(1, 1, 1, 360deg);
        }
    }
    
    @keyframes abs-rotate-xyz-5040 {
        0%,
        100% {
            transform: rotate3d(1, 1, 1, 0deg);
        }
        50% {
            transform: rotate3d(1, 1, 1, 5040deg);
        }
    }
    .abs-1x {
        font-size: 1em;
    }
    .abs-2x {
        font-size: 2em;
    }
    .abs-3x {
        font-size: 3em;
    }
    .abs-4x {
        font-size: 4em;
    }
    .abs-5x {
        font-size: 5em;
    }
    .abs-6x {
        font-size: 6em;
    }
    .abs-7x {
        font-size: 7em;
    }
    .abs-8x {
        font-size: 8em;
    }
    .abs-9x {
        font-size: 9em;
    }
    .abs-10x {
        font-size: 10em;
    }
    .abs-11x {
        font-size: 11em;
    }
    .abs-12x {
        font-size: 12em;
    }
    .abs-13x {
        font-size: 13em;
    }
    .abs-14x {
        font-size: 14em;
    }
    .abs-15x {
        font-size: 15em;
    }
    .abs-16x {
        font-size: 16em;
    }
    .abs-relative-2xs {
        font-size: 0.625em;
        line-height: 0.1em;
        vertical-align: 0.225em;
    }
    .abs-relative-3xs {
        font-size: 0.5em;
        line-height: 0.12em;
        vertical-align: 0.3em;
    }
    .abs-relative-xs {
        font-size: 0.75em;
        line-height: 0.08333em;
        vertical-align: 0.125em;
    }
    .abs-relative-sm {
        font-size: 0.875em;
        line-height: 0.07143em;
        vertical-align: 0.05357em;
    }
    .abs-relative-lg {
        font-size: 1.25em;
        line-height: 0.05em;
        vertical-align: -0.075em;
    }
    .abs-relative-xl {
        font-size: 1.5em;
        line-height: 0.04167em;
        vertical-align: -0.125em;
    }
    .abs-relative-2xl {
        font-size: 2em;
        line-height: 0.03125em;
        vertical-align: -0.1875em;
    }
    .abs-relative-3xl {
        font-size: 3em;
        line-height: 0.02083em;
        vertical-align: -0.25em;
    }
    .abs-center {
        text-align: center;
    }
    .abs-center-icon {
        text-align: center;
    }
    .abs-flex {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .abs-block {
        display: block;
        margin: 0 auto;
    }
    .abs-white {
        color: #fff;
    }
    .abs-black {
        color: #000;
    }
    .abs-inherit {
        line-height: inherit;
    }
    .abs-transform-90 {
        transform: rotate(90deg);
    }
    .abs-transform-180 {
        transform: rotate(180deg);
    }
    .abs-transform-270 {
        transform: rotate(270deg);
    }
    .abs-transform-horizontal {
        transform: scaleX(-1);
    }
    .abs-transform-vertical {
        transform: scaleY(-1);
    }
    .abs-transform-both,
    .abs-transform-horizontal.abs-transform-vertical {
        transform: scale(-1);
    }
    .abs-transform-by {
        transform: rotate(0);
    }
    .abs-float-left {
        float: left;
        margin-right: 0.3em;
    }
    .abs-float-right {
        float: right;
        margin-left: 0.3em;
    }

    .abs-border {
        border-radius: 0.1em;
        border: 0.08em solid #eee;
        padding: 0.2em 0.25em 0.15em;
    }
    .abs-z-auto {
        z-index: auto;
    }
    .abs-z-1 {
        z-index: 1;
    }
    .abs-z-5 {
        z-index: 5;
    }
    .abs-z-3 {
        z-index: 3;
    }
    .abs-z-fast {
        z-index: 999999;
    }
    .abs-z-last {
        z-index: -999999;
    }
    .abs-z-2 {
        z-index: 2;
    }
    .abs-z-4 {
        z-index: 4;
    }
    .abs-hover-scale:hover {
        transform: scale(1.05);
        transition: transform 0.2s;
    }
    .abs-version::before {
        content: "Version: 1.0.0-abs";
    }
    .abs-author::before {
        content: "Author: RK";
    }
    .abs-author-info::before {
        content: "framowark:_abscomfonts___version:_1.0.0-abs___author:_RK Riad Khan___email:_rkriad585@gmail.com___github:_github.com/rkriad585___product by:_rkriad585";
    }
    .abs-hover-shadow:hover {
        box-shadow: 0 4px 6px rgba(55, 60, 457, 0.1);
    }
`;

export function generateColorClasses(): string {
  let styles = '';
  for (const [color, shades] of Object.entries(colorPalette)) {
    for (const [shade, hex] of Object.entries(shades)) {
      styles += `.bg-${color}-${shade} { background-color: ${hex}; }\n`;
      styles += `.abs-${color}-${shade} { color: ${hex}; }\n`;
    }
  }
  return styles;
}
