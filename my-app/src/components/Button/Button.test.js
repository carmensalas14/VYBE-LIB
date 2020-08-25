import React from 'react';
import Button from './Button';
// for render tests
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
// for snapshot testing
import renderer from 'react-test-renderer';

afterEach(cleanup);

// check if button rendrs without crashing
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Button></Button>, div);
});

// check if button renders correctly
it('button renders correctly', () => {
  const { queryByTestId } = render(<Button></Button>);
  expect(queryByTestId('primary-button')).toBeTruthy();
});

// snapshot test
it('matches snapshot', () => {
  const tree = renderer.create(<Button>hello</Button>).toJSON();
  expect(tree).toMatchSnapshot();
});
