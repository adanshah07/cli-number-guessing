#! /usr/bin/env node
import inquirer from "inquirer";

// 1) Computer will generate a random number -Done
// 2) User input for guessing number -Done
// 3) Compare user input form computer generated number -Done

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
  {
    name: "Userguessnumber",
    type: "number",
    message: "Please Guess A Number Between 1 to 10: ",
  },
]);
if (answer.Userguessnumber === randomNumber) {
  console.log("Congrats Your Guess Right");
} else {
  console.log("Sorry Your Guessed Is Wrong");
}
