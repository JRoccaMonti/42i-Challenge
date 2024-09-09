import { renderHook } from '@testing-library/react';
import {nonConstructibleChange} from "./index";

describe('NonConstructibleChange function', () => {
    it('Deberia devolver la cantidad más pequeña de cambio que no se puede crear a partir del array de monedas', () => {
      const { result } = renderHook(() => nonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
      expect(result.current).toEqual(20);
    });

    it('Deberia devolver 1 si el array esta vacio', () => {
      const { result } = renderHook(() => nonConstructibleChange([]));
      expect(result.current).toEqual(1);
    });
});
