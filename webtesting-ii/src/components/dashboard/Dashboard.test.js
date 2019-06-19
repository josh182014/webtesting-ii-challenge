import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard'
import Display from '../display/Display'
import '@testing-library/react/cleanup-after-each';


describe('Strike Button', () => {
    it('increases count', () => {
      const { getByText } = render(<Dashboard />);
      const button = getByText(/strike/i);
      fireEvent.click(button);
      expect(getByText(/Strikes: 0/i)).toBe('Strikes: 1')
    });
  });