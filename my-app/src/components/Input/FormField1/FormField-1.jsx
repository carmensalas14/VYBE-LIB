import React from 'react';
// import './FormField-1.css';
import propTypes from 'prop-types';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;450;500;600;700;800;900&display=swap');

  position: relative;
  width: 250px;
  height: 110px;

  #formfield1-svg {
    /* */
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    margin-top: 28px;
  }

  #formfield1-svg-path {
    stroke: ${({ color }) => color};
  }

  .FormField1-input {
    height: 20px;
    font-size: 20px;
    text-align: center;
    border: 0;
    background: linear-gradient(rgb(188, 153, 216, 0), rgb(188, 153, 216, 0));
    width: 90%;
    padding: 8px 0 5px 0;
    font-family: 'Inter', sans-serif;
    font-weight: 450;
    color: #555;
  }

  .FormField1-input:focus {
    border: none;
    outline: none;
    background: linear-gradient(rgb(188, 153, 216, 0.2), rgb(188, 153, 216, 0));
  }
`;

const FormField1 = React.forwardRef(function FormField1(props, ref) {
  const { ...otherProps } = props;
  return (
    <StyledDiv {...otherProps}>
      <svg
        id="formfield1-svg"
        width="250"
        height="14"
        viewBox="0 0 215 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="formfield1-svg-path"
          d="M2 10.2045C13.9737 10.378 26.5386 11.983 38.2926 8.97613C40.8256 8.32814 45.0743 5.38044 42.201 2.66681C41.3829 1.89418 38.3087 1.7578 37.4271 2.44347C34.7009 4.56385 35.9441 7.62899 37.9576 9.45073C43.5495 14.5101 56.2782 9.55572 62.134 7.58026C62.9777 7.29563 70.0415 4.88245 67.6896 3.616C66.6804 3.07261 64.5287 1.40012 63.5578 2.69472C62.9936 3.44699 61.4054 4.61516 61.9107 5.68188C65.4177 13.0857 80.2643 11.6027 86.5338 10.707C93.6307 9.69317 100.431 7.41785 107.276 5.43063C108.785 4.99268 110.543 3.87807 110.543 5.96106C110.543 7.64388 110.777 9.76763 112.944 9.70198C115.008 9.63943 128.481 3.43367 129.638 5.45854C133.179 11.6546 141.206 10.8434 147.533 10.6791C152.799 10.5423 158.523 10.1748 163.474 8.19444C164.375 7.83405 167.327 6.91263 167.327 5.68188C167.327 4.10233 161.991 2.62112 161.296 4.70477C159.756 9.32571 164.972 11.3442 168.89 11.9912C176.418 13.2344 184.918 10.7434 192.201 9.17155C199.249 7.65042 206.079 5.41582 213.055 3.67183"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <input className="FormField1-input" type="text" ref={ref}></input>
    </StyledDiv>
  );
});

FormField1.defaultProps = {
  color: '#5d2',

  type: 'input',
};

FormField1.propTypes = {
  type: propTypes.string,
  color: propTypes.string,
};

export default FormField1;
