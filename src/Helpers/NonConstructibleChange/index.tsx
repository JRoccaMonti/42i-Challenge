const NonConstructibleChange = (input: number[]): number=> {
    const inputShort = input.sort((a, b) => a - b);
    let change = 0;
  
    for (const coin of inputShort) {
      if (coin > change + 1) return change + 1;
      change += coin;
    }
  
    return change + 1;
};
 
export default  NonConstructibleChange;