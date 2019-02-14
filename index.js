function produceDrivingRange(blockRange) {
  return function drivingRange(start, end) {
     let distance = Math.abs(parseInt(start) - parseInt(end));
     if (distance > blockRange) {
       return `${distance - blockRange} blocks out of range`
     } else {
       return `within range by ${distance}`
     }
  }
}

function produceTipCalculator(percent) {
  return function calculator(bill) {
    return bill * percent;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId++;
    }
  }
}
