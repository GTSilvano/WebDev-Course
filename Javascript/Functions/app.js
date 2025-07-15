function singSong() {
  console.log("DO");
  console.log("RE");
  console.log("MI");
}
singSong();

function greet(firstName, lastName) {
  console.log(`Hi ${firstName} ${lastName[0]}!`);
}
greet("Silvano", "Condrea");

function repeat(message, numTimes) {
  let result = "";
  for (let i = 0; i < numTimes; i++) {
    result += message;
  }
  console.log(result);
}

function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return false;
  }
  return x + y;
  console.log("Ended task");
}
