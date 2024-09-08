import { validateArrayNumbers, validateTarget, validateNumArray } from "./Validation";

describe('Validation system', () => {
  // Tests para validateArrayNumbers
  it('Debería retornar un error si la lista de números comienza o termina con una coma', () => {
    const result = validateArrayNumbers(',1,2,3');
    expect(result).toContain('La lista de números no debe comenzar ni terminar con una coma.');
  });

  it('Debería retornar un error si las comas no están correctamente separadas por números enteros', () => {
    const result = validateArrayNumbers('1,2,,-3');
    expect(result).toContain('Las comas deben estar separadas por números enteros.');
  });

  it('Debería retornar un error si las comas no están correctamente separadas por números enteros positivos cuando AllowNegatives es false', () => {
    const result = validateArrayNumbers('1,2,,-3', false, false);
    expect(result).toContain('Las comas deben estar separadas por números enteros positivos.');
  });

  it('Debería retornar un error si la lista contiene valores no numéricos', () => {
    const result = validateArrayNumbers('1,a,3');
    expect(result).toContain('El valor "a" no es un número válido.');
  });
  
  it('No debería retornar ningún error si la lista es válida y no tiene duplicados', () => {
    const result = validateArrayNumbers('1,1,3');
    expect(result).toHaveLength(0);
  });
  
  it('Debería retornar un error si la lista contiene números duplicados cuando validateDuplicates es true', () => {
    const result = validateArrayNumbers('1,1,3', true);
    expect(result).toContain('La lista de números no debe contener duplicados.');
  });

  // Tests para validateTarget
  it('Debería retornar un error si el objetivo es un valor vacío ', () => {
    const result = validateTarget('');
    expect(result).toContain('Por favor, ingresa un objetivo válido (número entero).');
  });

  it('Debería retornar un error si el objetivo no es un número entero', () => {
    const result = validateTarget(0.5);
    expect(result).toContain('Por favor, ingresa un objetivo válido (número entero).');
  });

  // Tests para validateNumArray
  it('Debería retornar un error si el array de números está vacío', () => {
    const result = validateNumArray([]);
    expect(result).toContain('Por favor, ingresa al menos un número entero.');
  });
});
