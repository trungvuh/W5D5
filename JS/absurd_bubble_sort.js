const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

function askIfGreaterThan(el1,el2,callback) {
  reader.question(`Is ${el1} bigger than ${el2}?`,function (answer) {
    if (answer === "yes") {
      callback(true);
    } else {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length - 1) {
    outerBubbleSortLoop(madeAnySwaps);
  }
  else {
    askIfGreaterThan(arr[i], arr[i+1], el => {
      if (el === true) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
        madeAnySwaps = true;
      }
      i++;
      innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

function absurdBubbleSort(arr,sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr,0,false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }
  }

  outerBubbleSortLoop(true);
}

// innerBubbleSortLoop([3,2,1], 0, false, arg => console.log(arg));

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});
