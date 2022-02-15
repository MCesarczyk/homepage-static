import { render, screen } from '@testing-library/react';
import Header from '.';

test('renders homepage title', () => {
  render(<Header />);
  const title = screen.getByText(/cesarczyk.dev/i);
  expect(title).toBeInTheDocument();
});

test('title navigates to footer mailto: link', () => {
  render(<Header />);
  const title = screen.getByTestId("header-link");
  expect(title).toHaveAttribute('href', '#contact')
});

test('title should have neutral style', () => {
  render(<Header />);
  const title = screen.getByTestId("header-link");
  expect(title).toHaveStyle('text-decoration:', 'none');
  expect(title).toHaveStyle('color:', 'unset');
});

test('portrait must have a valid src and alt', () => {
  render(<Header />);
  const portrait = screen.getByRole('img');
  expect(portrait).toHaveAttribute('src', 'portrait.png');
  expect(portrait).toHaveAttribute('alt', 'portrait');
});