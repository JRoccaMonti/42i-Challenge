import { render, fireEvent, screen  } from '@testing-library/react';
import '@testing-library/jest-dom'
import TowNumbers from "./TowNumbers";
import TwoNumberSum from "../../Helpers/TwoNumberSum";
import { validateArrayNumbers, validateNumArray, validateTarget } from '../../Helpers/Validation/Validation';

jest.mock('../../Helpers/TwoNumberSum');
jest.mock('../../Helpers/Validation/Validation');

describe('TowNumbers Component', () => {
  it('Debería coincidir con la snapshot', () => {
    const { asFragment } = render(<TowNumbers />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Debería mostrar errores de validación para entradas no válidas', () => {
    (validateArrayNumbers as jest.Mock).mockReturnValue(['Error en la validación de array']);
    (validateTarget as jest.Mock).mockReturnValue(['Error en la validación del objetivo']);
    (validateNumArray as jest.Mock).mockReturnValue([]);

    render(<TowNumbers />);

    fireEvent.change(screen.getByPlaceholderText('Ej: 1, 2, 3, 4'), { target: { value: 'abc, def' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: 5'), { target: { value: 'a' } });
    fireEvent.click(screen.getByText('Calcular'));

    expect(screen.getByText('Error en la validación de array')).toBeInTheDocument();
    expect(screen.getByText('Error en la validación del objetivo')).toBeInTheDocument();
  });

  it('No debería calcular el resultado si hay errores de validación', () => {
    (validateArrayNumbers as jest.Mock).mockReturnValue(['Error en la validación de array']);
    (validateTarget as jest.Mock).mockReturnValue(['Error en la validación del objetivo']);
    (validateNumArray as jest.Mock).mockReturnValue([]);

    render(<TowNumbers />);

    fireEvent.change(screen.getByPlaceholderText('Ej: 1, 2, 3, 4'), { target: { value: 'abc, def' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: 5'), { target: { value: 'a' } });
    fireEvent.click(screen.getByText('Calcular'));

    expect(TwoNumberSum).not.toHaveBeenCalled();
    expect(screen.getByText(/Resultado:\s*\[\s*\]/)).toBeInTheDocument();
  });

  it('Debería calcular el resultado si no hay errores de validación', () => {
    (validateArrayNumbers as jest.Mock).mockReturnValue([]);
    (validateTarget as jest.Mock).mockReturnValue([]);
    (validateNumArray as jest.Mock).mockReturnValue([]);
    (TwoNumberSum as jest.Mock).mockReturnValue([2, 3]);
  
    render(<TowNumbers />);
  
    fireEvent.change(screen.getByPlaceholderText('Ej: 1, 2, 3, 4'), { target: { value: '1, 2, 3, 4' } });
    fireEvent.change(screen.getByPlaceholderText('Ej: 5'), { target: { value: '5' } });
    fireEvent.click(screen.getByText('Calcular'));
  
    expect(TwoNumberSum).toHaveBeenCalledWith([1, 2, 3, 4], 5);
    expect(screen.getByText(/Resultado:\s*\[\s*2, 3\s*\]/)).toBeInTheDocument();
  });

  it('Debería actualizar el estado de números al ingresar texto', () => {
    render(<TowNumbers />);

    fireEvent.change(screen.getByPlaceholderText('Ej: 1, 2, 3, 4'), { target: { value: '1, 2, 3' } });

    expect(screen.getByPlaceholderText('Ej: 1, 2, 3, 4')).toHaveValue('1, 2, 3');
  });
  
});