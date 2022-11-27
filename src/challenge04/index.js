const firstNumber = 11098;
const lastNumber = 98123;
let validNumbers = [];

for (let currentNumber = firstNumber; currentNumber < lastNumber; currentNumber++) {

  let digits = currentNumber.toString().split('');
  let realDigits = digits.map(Number);

  const hasAscendingNumbers =  realDigits.every((_, index) => {
    if (realDigits[index + 1] !== undefined)return realDigits[index] <= realDigits[index + 1];

    return true;
  });


  if(!hasAscendingNumbers) continue;
    
  const hasNum5 = realDigits.filter((digit)=> digit === 5).length >= 2;

  if(hasNum5){
    validNumbers.push(currentNumber)
  }
}
console.dir(validNumbers, {'maxArrayLength': null});
console.log(`submit ${validNumbers.length}-${validNumbers.at(55)}`);


