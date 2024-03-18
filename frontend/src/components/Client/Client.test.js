import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Client from './Client';

// 📱 Testing Client Component 📱
describe('<Client />', () => {
  // 🧪 Test Case: It should render without crashing 🧪
  test('it should render without crashing', () => {
    // Render the Client component
    render(<Client />);

    // Get the Client component by its test ID
    const client = screen.getByTestId('Client');

    // Expect the Client component to be in the document
    expect(client).toBeInTheDocument();
  });
});
