const fs = require('fs');

const filePath = './src/challenge03/colors.txt';
const file = fs.readFileSync(filePath, 'utf8');
const colorsArr = JSON.parse(file);

let zebra = [colorsArr[0]]
let maxLength = 0;
let lastColor = null; 


for(color of colorsArr){
    if(zebra.length === 1 && zebra[0] === color){
        continue;
    }
    if(zebra.length < 2 || zebra.at(-2) === color){
        zebra.push(color)
        continue;
    }

    if(zebra.length >= maxLength){
        maxLength = zebra.length;
        lastColor = zebra.at(-1);
    }
    zebra = [zebra.at(-1),color]
}

console.log(`submit ${maxLength}@${lastColor}`);




