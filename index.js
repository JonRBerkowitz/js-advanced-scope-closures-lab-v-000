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
