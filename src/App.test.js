import { render, screen } from '@testing-library/react';
import App from './Components/App';

test('renders header', () => {
  render(<App />);
  const linkElement = screen.getByText(/Zwift Analyzer/);
  expect(linkElement).toBeInTheDocument();
});
