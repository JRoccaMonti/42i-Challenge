export const validateArrayNumbers = (
    numbers: string, 
    validateDuplicates: boolean = false,
    AllowNegatives: boolean = true,
  ): string[] => {
    const errors: string[] = [];
    
    if (numbers.startsWith(',') || numbers.endsWith(',')) {
      errors.push('La lista de números no debe comenzar ni terminar con una coma.');
    }
    if (AllowNegatives) {
      if (/[^0-9-],|,[^0-9-]/.test(numbers)) {
        errors.push('Las comas deben estar separadas por números enteros.');
      }
    }else{
      if (/[^0-9],|,[^0-9]/.test(numbers)) {
        errors.push('Las comas deben estar separadas por números enteros positivos.');
      }
    }
  
    const numArray = numbers.split(',')
      .map(num => num.trim())
      .filter(num => num !== '');
  
    numArray.forEach(num => {
      const parsedNum = parseFloat(num);
      if (isNaN(parsedNum)) {
        errors.push(`El valor "${num}" no es un número válido.`);
      }
    });
  
    if (validateDuplicates) {
      const numSet = new Set(numArray);
      if (numSet.size !== numArray.length) {
        errors.push('La lista de números no debe contener duplicados.');
      }
    }
  
    return errors;
};  
  
export const validateTarget = (target: number | ''): string[] => {
    const errors: string[] = [];
    if (target === '' || !Number.isInteger(target)) {
        errors.push('Por favor, ingresa un objetivo válido (número entero).');
    }
   return errors;
};
  
export const validateNumArray = (numArray: number[]): string[] => {
    const errors: string[] = [];
    if (numArray.length === 0) {
        errors.push('Por favor, ingresa al menos un número entero.');
    }
    return errors;
};
  