import React from 'react';
import { action } from '@storybook/addon-actions';
import Checkbox from '../Checkbox.jsx';

export default {
  title: 'Checkbox',
  component: Checkbox,
};

export const fontSize = () => (
  <section>
    <Checkbox onClick={action('clicked')} label="greeting">
      Small Font
    </Checkbox>

    <Checkbox onClick={action('clicked')} label="greeting2" fontSize="md">
      Medium Font
    </Checkbox>

    <Checkbox onClick={action('clicked')} label="greeting3" fontSize="lg">
      Large Font
    </Checkbox>
  </section>
);

export const fillColor = () => (
  <section>
    <Checkbox onClick={action('clicked')} label="greeting" color="#008100">
      Dark Green
    </Checkbox>

    <Checkbox onClick={action('clicked')} label="greeting2" color="#bd082c">
      Dark Red
    </Checkbox>

    <Checkbox onClick={action('clicked')} label="greeting3" color="#00288f">
      Dark Blue
    </Checkbox>
  </section>
);
