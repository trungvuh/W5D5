const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)

  input: process.stdin,
  output: process.stdout
});

class Game {
  constructor() {
    this.stacks = [[3,2,1], [], []];
  }

  promptMove(callback) {
    this.print();
    let fromStack, toStack;
    reader.question("Please pick the initial stack: ", function(res1) {
      fromStack = parseInt(res1);
      reader.question("Please pick the move-to stack: ", function(res2) {
        toStack = parseInt(res2);
        callback(fromStack, toStack);
      });
    });
  }

  isValidMove(start, end) {
    let startLast = this.stacks[start][this.stacks[start].length - 1];
    let endLast = this.stacks[end][this.stacks[end].length - 1];

    if (startLast > endLast || startLast === undefined) {
      return false;
    } else {
      return true;
    }
  }

  move(start,end) {
    if (this.isValidMove(start,end)) {
      this.stacks[end].push(this.stacks[start].pop());
      return true;
    } else {
      return false;
    }
  }

  print(){
    console.log(this.stacks);
  }

  isWon(){
    if (this.stacks[1].length === 3 || this.stacks[2].length === 3){
      return true;
    } else {
      return false;
    }
  }

  run(completionCallback){
    if (this.isWon()) {
      completionCallback();
    } else {
      this.promptMove((x,y) => {

        if (this.move(x,y) === true) {
          this.run(completionCallback);
        } else {
          console.log("Not valid move, try again");
          this.run(completionCallback);
        }
      });
    }
    reader.close();
  }
}


let game = new Game();
// game.promptMove((x,y) => console.log(x, y));
// console.log(game.isValidMove(2,1));
game.run( () => console.log("You won!!!"));
