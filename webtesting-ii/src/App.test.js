import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders without errors', () => {
    const queries = render(<App />);
  });

  it('renders Baseball Stadium', () => {
    const { getByText } = render(<App />);
    getByText(/baseball stadium/i);
  });
});
