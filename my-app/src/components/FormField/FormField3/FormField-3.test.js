import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import FormField3 from './FormField-3';
// for snapshot testing
import renderer from 'react-test-renderer';

afterEach(cleanup);

// check if renders without crashing
it('FormField3 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormField3></FormField3>, div);
});

// check if renders correctly
it('FormField3 renders correctly', () => {
  const { queryByTestId } = render(<FormField3></FormField3>);
  expect(queryByTestId('formfield-3')).toBeTruthy();
});

// snapshot test
it('matches snapshot', () => {
  const tree = renderer.create(<FormField3>hello</FormField3>).toJSON();
  expect(tree).toMatchSnapshot();
});
