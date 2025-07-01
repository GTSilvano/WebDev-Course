// An array of subreddit names (strings)
const subreddits = [
  "cringe",
  "books",
  "chickens",
  "funny",
  "pics",
  "soccer",
  "gunners",
];

// Example of using a traditional for loop to iterate through the subreddits array
// and print a message for each subreddit.
// for (let i = 0; i < subreddits.length; i++) {
//   console.log(`Visit reddit.com/r/${subreddits[i]}`);
// }

// Using a for...of loop to iterate through each subreddit in the array.
// This is a simpler and more readable way to loop through arrays in JS.
for (let sub of subreddits) {
  console.log(`Visit reddit.com/r/${sub}`);
}

// Example of a 2D array (array of arrays) representing a seating chart.
// Each sub-array is a row of students.
// const seatingChart = [
//   ["Kristen", "Erik", "Namita"],
//   ["Geoffrey", "Juanita", "Antonio", "Kevin"],
//   ["Yuma", "Sakura", "Jack", "Erika"],
// ];

// Example of using nested traditional for loops to go through each row and each student in the seating chart.
// for (let i = 0; i < seatingChart.length; i++) {
//   const row = seatingChart[i];
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// Example of using nested for...of loops to go through each row and each student in the seating chart.
// This is more readable than using index-based loops.
// for (const row of seatingChart) {
//   console.log(`Row #${seatingChart.indexOf(row) + 1}`);
//   for (let student of row) {
//     console.log(student);
//   }
// }

// Example of using a for...of loop to iterate through each character in a string.
// for (const char of "Hello World") {
//   console.log(char);
// }
