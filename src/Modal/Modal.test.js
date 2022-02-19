import { render, screen } from '@testing-library/react';
import Modal from '.';

test('modal should be connected', () => {
  render(<Modal />);

  const root = screen.getByTestId("modal-root");

  expect(root).toBeInTheDocument();
});

// test('modal should be visible when "hidden" class not present', () => {
//   render(<Modal />);

//   const root = screen.getByTestId("modal-root");

//   if (root.classList.contains("hidden")) {
//     expect(root).not.toBeVisible();
//   } else {
//     expect(root).toBeVisible();
//   }
// });

// test('buttons are rendering properly', () => {
//   render(<Main />);
//   const buttons = screen.getAllByRole('button');

//   buttons.forEach(button => {
//     expect(button).toMatchSnapshot();
//   });
// });

// test('buttons have basic style', () => {
//   render(<Main />);
//   const buttons = screen.getAllByRole('button');

//   buttons.forEach(button => {
//     expect(button).toHaveStyle("css:", "main__button");
//   });
// });

// test('first and last buttons have additional styles', () => {
//   render(<Main />);
//   const buttons = screen.getAllByRole('button');
//   const first = buttons[0];
//   const last = buttons[buttons.length - 1];

//   expect(first).toHaveStyle("css:", "main__button--first");
//   expect(last).toHaveStyle("css:", "main__button--last");
// });

// it('triggers opening modal with param', () => {
//   const openModal = jest.fn();
//   render(<Main />);
//   const buttons = screen.getAllByRole('button');

//   buttons.forEach(button => {
//     button.dispatchEvent(new MouseEvent("click", {bubbles: openModal(button.innerHTML)}))
//   });
// });