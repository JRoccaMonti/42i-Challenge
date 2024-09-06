import React, { useState } from 'react';
import NonConstructibleChange from '../../Helpers/NonConstructibleChange';
import { validateArrayNumbers, validateNumArray } from '../../Helpers/Validation/Validation';

const ConstructibleChange: React.FC = () => {
  const [numbers, setNumbers] = useState<string>('');
  const [result, setResult] = useState<number>();
  const [errors, setErrors] = useState<string[]>([]);
  
  const validateInputs = () => {
    const newErrors: string[] = [];
    newErrors.push(...validateArrayNumbers(numbers,false,false));
    const numArray = numbers.split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num));
    newErrors.push(...validateNumArray(numArray));
    setErrors(newErrors);
    return newErrors.length === 0;
  };
  const handleCalculate = () => {
    if (!validateInputs()) return;
    const numArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    const sumResult = NonConstructibleChange(numArray);
    setResult(sumResult);
  };

  return (
    <div>
      <div>
        <label>
          Números (separados por comas):
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="Ej: 1, 2, 3, 4"
          />
        </label>
      </div>
      <button onClick={handleCalculate}>Calcular</button>
      {errors.length > 0 && (
        <div style={{ color: 'red' }}>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}
      <div>
        <p>Cambio minimo : {result}</p>
      </div>
    </div>
  );
};

export default ConstructibleChange;