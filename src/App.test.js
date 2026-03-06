import { render, screen } from '@testing-library/react';
import App from './App';

// Mock the Analytics component from Vercel
jest.mock('@vercel/analytics/react', () => ({
  Analytics: () => null,
}), { virtual: true });

test('renders app without crashing', () => {
  render(<App />);
  // Just verify the app renders without crashing
  expect(document.body).toBeInTheDocument();
});
