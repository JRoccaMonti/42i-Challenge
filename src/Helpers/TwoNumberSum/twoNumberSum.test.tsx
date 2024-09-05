import { renderHook } from '@testing-library/react';

import useTwoNumberSum from "./index.tsx";

describe('useTwoNumberSum',()=>{
    it('should return the correct pair when a valid pair exists', () => {
      const { result } = renderHook(() => useTwoNumberSum([1,2,3,4], 5));
      expect(result.current).toEqual([2,3]);
    });
    it('should return the correct pair when a valid pair not exists', () => {
      const { result } = renderHook(() => useTwoNumberSum([1,2,3,4], 10));
      expect(result.current).toEqual([]);
    });
});