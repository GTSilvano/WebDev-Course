// Initialize an empty array to store the todo items
let toDoList = [];

// Start an infinite loop to keep prompting the user until they quit
while (true) {
  let userInput = prompt("What would you like to do?");
  if (userInput === "quit") {
    console.log("You quit. Goodbye");
    break;
  }

  if (userInput === "new") {
    newItem = prompt("What do you want to add?");
    toDoList.push(newItem);
    console.log(`${newItem} has been added to the list`);
  }
}
