import { useState } from 'react';
import style from './ConstructibleChange.module.css';
import {nonConstructibleChange} from '../../Helpers/nonConstructibleChange';
import { validateArrayNumbers, validateNumArray } from '../../Helpers/Validation/Validation';

export const ConstructibleChange: React.FC  = () => {
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
    const sumResult = nonConstructibleChange(numArray);
    setResult(sumResult);
  };

  return (
    <div className={style.nonConstructibleChangeContainer}>
      <h3>Funcion Cambio No Constructible </h3>
      <div className={style.inputNumbersContainer}>
        <label>
          Ingrese el array de numeros (separados por comas):
          <input
            className={style.inputNumbers}
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="Ej: 1, 2, 3, 4"
          />
        </label>
      </div>
      <div className={style.resultContainer}>
        <p>Cambio minimo : {result? result : ''}</p>
        <button onClick={handleCalculate}>Calcular</button>
      </div>      
      {errors.length > 0 && (
        <div className={style.errorsContainer}>
          {errors.map((error, index) => (
            <p key={index}>{error}</p>
          ))}
        </div>
      )}      
    </div>
  );
};
