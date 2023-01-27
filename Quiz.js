const fs = require("fs");

class Quiz{

questions(path) {
  const readFileLines = (filename) =>
    fs.readFileSync(filename).toString("UTF8").split("\n");
  let arrContent = readFileLines(path);
  let questions = [];
  for (let i = 0; i < arrContent.length; i++) {
    if (i % 2 === 0) {
      questions.push(arrContent[i]);
    }
  }
  return questions;
}
// console.log(questions());

answers(path) {
  const readFileLines = (filename) =>
    fs.readFileSync(filename).toString("UTF8").split("\n");
  let arrContent = readFileLines(path);
  let answers = [];
  for (let i = 0; i < arrContent.length; i++) {
    if (i % 2 !== 0) {
      answers.push(arrContent[i]);
    }
  }
  return answers;
}}
const a = new Quiz()
const anse = a.answers(
    'topics/nighthawk_flashcard_data.txt'
)
console.log(anse)
module.exports = Quiz
// console.log(answers());
