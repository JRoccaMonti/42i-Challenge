import { render, fireEvent, screen  } from '@testing-library/react';
import '@testing-library/jest-dom'
import {ConstructibleChange} from "./ConstructibleChange";
import {nonConstructibleChange} from '../../Helpers/nonConstructibleChange';
import { validateArrayNumbers, validateNumArray } from '../../Helpers/Validation/Validation';

jest.mock('../../Helpers/nonConstructibleChange');
jest.mock('../../Helpers/Validation/Validation');

describe('ConstructibleChange Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('Debería coincidir con la snapshot', () => {
    const { asFragment } = render(<ConstructibleChange />);
    expect(asFragment()).toMatchSnapshot();
  });
  it('Debería mostrar errores de validación para entradas no válidas', () => {
    (validateArrayNumbers as jest.Mock).mockReturnValue(['Error en la validación de array']);
    (validateNumArray as jest.Mock).mockReturnValue([]);

    render(<ConstructibleChange />);

    fireEvent.change(screen.getByPlaceholderText('Ej: 1, 2, 3, 4'), { target: { value: 'abc, def' } });
    fireEvent.click(screen.getByText('Calcular'));

    expect(screen.getByText('Error en la validación de array')).toBeInTheDocument();
  });

  it('No debería calcular el cambio mínimo si hay errores de validación', () => {
    (validateArrayNumbers as jest.Mock).mockReturnValue(['Error en la validación de array']);
    (validateNumArray as jest.Mock).mockReturnValue([]);

    render(<ConstructibleChange />);

    fireEvent.change(screen.getByPlaceholderText('Ej: 1, 2, 3, 4'), { target: { value: 'abc, def' } });
    fireEvent.click(screen.getByText('Calcular'));

    expect(nonConstructibleChange).not.toHaveBeenCalled();
    expect(screen.queryByText('Cambio minimo :'));
  });

  it('Debería calcular y mostrar el cambio mínimo correctamente', () => {
    (validateArrayNumbers as jest.Mock).mockReturnValue([]);
    (validateNumArray as jest.Mock).mockReturnValue([]);
    (nonConstructibleChange as jest.Mock).mockReturnValue(7);

    render(<ConstructibleChange />);

    fireEvent.change(screen.getByPlaceholderText('Ej: 1, 2, 3, 4'), { target: { value: '1, 2, 5' } });
    fireEvent.click(screen.getByText('Calcular'));

    expect(nonConstructibleChange).toHaveBeenCalledWith([1, 2, 5]);
    expect(screen.getByText('Cambio minimo : 7')).toBeInTheDocument();
  });
  it('Debería actualizar el estado de números al ingresar texto', () => {
    render(<ConstructibleChange />);

    fireEvent.change(screen.getByPlaceholderText('Ej: 1, 2, 3, 4'), { target: { value: '1, 2, 3' } });

    expect(screen.getByPlaceholderText('Ej: 1, 2, 3, 4')).toHaveValue('1, 2, 3');
  });
});
