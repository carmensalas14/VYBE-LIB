import React, { useState } from 'react';
import propTypes from 'prop-types';
import ReactRough, { Rectangle } from 'react-rough';
import styled from 'styled-components';
// importing font sizes from common  styling sysytem
import { fontSizes } from '../common/system';

export const StyledCheckbox = styled.div`
  display: flex;
  // background-color: pink;

  /* removing default stlying for Checkboxs input */
  input {
    display: none;
  }
  label {
    margin-left: 25%;
    font-size: ${({ fontSize }) => fontSizes[fontSize]};
  }
  .checkbox-span {
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

const Checkbox = React.forwardRef(function Checkbox(props, ref) {
  const [checked, setChecked] = useState(false);
  const { color, fontSize, label, children, ...otherProps } = props;
  return (
    <StyledCheckbox
      data-testid="checkbox"
      ref={ref}
      fontSize={fontSize}
      {...otherProps}
    >
      <input type="checkbox" id={label} name={label} />
      <label for={label}>{children}</label>
      <span className="checkbox-span" onClick={() => setChecked(!checked)}>
        <ReactRough
          config={{
            options: {
              fill: checked ? color : 'none',
            },
          }}
          renderer="svg"
        >
          <Rectangle height={22} width={22} x={3} y={3} />
        </ReactRough>
      </span>
    </StyledCheckbox>
  );
});

// default props
Checkbox.defaultProps = {
  color: 'black',
  type: 'radio',
  fontSize: 'sm',
};

// prop types
Checkbox.propTypes = {
  type: propTypes.string,
  color: propTypes.string,
  fontSize: propTypes.oneOf(['sm', 'md', 'lg']),
  children: propTypes.node,
};

export default Checkbox;
