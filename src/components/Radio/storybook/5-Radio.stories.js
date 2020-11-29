import React from 'react';
import { action } from '@storybook/addon-actions';
import Radio from '../Radio.jsx';

export default {
  title: 'Radio',
  component: Radio,
};

export const fontSize = () => (
  <section>
    <Radio onClick={action('clicked')} label="greeting">
      Small Font
    </Radio>

    <Radio onClick={action('clicked')} label="greeting2" fontSize="md">
      Medium Font
    </Radio>

    <Radio onClick={action('clicked')} label="greeting3" fontSize="lg">
      Large Font
    </Radio>
  </section>
);

export const fillColor = () => (
  <section>
    <Radio onClick={action('clicked')} label="greeting" color="#008100">
      Dark Green
    </Radio>

    <Radio onClick={action('clicked')} label="greeting2" color="#bd082c">
      Dark Red
    </Radio>

    <Radio onClick={action('clicked')} label="greeting3" color="#4b0399">
      Indigo
    </Radio>
  </section>
);
