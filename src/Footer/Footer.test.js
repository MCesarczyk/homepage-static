import { render, screen } from '@testing-library/react';
import { thumbnails } from '../assets/thumbnails';
import Footer from '.';

test('renders footer email', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/michal.cesarczyk@gmail.com/i);
  expect(linkElement).toBeInTheDocument();
});

test('footer email renders properly', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/michal.cesarczyk@gmail.com/i);
  expect(linkElement).toMatchSnapshot();
});

test('thumbnails must have a valid href', () => {
  render(<Footer />);

  thumbnails.forEach(thumbnail => {
    const icon = screen.getByTestId(thumbnail.testId);
    expect(icon).toHaveAttribute('href', thumbnail.url);
  });
});

test('thumbnails must render properly', () => {
  render(<Footer />);

  thumbnails.forEach(thumbnail => {
    const thumbnailItem = screen.getByTestId(thumbnail.testId).parentNode;
    expect(thumbnailItem).toMatchSnapshot();
  });
});