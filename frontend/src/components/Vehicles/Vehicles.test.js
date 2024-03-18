import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Vehicles from './Vehicles';

// 🚗 Testing Vehicles Component 🚗
describe('<Vehicles />', () => {
  // 🧪 Test Case: It should render without crashing 🧪
  test('it should render without crashing', () => {
    // Render the Vehicles component
    render(<Vehicles />);

    // Get the Vehicles component by its test ID
    const vehicles = screen.getByTestId('Vehicles');

    // Expect the Vehicles component to be in the document
    expect(vehicles).toBeInTheDocument();
  });
});
