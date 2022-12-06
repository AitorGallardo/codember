const firstNumber = 11098;
const lastNumber = 98123;
const validNumbers = [];

for (let currentNumber = firstNumber; currentNumber < lastNumber; currentNumber++) {

  let realDigits = currentNumber.toString().split('').map(Number);

  const hasAscendingNumbers = realDigits.every((_, index) => index === realDigits.length-1 ? true : realDigits[index] <= realDigits[index + 1]);

  if(!hasAscendingNumbers) continue;
    
  const hasNum5 = realDigits.filter((digit)=> digit === 5).length >= 2;

  if(hasNum5){
    validNumbers.push(currentNumber);
  }
}
console.dir(validNumbers, {'maxArrayLength': null});
console.log(`submit ${validNumbers.length}-${validNumbers.at(55)}`);


