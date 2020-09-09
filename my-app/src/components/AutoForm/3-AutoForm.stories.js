import React from 'react';
import Autoform from './AutoForm';
import config from './config';

export default {
  title: 'Autoform',
  component: Autoform,
};

const handleSubmit = (form) => {
  console.log(form);
  alert(Object.values(form));
};

export const Text = () => (
  <div>
    <Autoform form={config} onSubmit={handleSubmit}></Autoform>
  </div>
);
