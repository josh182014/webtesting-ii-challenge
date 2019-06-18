import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display'
import '@testing-library/react/cleanup-after-each';


describe('Strike Button', () => {
    it('increases count', () => {
      const { getByText } = render(<Display />);
      // find the button
      const button = getByText(/strike/i);

      // click it
      fireEvent.click(button);

      // confirm that "hello developers" is there
      expect(getByText(/Strikes: 0/i)).toBe('Strikes: 1')
    });
  });