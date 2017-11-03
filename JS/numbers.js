const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, callback) {

  if (numsLeft === 0) {
    callback(sum);
  }else if (numsLeft > 0) {
    reader.question("Enter a number:", function(num) {
      let number = parseInt(num);
      sum += number;
      console.log(sum);
      numsLeft -= 1;
      addNumbers(sum, numsLeft, callback);
    });
  }
}

addNumbers(0, 4, sum => console.log(`Total sum is: ${sum}`));
