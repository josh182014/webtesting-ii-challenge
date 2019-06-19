import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../App'
import Display from './Display'
import '@testing-library/react/cleanup-after-each';


describe('<Display />', () => {
    it('displays hits', () => {
      const { getByText } = render(<App />);
      getByText(/hits/i);
    });
    it('displays strikes', () => {
      const { getByText } = render(<App />);
      getByText(/strikes/i);
    });
    it('displays fouls', () => {
      const { getByText } = render(<App />);
      getByText(/fouls/i);
    });
    it('displays balls', () => {
      const { getByText } = render(<App />);
      getByText(/balls/i);
    });
  });