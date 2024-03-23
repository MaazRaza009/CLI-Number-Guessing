#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer will generate a random number. Done .
// 2) User input for guessing number. Done .
// 3) Compare user input with computer generated number and show result
const randomnumber = Math.floor(Math.random() * 10 + 1);
console.log("Welcome to number guessing game");
const answers = await inquirer.prompt([
    {
        name: "UserGuessedNumber",
        type: "number",
        message: "Please guess a number 1-10:"
    }
]);
if (answers.UserGuessedNumber === randomnumber) {
    console.log("Congratulation! you guessed a right number");
}
else {
    console.log("You guessed a wrong number");
}
;
