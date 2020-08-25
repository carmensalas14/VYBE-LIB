import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import FormField1 from './FormField-1';
// for snapshot testing
import renderer from 'react-test-renderer';

afterEach(cleanup);

// check if renders without crashing
it('FormField1 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormField1></FormField1>, div);
});

// check if renders correctly
it('FormField1 renders correctly', () => {
  const { queryByTestId } = render(<FormField1></FormField1>);
  expect(queryByTestId('formfield-1')).toBeTruthy();
});

// snapshot test
it('matches snapshot', () => {
  const tree = renderer.create(<FormField1>hello</FormField1>).toJSON();
  expect(tree).toMatchSnapshot();
});
