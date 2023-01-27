const readlineSync = require("readline-sync");
const fs = require("fs");

class View {
  static choiceTheme() {
    //Приветствие и выбор темы(файл .txt)
    const userName = readlineSync.question("Друг как тебя зовут? 🤔\n");
    console.log("Привет " + userName + " 🤟");
    const gamer = userName;

    const txtFile = [
      `${__dirname}/topics/nighthawk_flashcard_data.txt`,
      `${__dirname}/topics/otter_flashcard_data.txt`,
      `${__dirname}/topics/raccoon_flashcard_data.txt`,
    ];
    const choiceTheme = require("readline-sync"),
      animals = ["Ястребы", "Выдры", "Еноты"],
      index = readlineSync.keyInSelect(
        animals,
        "Какое животное ты хочешь выбрать? 🤔\n"
      );
    console.log("Супер! " + animals[index] + ", отличный выбор 👍\n");

    return txtFile[[index]];
  }

  static questionAnswer(questions, answers) {
    let coins = 0;
    for (let i = 0; i <= questions.length; i++) {
      if (i === questions.length) {
        this.finalFar(coins);
        return;
      } else {
        let answersI = readlineSync.question(`${questions[i]}\n`);
        if (answersI === answers[i]) {
          coins = coins + 1;
          console.log("Дружище это верный ответ + 1 золотых 💰");
        } else {
          console.log("Дружище не в этот раз 👎👎👎\n");
        }
      }
    }
  }

  static finalFar(coins) {
    console.log(
      " ты круто проходил игру 💪 и ты заработал - " +
        `${coins}` +
        " золотых 💰"
    );
  }
}

module.exports = View;
