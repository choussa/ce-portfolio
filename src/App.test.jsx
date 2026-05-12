import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders civil engineering hero headline', () => {
  render(<App />);
  const heading = screen.getByRole('heading', {
    name: /civil engineer \| designing durable, efficient, and future-ready structures/i,
  });
  expect(heading).toBeDefined();
});
