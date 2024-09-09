import { render, screen  } from '@testing-library/react';
import '@testing-library/jest-dom'
import {NavBar} from './NavBar';

describe('NavBar Component', () => {
  it('debería coincidir con la snapshot', () => {
    const { asFragment } = render(<NavBar />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('debería renderizar correctamente el título y el enlace', () => {
    render(<NavBar />);
    const titleElement = screen.getByText(/42i Chalenge/i);
    expect(titleElement).toBeInTheDocument();
    const linkElement = screen.getByText(/Jest Coverag/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', 'coverage\\lcov-report\\index.html');
  });
});
