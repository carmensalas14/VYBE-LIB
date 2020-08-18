import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => (
  <div>
    <Button onClick={action('clicked')}>Hello Button</Button>
    <Button color="#6d6" onClick={action('clicked')}>
      Green Button
    </Button>
    <Button color="#6d6" size="md" onClick={action('clicked')}>
      Medium Button
    </Button>
  </div>
);

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😎 👍
    </span>
  </Button>
);
