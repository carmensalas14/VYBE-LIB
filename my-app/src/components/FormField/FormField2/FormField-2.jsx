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

  .FormField2-svg {
    position: absolute;
    display: flex;
    justify-content: center;
    top: 0;
    z-index: 1;
    margin-top: 28px;
    width: 160px;
  }

  .FormField2-svg-path {
    stroke: ${({ color }) => color};
  }

  .FormField2-input {
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

  .FormField2-input:focus {
    border: none;
    outline: none;
    background: linear-gradient(rgb(188, 153, 216, 0.2), rgb(188, 153, 216, 0));
  }

  @media (min-width: 340px) {
    width: 250px;
    height: 110px;

    .FormField2-svg {
      width: 250px;
    }

    .FormField2-input {
      font-size: 19px;
    }
  }
`;

const FormField2 = React.forwardRef(function FormField2(props, ref) {
  const { color, type, ...otherProps } = props;
  return (
    <StyledDiv color={color}>
      <svg
        className="FormField2-svg"
        width="250"
        height="22"
        viewBox="0 0 213 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="FormField2-svg-path"
          d="M1.87508 14.4691C11.5513 15.5503 23.1047 12.6283 31.3377 7.33167C31.7862 7.04318 34.2011 4.96349 34.8087 5.16838C35.8707 5.52649 36.91 9.66786 37.3803 10.675C40.89 18.1902 61.8867 2.65408 63.0159 6.03847C64.2776 9.82006 66.126 13.1549 70.4775 13.6427C78.1074 14.4981 85.4043 11.8497 92.0515 8.37696C92.7391 8.01775 95.0655 6.21297 95.6619 7.49008C96.0762 8.37725 96.1405 9.34844 97.0422 9.95666C98.5677 10.9857 101.536 10.6773 103.214 10.6424C108.026 10.542 112.438 9.10801 116.949 7.53876C120.014 6.47237 124.124 3.67549 125.812 7.08161C128.361 12.2231 134.128 13.1644 139.374 12.6507C144.269 12.1714 147.593 9.89696 151.763 7.94921C153.869 6.96585 153.397 10.0279 154.302 11.4302C156.722 15.1769 164.819 12.3724 167.732 11.0952C169.071 10.5085 170.634 9.3724 172.013 8.95357C172.682 8.75018 173.791 11.6285 174.156 12.0769C177.861 16.6188 187.01 13.0609 190.767 10.6989C192.147 9.83135 192.73 8.34342 194.423 9.20582C199.036 11.5562 206.57 9.13667 211.33 8.61673"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <input
        {...otherProps}
        data-testid="formfield-2"
        className="FormField2-input"
        ref={ref}
        type={type}
      ></input>
    </StyledDiv>
  );
});

FormField2.defaultProps = {
  type: 'text',
  color: '#5d2',
  required: true,
  placeholder: '',
  label: '',
};

FormField2.propTypes = {
  type: propTypes.string,
  color: propTypes.string,
  required: propTypes.bool,
  placeholder: propTypes.string,
};

export default FormField2;
