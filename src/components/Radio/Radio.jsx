import React, { useState } from 'react';
import propTypes, { string } from 'prop-types';
import ReactRough, { Circle } from 'react-rough';
import { fontSizes } from '../common/system';

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
    font-size: ${({ fontSize }) => fontSizes[fontSize]};
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
  const { color, fontSize, label, children, ...otherProps } = props;
  return (
    <StyledRadio
      data-testid="radio"
      ref={ref}
      fontSize={fontSize}
      {...otherProps}
    >
      <input type="radio" id={label} name={label} />
      <label for={label}>{children}</label>

      <span className="radio-span" onClick={() => setChecked(!checked)}>
        <ReactRough
          config={{
            options: {
              fill: checked ? color : 'none',
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
Radio.defaultProps = {
  color: '#df1ea2',
  type: 'radio',
  fontSize: 'sm',
};

// prop types
Radio.propTypes = {
  color: propTypes.string,
  type: propTypes.string,
  fontSize: propTypes.oneOf(['sm', 'md', 'lg']),
  children: propTypes.node,
};

export default Radio;
