import { render, screen } from '@testing-library/react';
import Modal from '.';

test('modal should be connected', () => {
  render(<Modal />);

  const root = screen.getByTestId("modal-root");

  expect(root).toBeInTheDocument();
});