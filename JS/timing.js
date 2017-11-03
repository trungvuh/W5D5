class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    let date = new Date();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();

  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.hour}:${this.minute}:${this.second}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    // let that = this;
    setInterval(() => {
      this.second++;
      this.printTime();
    }, 1000);
  }
}

const sayHello = function() {
  console.log(this);
};

const clock = new Clock();
