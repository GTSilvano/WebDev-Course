// let random = Math.random();
// if (random < 0.5) {
//   console.log("Your number is less than 0.5!");
// } else {
//   console.log("Your number is greater than 0.5!");
// }
// console.log(random);

// const dayOfWeek = prompt("Enter a day").toLocaleLowerCase();

// if (dayOfWeek === "monday") {
//   console.log("Ughhh, I hate Mondays!");
// } else if (dayOfWeek === "saturday") {
//   console.log("Yay, I love Saturdays!");
// } else if (dayOfWeek === "friday") {
//   console.log("Fridays are decent, especially after work!");
// } else {
//   console.log("Meh");
// }

// const age = 2;

// if (age < 5) {
//   console.log("You're a baby, get in free!");
// } else if (age < 10) {
//   console.log("You're a child, pay 10$!");
// } else if (age < 65) {
//   console.log("You're an adult, pay 20$!");
// } else {
//   console.log("You're a senior, pay 10$");
// }

// Code done my another student, I fixed it, he had a type in one of the prompts.
// And didn't use "Number()" for the gender prompt

// const age = prompt("what is your age sir/ma'am?");

// if (age < 18) {
//   const name = prompt("What is your name??");

//   const gender = Number(
//     prompt(
//       name +
//         " are you a boy or girl??  If boy then press 1 If you are a girl then press  2!"
//     )
//   );

//   if (gender === 1) {
//     alert(name + " welcome boy! ");
//   } else if (gender === 2) {
//     alert(name + " welcome young lady");
//   } else if (gender > 2) {
//     alert("Get lost form here");
//   } else {
//     alert("INVALID EXPRESSION !");s
//   }
// }

const password = prompt("Please enter a new password");
// Password must be 6+ characters
// Password cannot include space
if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log("Valid password!");
  } else {
    console.log("Password cannot include spaces!");
  }
} else {
  console.log("Password too short! Must be 6+ characters");
}
