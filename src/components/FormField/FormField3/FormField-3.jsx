import React from 'react';

import propTypes from 'prop-types';

import styled from 'styled-components';

export const StyledDiv = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

  position: relative;
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  text-align: center;

  .FormField3-svg {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    z-index: 1;
    margin-top: 28px;
    width: 160px;
  }

  .FormField3-svg-path {
    stroke: ${({ color }) => color};
  }

  .FormField3-input {
    height: 20px;
    font-size: 16px;
    font-family: 'Inter', sans-serif !important;
    text-align: center;
    border: 0;
    background: linear-gradient(rgb(188, 153, 216, 0), rgb(188, 153, 216, 0));
    padding: 8px 0 5px 0;
    width: 85%;
    border-radius: 12px;
    font-weight: 450;
    color: #555;
  }

  .FormField3-input:focus {
    border: none;
    outline: none;
    background: linear-gradient(rgb(188, 153, 216, 0.2), rgb(188, 153, 216, 0));
  }

  @media (min-width: 340px) {
    width: 250px;
    height: 110px;

    .FormField3-svg {
      width: 250px;
    }

    .FormField3-input {
      font-size: 19px;
    }
  }
`;

const FormField3 = React.forwardRef(function FormField3(props, ref) {
  const { color, type, ...otherProps } = props;
  return (
    <StyledDiv color={color}>
      <svg
        className="FormField3-svg"
        width="251"
        height="18"
        viewBox="0 0 211 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="FormField3-svg-path"
          d="M2 12.7389C9.74314 9.00364 21.0998 7.03973 21.0998 7.03973C32.9726 5.26837 33.4888 5.26837 35.5263 7.03973C36.7967 8.83709 39.4562 10.5776 37.8509 12.5316C36.4344 14.2557 34.5418 14.7851 32.2838 14.994C30.8915 15.1228 29.9181 14.7645 30.3947 13.3788C31.7016 9.5792 43.9009 9.91654 47.3393 9.64648C52.4438 9.24556 57.6744 10.1645 62.7097 10.8909C71.2585 12.1243 74.9488 11.8022 83.3037 9.43368C85.5603 8.79395 88.8658 7.77475 90.0157 5.64739C90.8863 4.03665 89.851 3.30897 88.6418 2.23179C87.8622 1.53739 85.8282 2.57133 85.1355 3.13202C84.3761 3.74667 84.606 4.65379 84.606 5.515C84.606 8.64121 88.3096 10.2108 90.9173 11.2342C94.9275 12.808 100.068 12.792 104.27 11.949C110.04 10.7915 115.832 9.70157 121.672 8.85117C125.209 8.33618 128.833 8.35835 132.391 8.00389C138.251 7.42021 144.443 6.68155 150.223 8.04361C150.839 8.18855 161.325 11.3975 159.96 13.0214C159.089 14.0574 154.987 15.7437 153.663 16C153.663 16 151.841 13.7787 151.841 12.8493C151.841 11.4743 153.519 11.0858 154.56 10.6252C156.554 9.74275 166.266 8.85117 174.51 8.85117C180.692 8.85117 197.064 15.3203 209 6.71962"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input
        {...otherProps}
        data-testid="formfield-3"
        className="FormField3-input"
        ref={ref}
        type={type}
      ></input>
    </StyledDiv>
  );
});

FormField3.defaultProps = {
  type: 'text',
  color: '#5d2',
  required: true,
  placeholder: '',
  label: '',
};

FormField3.propTypes = {
  type: propTypes.string,
  color: propTypes.string,
  required: propTypes.bool,
  placeholder: propTypes.string,
};

export default FormField3;
