import React from 'react';
import FormField1 from '../components/FormField/FormField1/FormField-1';
import FormField2 from '../components/FormField/FormField2/FormField-2';
import FormField3 from '../components/FormField/FormField3/FormField-3';

export default {
  title: 'FormField',
  component: FormField1,
};

export const Loop = () => (
  <section>
    <p>Password Input</p>
    <FormField1 type="password" color="#54c"></FormField1>
    <p>Date Input</p>
    <FormField1 type="date" color="#50f161"></FormField1>
    <p>Text Input</p>
    <FormField1 color="#cad"></FormField1>
  </section>
);

export const Wave = () => (
  <section>
    <p>Password Input</p>
    <FormField2 type="password" color="#bcb"></FormField2>
    <p>Date Input</p>
    <FormField2 type="date" color="#e8e"></FormField2>
    <p>Text Input</p>
    <FormField2 color="#f85"></FormField2>
  </section>
);

export const Loose = () => (
  <section>
    <p>Password Input</p>
    <FormField3 type="password" color="#b58"></FormField3>
    <p>Date Input</p>
    <FormField3 type="date" color="#fa3"></FormField3>
    <p>Text Input</p>
    <FormField3 color="#56c"></FormField3>
  </section>
);
