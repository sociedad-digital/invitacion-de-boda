import { render, screen } from '@testing-library/react';
import WeddingPassport from './WeddingPassport';

test('renders learn react link', () => {
  render(<WeddingPassport />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
