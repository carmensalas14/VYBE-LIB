import React from 'react';
import { storiesOf } from '@storybook/react';
import Autoform from './AutoForm';
import config from './config';

const handleSubmit = (form) => {
  console.log(form);
  alert(Object.values(form));
};

storiesOf('Autoform', module).add('AutoForm', () => (
  <div>
    <Autoform form={config} onSubmit={handleSubmit}></Autoform>
  </div>
));
