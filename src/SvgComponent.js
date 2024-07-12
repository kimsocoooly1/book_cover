import React from 'react';

const SvgComponent = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="none"
    viewBox="0 0 58 220"
    className="bookImage_svg_shadow__bZJjP"
  >
    <defs>
      <linearGradient id="BgImageShadow_svg__b" x1="29.178%" x2="0%" y1="50%" y2="50%">
        <stop offset="0%" stopOpacity="0.215"></stop>
        <stop offset="100%" stopOpacity="0.029"></stop>
      </linearGradient>
      <filter id="BgImageShadow_svg__c" width="127%" height="111.5%" x="-13.5%" y="-5.7%" filterUnits="objectBoundingBox">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4"></feGaussianBlur>
      </filter>
      <path id="BgImageShadow_svg__a" d="M0 0h58v220H0z"></path>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="BgImageShadow_svg__d" fill="#fff">
        <use xlinkHref="#BgImageShadow_svg__a"></use>
      </mask>
      <path
        fill="url(#BgImageShadow_svg__b)"
        d="M14 15.424 59.307 5 103 23.437l-6.846 169.206L59.307 214 14 208.602z"
        filter="url(#BgImageShadow_svg__c)"
        mask="url(#BgImageShadow_svg__d)"
        opacity="0.5"
      ></path>
    </g>
  </svg>
);

export default SvgComponent;
