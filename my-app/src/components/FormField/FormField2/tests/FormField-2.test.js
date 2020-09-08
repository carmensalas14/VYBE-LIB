import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import FormField2 from '../FormField-2';
// for snapshot testing
import renderer from 'react-test-renderer';

afterEach(cleanup);

// check if renders without crashing
it('FormField2 renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FormField2></FormField2>, div);
});

// check if renders correctly
it('FormField2 renders correctly', () => {
  const { queryByTestId } = render(<FormField2></FormField2>);
  expect(queryByTestId('formfield-2')).toBeTruthy();
});

// snapshot test
it('matches snapshot', () => {
  const tree = renderer.create(<FormField2>hello</FormField2>).toJSON();
  expect(tree).toMatchSnapshot();
});
