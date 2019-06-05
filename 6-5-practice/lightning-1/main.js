// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
// `let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102]`

// 2) Loop over the following array and
// * capitalize 'the'
// * insert a comma after 'teacher'
// * output "Yoda says, "The greatest teacher, failure is"

// `let yoda_quote = ["the", "greatest", "teacher", "failure", "is"]`

let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];

let fave_demo = [];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] >= 18 && ages[i] <= 49) {
    fave_demo.push(ages[i]);
  }
}

console.log(fave_demo);

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];

for (let i = 0; i < yoda_quote.length; i++) {
  if (yoda_quote[i] === "the") {
    yoda_quote[i] = "The";
  } else if (yoda_quote[i] === "teacher") {
      yoda_quote[i] = "teacher,";
  }
}

console.log("Yoda says, '",yoda_quote.join(" "),"'")


