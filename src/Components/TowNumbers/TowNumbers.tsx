import React, { useState } from 'react';
import TwoNumberSum from '../../Helpers/TwoNumberSum';
import { validateArrayNumbers, validateTarget, validateNumArray } from '../../Helpers/Validation/Validation';

const TowNumbers: React.FC = () => {
  const [numbers, setNumbers] = useState<string>('');
  const [target, setTarget] = useState<number | ''>('');
  const [result, setResult] = useState<number[]>([]);
  const [errors, setErrors] = useState<string[]>([]);
  
  const validateInputs = () => {
    const newErrors: string[] = [];
    newErrors.push(...validateArrayNumbers(numbers,true));
    const numArray = numbers.split(',')
      .map(num => parseFloat(num.trim()))
      .filter(num => !isNaN(num));
    newErrors.push(...validateNumArray(numArray));
    newErrors.push(...validateTarget(target));
    setErrors(newErrors);
    return newErrors.length === 0;
  };
  const handleCalculate = () => {
    if (!validateInputs()) return;
    const numArray = numbers.split(',').map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    if (target !== '' && numArray.length > 0) {
      const sumResult = TwoNumberSum(numArray, target);
      setResult(sumResult);
    }
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
      <div>
        <label>
          Objetivo:
          <input
            type="number"
            value={target}
            onChange={(e) => setTarget(Number(e.target.value))}
            placeholder="Ej: 5"
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
        <p>Resultado: [ {result.length > 0 ? result.join(', ') : ''} ]</p>
      </div>
    </div>
  );
};

export default TowNumbers;
