import React, { useState } from 'react';
import propTypes from 'prop-types';
import ReactRough, { Circle } from 'react-rough';

import styled from 'styled-components';

export const StyledRadio = styled.div`
  display: flex;
  // background-color: pink;

  /* removing default stlying for Radios input */
  input {
    display: none;
  }
  label {
    margin-left: 25%;
  }
  .radio-span {
    position: absolute;
    top: -1;
    left: 2;
  }
  @media (min-width: 200px) {
    label {
      margin-left: 40px;
    }
  }
`;

const Radio = React.forwardRef(function Radio(props, ref) {
  const [checked, setChecked] = useState(false);
  const { label, ...otherProps } = props;
  return (
    <StyledRadio data-testid="radio" ref={ref}>
      <input type="radio" id={label} name={label} />
      <label for={label}>{label}</label>

      <span className="radio-span">
        <ReactRough
          config={{
            options: {
              fill: checked ? 'black' : 'none',
            },
          }}
          renderer="svg"
        >
          <Circle diameter={22} x={16} y={13} />
        </ReactRough>
      </span>
    </StyledRadio>
  );
});

// default props

// prop types

export default Radio;
