const fs = require('fs'), readline = require('readline');

const inputFile = fs.createReadStream('./input_file.in');
const outputFile = fs.createWriteStream('./output_file.out');

outputFile.readable = true;
outputFile.writable = true;

const readLine = readline.createInterface({
  input: inputFile,
  output: outputFile,
  terminal: false
});

const subsequenceWithZeroSum = inputArray => {
  let set = new Set();
 
  set.add(0);
   let sum = 0;
 
   for(let i = 0; i < inputArray.length; i++){
     sum = sum + inputArray[i];
     if(set.has(sum)){
        return true;
     }
     
     set.add(sum);
   }
   
   return false;
 }

readLine.on('line', inputLine => {
  const arr = inputLine.split(' ').map(item => parseInt(item));
  
  if (arr.length !== 1) {
    if (subsequenceWithZeroSum(arr)) {
      outputFile.write('yes\n');
    } else {
      outputFile.write('no\n');
    }
  }
}).on('close',() => {
  console.log('DONE! Check out output_file.out to see results.');
  outputFile.close();
});