import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import AutoForm from '../AutoForm.jsx';

// config file that defines button attributes and field components
import config from './AutoForm-config';

// for snapshot testing
import renderer from 'react-test-renderer';

afterEach(cleanup);

// check if renders without crashing
it('AutoForm renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<AutoForm form={config}></AutoForm>, section);
});

// check if renders correctly
it('AutoForm renders correctly', () => {
  const { queryByTestId } = render(<AutoForm form={config}></AutoForm>);
  expect(queryByTestId('autoform')).toBeTruthy();
});

// snapshot test
it('matches snapshot', () => {
  const tree = renderer.create(<AutoForm form={config}></AutoForm>).toJSON();
  expect(tree).toMatchSnapshot();
});
