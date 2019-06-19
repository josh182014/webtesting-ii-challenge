import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Display from './Display'
import '@testing-library/react/cleanup-after-each';


describe('<Display />', () => {
    it('displays hits', () => {
      const { getByText } = render(<Display />);
      // getByText(/hits/i);
    });
  });