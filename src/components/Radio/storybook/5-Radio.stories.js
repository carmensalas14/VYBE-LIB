import React from 'react';
import { action } from '@storybook/addon-actions';
import Radio from '../Radio.jsx';

export default {
  title: 'Radio',
  component: Radio,
};

export const Text = () => (
  <div>
    <Radio label="hello"></Radio>
  </div>
);
