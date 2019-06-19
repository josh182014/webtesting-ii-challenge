import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../../App'
import Dashboard from './Dashboard'
import Display from '../display/Display'
import '@testing-library/react/cleanup-after-each';


describe('Strike Button', () => {
    it('increases strike count up to 2 and then resets to 0 on next click', () => {
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

describe('Hits Button', () => {
    it('increases hits count', () => {
      const { getByText, getByTestId } = render(<App />);
      const button = getByTestId("hitsButton");
      fireEvent.click(button);
      expect(getByText(/Hits: 1/i))
      fireEvent.click(button);
      expect(getByText(/Hits: 2/i))
      fireEvent.click(button);
      expect(getByText(/Hits: 3/i))
    });
});

describe('Fouls Button', () => {
    it('increases fouls count', () => {
      const { getByText, getByTestId } = render(<App />);
      const button = getByTestId("foulsButton");
      fireEvent.click(button);
      expect(getByText(/Fouls: 1/i))
      fireEvent.click(button);
      expect(getByText(/Fouls: 2/i))
      fireEvent.click(button);
      expect(getByText(/Fouls: 3/i))
    });
});

describe('Balls Button', () => {
    it('increases balls count to 3 then resets to 0 on next click', () => {
      const { getByText, getByTestId } = render(<App />);
      const button = getByTestId("ballsButton");
      fireEvent.click(button);
      expect(getByText(/Balls: 1/i))
      fireEvent.click(button);
      expect(getByText(/Balls: 2/i))
      fireEvent.click(button);
      expect(getByText(/Balls: 3/i))
      fireEvent.click(button);
      expect(getByText(/Balls: 0/i))
    });
});