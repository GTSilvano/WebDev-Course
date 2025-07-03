// Initialize an empty array to store the todo items
let toDoList = [];

// Start an infinite loop to keep prompting the user until they quit
while (true) {
  // Prompt the user for a command: "new", "list", "delete", or "quit"
  let userInput = prompt("What would you like to do?");

  // If the user types "quit", exit the loop and end the app
  if (userInput === "quit") {
    console.log("You quit. Goodbye");
    break;
  }

  // If the user types "new", prompt for a new todo and add it to the list
  if (userInput === "new") {
    newItem = prompt("What do you want to add?");
    toDoList.push(newItem);
    console.log(`${newItem} has been added to the list`);
  }
  // If the user types "list", display all todos with their indices
  else if (userInput === "list") {
    console.log("**********");
    for (let i = 0; i < toDoList.length; i++) {
      console.log(`${i}: ${toDoList[i]}`);
    }
    console.log("**********");
  }
  // If the user types "delete", prompt for an index and remove that todo
  else if (userInput === "delete") {
    deletedItem = prompt("What index of todo to delete?");
    toDoList.splice(deletedItem, 1);
    console.log("Todo removed");
  }
}

// Code done by the tutor, in code along:

// // Prompt the user for their first command
// let input = prompt("What would you like to do?");
// // Initialize the todos array with some default items
// const todos = ["Collect eggs", "Clean Litter Box"];

// // Main loop: keep running until the user types "quit" or "q"
// while (input !== "quit" && input !== "q") {
//   // If the user types "list", print all todos with their indices
//   if (input === "list") {
//     console.log("**********");
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`);
//     }
//     console.log("**********");
//   }
//   // If the user types "new", prompt for a new todo and add it to the array
//   else if (input === "new") {
//     const newTodo = prompt("OK, what is the new todo?");
//     todos.push(newTodo);
//     console.log(`${newTodo} added to the list`);
//   }
//   // If the user types "delete", prompt for an index and remove that todo if valid
//   else if (input === "delete") {
//     const index = parseInt(prompt("OK, enter the index to delete:"));
//     // Check if the entered index is a valid number
//     if (!Number.isNaN(index)) {
//       const deleted = todos.splice(index, 1);
//       console.log(`OK, you deleted ${deleted[0]}`);
//     } else {
//       console.log("Unknown index");
//     }
//   }
//   // Prompt again for the next command
//   input = prompt("What would you like to do?");
// }
// // When the loop ends, print a goodbye message
// console.log("OK, You quit the app!");
