import { renderHook } from '@testing-library/react';
import NonConstructibleChange from "./index.tsx";

describe('NonConstructibleChange function', () => {
    it('Deberia devolver la cantidad más pequeña de cambio que no se puede crear a partir del array de monedas', () => {
      const { result } = renderHook(() => NonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
      expect(result.current).toEqual(20);
    });

    it('Deberia devolver 1 si el array esta vacio', () => {
      const { result } = renderHook(() => NonConstructibleChange([]));
      expect(result.current).toEqual(1);
    });
});
