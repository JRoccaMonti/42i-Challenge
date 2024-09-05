const TwoNumberSum = (input: number[], target: number): number[] => {
  const reserva: { [key: number]: number } = {}
  for (let i = 0; i < input.length; i++) {
    const complement = target - input[i];
    if (Object.prototype.hasOwnProperty.call(reserva, complement)) {
      return [complement,input[i]];
    }
    reserva[input[i]]=i;
  }
  
  return [];
};


export default  TwoNumberSum;