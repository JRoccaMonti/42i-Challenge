import React, { useState } from 'react';
import style from "./TowNumbers.module.css";
import {twoNumberSum} from '../../Helpers/twoNumberSum';
import { validateArrayNumbers, validateTarget, validateNumArray } from '../../Helpers/Validation/Validation';

export const TowNumbers: React.FC = () => {
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
      const sumResult = twoNumberSum(numArray, target);
      setResult(sumResult);
    }
  };

  return (
    <div className={style.towNumbersContainer}>
      <h3>Funcion Suma de dos números</h3>
      <div className={style.inputNumbersContainer}>
        <label>
          Ingrese el array de numeros (separados por comas):
          <input
            className={style.inputNumbers}
            type="text"
            value={numbers}
            onChange={(event) => setNumbers(event.target.value)}
            placeholder="Ej: 1, 2, 3, 4"
          />
        </label>
      </div>
      <div className={style.targetNumbersContainer}>
        <label>
          Ingrese la suma objetivo:
          <input
            className={style.inputNumbers}
            type="number"
            value={target}
            onChange={(event) => setTarget(Number(event.target.value))}
            placeholder="Ej: 5"
          />
        </label>
        <button onClick={handleCalculate}>Calcular</button>
      </div>
      <div className={style.resultContainer}>
        <p>Resultado: [ {result.length > 0 ? result.join(', ') : ''} ]</p>
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
