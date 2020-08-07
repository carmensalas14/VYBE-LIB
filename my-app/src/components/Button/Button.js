import React from 'react';
import './Button.css';

const Button = ({ children, ...rest }) => {
  return (
    <button className="primaryButton" {...rest}>
      <svg id="button-svg">
        <path
          stroke="#7c85f1"
          stroke-width="6"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
          d="M8.64405 27.3374C7.96446 38.7346 7 59.5761 7 70.9819C7 70.9819 7 70.9819 7 83.0218C7.98013 86.9471 8.1523 95.9527 12.4558 97.8486C20.2486 101.282 29.6879 99.5766 37.7047 99.5766C47.7256 99.5766 60.0906 100.009 71.2747 99.5766C113.073 97.9592 148.436 99.5766 191.024 99.5766C203.551 99.5766 212.569 98.5732 229.104 98.5732 M11 3.2579C68.1175 3.2579 80.6452 2.25472 138.265 4.20542C149.288 4.20542 204.417 3.29153 215.371 4.20548C222.212 4.7763 223.693 4.53473 230.458 5.76615C241.797 7.83045 236.971 23.3243 236.971 29.8459C236.461 37.504 235.969 49.9123 235.969 57.9389C235.969 65.4638 235.969 73.2029 235.969 81.5169"
        ></path>
      </svg>
      <span class="button-span">{children}</span>
    </button>
  );
};

export default Button;
