import React from 'react';
import propTypes from 'prop-types';
import './Button.css';

import styled from 'styled-components';

// importing block sizes obj from commonm styling system
import {
  blockSizeHeights,
  blockSizeWidths,
  fontSizes,
  scaledSizes,
  hoverScaleSizes,
} from '../common/system';

export const StyledButton = styled.button`
  /* removing default stlying for buttons */
  position: relative;
  height: ${blockSizeHeights['lg']};
  width: ${blockSizeWidths['lg']};
  border-radius: 25px;
  border: none;
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  /* changing the default focus and hovers for when the button is clicked on */
  :focus {
    outline: 2.5px dashed #8888b9;
    border-radius: 25px;
  }
  // scale animation when hoverin gover button
  :hover svg {
    transform: ${hoverScaleSizes['lg']};
  }

  ::-moz-focus-inner {
    border: 0;
  }
  ::-moz-focus-inner svg {
    outline: none;
    transition: transform 0.3s linear;
  }

  .button-svg {
    /* */
    position: absolute;
    left: 0;
    top: 0;
    margin: 4px;
    padding-top: 1.6%;
    transform: ${scaledSizes['lg']};
  }
  /* for anime.js */
  .button-svg path {
    stroke-dasharray: 300;
    stroke-dashoffset: 0;
    stroke: ${({ color }) => color};
  }

  /* span styling */

  @media (min-width: 340px) {
    .button-span {
      font-size: ${({ fontSize }) => fontSizes[fontSize]};
      font-weight: 400;
      color: #555;
    }
  }
`;

const Button = React.forwardRef(function Button(props, ref) {
  const { children, fontSize, ...otherProps } = props;
  return (
    <StyledButton
      data-testid="primary-button"
      ref={ref}
      fontSize={fontSize}
      {...otherProps}
    >
      <svg className="button-svg">
        <path
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          d="M8.64405 27.3374C7.96446 38.7346 7 59.5761 7 70.9819C7 70.9819 7 70.9819 7 83.0218C7.98013 86.9471 8.1523 95.9527 12.4558 97.8486C20.2486 101.282 29.6879 99.5766 37.7047 99.5766C47.7256 99.5766 60.0906 100.009 71.2747 99.5766C113.073 97.9592 148.436 99.5766 191.024 99.5766C203.551 99.5766 212.569 98.5732 229.104 98.5732 M11 3.2579C68.1175 3.2579 80.6452 2.25472 138.265 4.20542C149.288 4.20542 204.417 3.29153 215.371 4.20548C222.212 4.7763 223.693 4.53473 230.458 5.76615C241.797 7.83045 236.971 23.3243 236.971 29.8459C236.461 37.504 235.969 49.9123 235.969 57.9389C235.969 65.4638 235.969 73.2029 235.969 81.5169"
        ></path>
      </svg>
      <span className="button-span">{children}</span>
    </StyledButton>
  );
});

// default props
Button.defaultProps = {
  color: '#ff38c0',
  type: 'button',
  fontSize: 'md',
  primary: false,
};

// prop types
Button.propTypes = {
  type: propTypes.string,
  color: propTypes.string,
  fontSize: propTypes.oneOf(['sm', 'md', 'lg']),
  children: propTypes.node,
};

export default Button;
