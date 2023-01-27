const fs = require("fs");

function questions() {
  const readFileLines = (filename) =>
    fs.readFileSync(filename).toString("UTF8").split("\n");
  let arrContent = readFileLines("topics/nighthawk_flashcard_data.txt");
  let questions = [];
  for (let i = 0; i < arrContent.length; i++) {
    if (i % 2 === 0) {
      questions.push(arrContent[i]);
    }
  }
  return questions;
}
console.log(questions());

function answers() {
  const readFileLines = (filename) =>
    fs.readFileSync(filename).toString("UTF8").split("\n");
  let arrContent = readFileLines("topics/nighthawk_flashcard_data.txt");
  let answers = [];
  for (let i = 0; i < arrContent.length; i++) {
    if (i % 2 !== 0) {
      answers.push(arrContent[i]);
    }
  }
  return answers;
}
console.log(answers());
