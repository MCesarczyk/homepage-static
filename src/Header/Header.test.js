import { render, screen } from '@testing-library/react';
import Header from '.';

test('renders homepage title', () => {
  render(<Header />);
  const linkElement = screen.getByText(/cesarczyk.dev/i);
  expect(linkElement).toBeInTheDocument();
});

test('portrait must have a valid src and alt', () => {
  render(<Header />);
  const portrait = screen.getByRole('img');
  expect(portrait).toHaveAttribute('src', 'portrait.png');
  expect(portrait).toHaveAttribute('alt', 'portrait');
});