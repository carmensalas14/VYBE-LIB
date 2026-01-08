import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Button from './Button.jsx';

storiesOf('Button', module)
  .add('Text', () => (
    <div>
      <Button onClick={action('clicked')}>Hello Button</Button>
      <Button color="#6d6" onClick={action('clicked')}>
        Green Button
      </Button>
      <Button color="#6d6" size="md" onClick={action('clicked')}>
        Medium Button
      </Button>
    </div>
  ))
  .add('Emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😎 👍
      </span>
    </Button>
  ));
