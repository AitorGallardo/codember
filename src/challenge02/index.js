const fs = require('fs');

const filePath = './src/challenge02/encrypted.txt';
const file = fs.readFileSync(filePath, 'utf8').split('');

const firstAsciiNumber = 97; // This number matches with the first character of the alphabet 'a'
const alphabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const asciiDictionary = {};
// Fill a dictionary with [key : value] object as [decimalNumber : symbol]
alphabet.forEach((element, index) => {
  asciiDictionary[firstAsciiNumber + index] = element;
});

let indexArr = 0;
const sortedDecimalArr = [];

function sliceAndUpdateMessage(number) {
  const newIndex = indexArr !== file.length ? indexArr + number : file.length;
  const slicedArr = file.slice(indexArr, newIndex);
  indexArr = newIndex;
  return slicedArr; 
}

function sortDecimalArr(charNum) {
  let slicedMessage = null;

  if (charNum === '9') { // There is 97,98,99 decimal nubmers for a,b,c
    slicedMessage = sliceAndUpdateMessage(2)
  }
  if (charNum === '1') { // Rest of alphabet characters are 1xx decimal numbers
    slicedMessage = sliceAndUpdateMessage(3)
  }
  if (charNum === ' ') {
    slicedMessage = sliceAndUpdateMessage(1)
  }
  sortedDecimalArr.push(slicedMessage.join(''));
}
while (indexArr < file.length) {
  sortDecimalArr(file[indexArr]);
}
const decodedMessage = sortedDecimalArr
  .map((key) => (key !== ' ' ? asciiDictionary[key] : ' '))
  .join('');
console.log('subimt ', decodedMessage);
