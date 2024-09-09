export const twoNumberSum = (input: number[], target: number): number[] => {
  const seen : { [key: number]: number } = {}
  for (let i = 0; i < input.length; i++) {
    const complement = target - input[i];
    if (Object.prototype.hasOwnProperty.call(seen , complement)) {
      return [complement,input[i]];
    }
    seen [input[i]]=i;
  }
  
  return [];
};


