import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the page title', () => {
  const { getByText } = render(<App />);
  const pageTitle = getByText(/react online meetup/i);
  expect(pageTitle).toBeInTheDocument();
});
