// "use strict";

const assert = require("assert");
const readline = require("readline");
const { start } = require("repl");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let finalWord = ["hello", "robot", "jazz", "whisper", "price", "past"];

let chancesLeft = 6;
let guessWord = [];

let selectWord = finalWord[Math.floor(Math.random() * finalWord.length)];

const startGame = () => {
  for (let i = 0; i < selectWord.length; i++) {
    guessWord.push("_");
  }
};

const checkLetter = (letter) => {
  for (let i = 0; i < selectWord.length; i++) {
    if (letter === selectWord[i]) {
      guessWord[i] = letter;
    }
  }
  return selectWord.includes(letter);
};

const checkForWIn = () => {
  return guessWord.join("") === selectWord;
};

let turn = () => {
  console.log("You have " + chancesLeft + " tries remaining.");
  rl.question("Choose a letter: ", (letter) => {
    if (!checkLetter(letter)) {
      chancesLeft--;
    }
    console.log("Word Progress: " + guessWord.join(""));
    if (checkForWIn()) {
      console.log("Congrats! You've won! The word is: " + selectWord);
      rl.close();
    } else if (chancesLeft === 0) {
      console.log("You lose. The word was: " + selectWord);
      rl.close();
    } else {
      turn();
    }
  });
};

const execute = () => {
  console.log("Lets Play!");
  startGame();
  console.log("The word is: " + guessWord.join(""));
  turn();
};

execute();
