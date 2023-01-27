const readlineSync = require("readline-sync");
const fs = require("fs");

// class View
// Metods - choiceTheme
function foo1() {

//Приветствие и выбор темы(файл .txt)
const userName = readlineSync.question("Друг как тебя зовут? 🤔\n");
console.log("Привет " + userName + " 🤟");

const txtFile = [`${__dirname}/topics/nighthawk_flashcard_data.txt`, `${__dirname}topics/otter_flashcard_data.txt`, `${__dirname}topics/raccoon_flashcard_data.txt`];
const choiceTheme = require('readline-sync'),
animals = ['Ястребы', 'Выдры', 'Еноты'],
index = readlineSync.keyInSelect(animals, 'Какое животное ты хочешь выбрать? 🤔\n');
console.log('Супер! ' + animals[index] + ', отличный выбор 👍');

return txtFile[[index]];
}
console.log(foo1());