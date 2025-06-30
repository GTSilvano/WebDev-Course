// This section is commented out examples of while loops and for loops for practice
// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// Example: Secret code guessing loop
// const SECRET = "BabyHippo";
// let guess = prompt("Enter the secret code...");
// while (guess !== SECRET) {
//   guess = prompt("Enter the secret code...");
// }
// console.log("Congrates you got the secret!!!");

// Example: Infinite loop until user types a specific phrase
// let input = prompt("Hey, say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLocaleLowerCase() === "stop copying me") {
//     break;
//   }
// }
// console.log("Ok you win!");

// Example: For loop with a break statement
// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   if (i === 100) {
//     break;
//   }
// }

// Start of the number guessing game

// Ask the user for the maximum number for the guessing game
let maximum = prompt("Enter the maximum number! (Type 'q' to quit)");

// This flag keeps track of whether the user chose to quit
let userQuit = false;

// If the user enters 'q' right away, set the quit flag and exit
if (maximum === "q") {
  console.log("Ok, you quit!");
  userQuit = true;
}

// If the user input is not a valid number and they haven't quit, keep prompting
while (!parseInt(maximum) && !userQuit) {
  maximum = prompt("Enter a valid number! (Type 'q' to quit");
  if (maximum === "q") {
    console.log("OK, YOU QUIT");
    userQuit = true;
  }
}

// Only continue if the user didn't quit
if (!userQuit) {
  // Convert the maximum input to a number
  maximum = parseInt(maximum);

  // Generate a random target number between 1 and the maximum (inclusive)
  const targetNum = Math.floor(Math.random() * maximum) + 1;

  // Prompt the user for their first guess
  let guess = prompt("Enter your first guess! (Type 'q' to quit)");
  // Keep track of how many guesses the user makes
  let attempts = 1;

  // Main guessing loop: keep going until the guess matches the target number or the user quits
  while (parseInt(guess) !== targetNum && !userQuit) {
    // If the user types 'q', set the quit flag and break out of the loop
    if (guess === "q") {
      console.log("You finally quit!");
      userQuit = true;
      break;
    }
    // Convert the guess to a number for comparison
    guess = parseInt(guess);
    // If the guess is too high, prompt the user to guess lower
    if (guess > targetNum) {
      guess = prompt("Too high! Enter a new guess:");
      attempts++;
      // If the guess is too low, prompt the user to guess higher
    } else if (guess < targetNum) {
      guess = prompt("Too low! Enter a new guess:");
      attempts++;
      // If the input is not a number, prompt the user again
    } else {
      guess = prompt("Invalid guess! Please enter a number or 'q' to quit");
    }
  }
  // If the user didn't quit, they must have guessed correctly
  if (!userQuit) {
    console.log("Congrats! You win!");
    console.log(`You got it! It took you ${attempts} guesses`);
  }
}
