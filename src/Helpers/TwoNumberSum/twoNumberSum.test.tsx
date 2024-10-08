import { renderHook } from '@testing-library/react';

import {twoNumberSum} from "./index";

describe('TwoNumberSum',()=>{
    it('Deberia devolver el un par valido si existe', () => {
      const { result } = renderHook(() => twoNumberSum([1,2,3,4], 5));
      expect(result.current).toEqual([2,3]);
    });
    it('Deberia devolver un array vacio si no se encuentra un par valido', () => {
      const { result } = renderHook(() => twoNumberSum([1,2,3,4], 10));
      expect(result.current).toEqual([]);
    });
});