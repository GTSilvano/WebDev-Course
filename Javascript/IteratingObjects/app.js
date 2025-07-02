// An object where each property is a person's name and the value is their test score
const testScores = {
  keenan: 80,
  damon: 67,
  kin: 89,
  shawn: 91,
  marlon: 72,
  dwayne: 77,
  nadia: 83,
  elvira: 97,
  diedre: 81,
  vonnie: 60,
};

// Loop through each property (person) in the testScores object
// 'person' will be the key (name), and testScores[person] is the score
for (let person in testScores) {
  console.log(`${person} scored ${testScores[person]}`);
}

// Calculate the average score
let total = 0; // This will hold the sum of all scores

// Object.values(testScores) creates an array of all the scores (just the values)
let scores = Object.values(testScores);

// Loop through each score in the array and add it to the total
for (let score of scores) {
  total += score;
}

// Divide the total by the number of scores to get the average and print it
console.log(total / scores.length);
