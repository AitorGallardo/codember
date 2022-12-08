const fs = require('fs');

const filePath = './src/challenge05/mecenas.json';
const file = fs.readFileSync(filePath, 'utf8');

const arrayOfPeople = JSON.parse(file);


const onlyOneRemainingAlive = () =>
  arrayOfPeople.filter((e) => e !== null).length === 1;
let hasRemainingAlive = onlyOneRemainingAlive();

while (!hasRemainingAlive) {
  let i = 0;

  while (i < arrayOfPeople.length) {
    if (arrayOfPeople[i] !== null) {
      let j = i + 1;
      while (j < arrayOfPeople.length) {
        //if we did a full round without succeed, we end search
        if (j === i) {
          i = arrayOfPeople.length;
          break;
        }
        if (arrayOfPeople[j] !== null) {
          arrayOfPeople[j] = null;
          i = j + 1;
          break;
        }
        //if array has ended without succeed, starts loop with first index again
        if (j === arrayOfPeople.length - 1) {
          j = 0;
        } else {
          j++;
        }
      }
    } else {
      i++;
    }
  }

  hasRemainingAlive = onlyOneRemainingAlive();
}
const [people, index] =  arrayOfPeople.map((people,index)=> people!==null ? [people,index] : null).find(e=>e!==null);
console.log(`submit ${index}-${people}`);
// console.table(arrayOfPeople);
