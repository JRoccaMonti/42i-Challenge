import { renderHook } from '@testing-library/react';
import NonConstructibleChange from "./index.tsx";

describe('NonConstructibleChange function', () => {
    it('should return the smallest amount of change that cannot be created from the coins array', () => {
      const { result } = renderHook(() => NonConstructibleChange([5, 7, 1, 1, 2, 3, 22]));
      expect(result.current).toEqual(20);
    });

    it('should return 1 when the coins array is empty', () => {
      const { result } = renderHook(() => NonConstructibleChange([]));
      expect(result.current).toEqual(1);
    });
});
