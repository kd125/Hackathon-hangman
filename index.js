// "use strict";

const assert = require("assert");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



console.log("hello world")
let finalWord = [["hello"],
["robot"],
["jazz"],
["whisper"],
["price"],
["past"]]

let selectWord = ""
let chancesLeft = 6
let guessWord = [];

let item = finalWord[Math.floor(Math.random()*finalWord.length) + 1];

console.log(item)

const userInput = (letter) => {
 let ifRight = false
 for(let i = 0; i < selectWord.length; i++) {
    if(selectWord[i] === letter) {
        ifRight= true
        guessWord[i] = letter 
    }
 }
 return ifRight
};

const checkForWIn = () => {
    return guessWord.join('') === selectWord
}

let turn = function () {
    console.log()
}

const execute = () => {
    console.log('Lets Play!')
    selectWord()
    console.log('The word is: ' + guessWord.join(''))
}



