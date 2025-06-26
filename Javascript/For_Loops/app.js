// Logging numbers 1 to 10 individually (not using a loop)
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

// Using a for loop to log numbers 1 to 10
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Using a for loop to log odd numbers from 1 to 20 (increment by 2)
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// Using a for loop to log numbers from 100 down to 0, decrementing by 10
for (let i = 100; i >= 0; i -= 10) {
  console.log(i);
}

// Using a for loop to log powers of 10 from 10 up to 1000 (multiply by 10 each time)
for (let i = 10; i <= 1000; i *= 10) {
  console.log(i);
}

// BAD EXAMPLE: Infinite loop!
// This loop will never end because i is incrementing upwards while the condition is i >= 0 (always true).
// DO NOT RUN THIS LOOP!
// for (let i = 20; i >= 0; i++) {
//   console.log(i);
// }
