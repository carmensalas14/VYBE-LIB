import React from 'react';
import FormField1 from '../components/Input/FormField1';
import FormField2 from '../components/Input/FormField2';
import FormField3 from '../components/Input/FormField3';

export default {
  title: 'FormField',
  component: FormField1,
};

export const Loop = () => (
  <div>
    <FormField1 color="#54c"></FormField1>
    <FormField1 color="#50f161"></FormField1>
    <FormField1 color="#cad"></FormField1>
  </div>
);

export const Wave = () => (
  <div>
    <FormField2 color="#bcb"> </FormField2>
    <FormField2 color="#e8e"> </FormField2>
    <FormField2 color="#f85"> </FormField2>
  </div>
);

export const Loose = () => (
  <div>
    <FormField3 color="#b58"> </FormField3>
    <FormField3 color="#fa3"> </FormField3>
    <FormField3 color="#56c"> </FormField3>
  </div>
);
