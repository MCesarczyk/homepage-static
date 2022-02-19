import { render, screen } from '@testing-library/react';
import Modal from '.';

test('modal should be connected', () => {
  render(<Modal />);

  const root = screen.getByTestId("modal-root");

  expect(root).toBeInTheDocument();
});

test('only one modal displaying at once', () => {
  render(<Modal />);

  const titles = screen.getAllByTestId("modal-title");

  expect(titles.length).toEqual(1);
});