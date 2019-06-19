import React from 'react';
import { render, fireEvent, getByTestId } from '@testing-library/react';
import App from '../../App'
import Dashboard from './Dashboard'
import Display from '../display/Display'
import '@testing-library/react/cleanup-after-each';


describe('Strike Button', () => {
    it('increases count', () => {
      const { getByText, getByTestId } = render(<App />);
      const button = getByTestId("strikesButton");
      fireEvent.click(button);
      expect(getByText(/Strikes: 1/i))
      fireEvent.click(button);
      expect(getByText(/Strikes: 2/i))
      fireEvent.click(button);
      expect(getByText(/Strikes: 0/i))
    });
  });