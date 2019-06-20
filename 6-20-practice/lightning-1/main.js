
// var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers. (edited) 





let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let sortMethod = integers.sort( (a, b) => {
    return b - a;
  });


sortFilt = sortMethod.filter (sorted => sorted < 19);
sortFilt.map (x => (x * 1.5) - 1);
let sortFiltMap = sortFilt.map (x => (x * 1.5) - 1);

console.log(sortFiltMap)

let integers2= [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let total= integers2.sort( (a, b) => b - a).filter (sorted => sorted < 19).map (x => (x * 1.5) - 1).reduce( (current, next) => current + next)

  console.log(total)
