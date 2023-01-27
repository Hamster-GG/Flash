// const view = require (View);

// foo1();  /*здесь функции, которые через ReadlineSync получают fileName.txt*/

// const questionsArr = foo2(`${fileName}`); /* передаем на вход fileName.txt и вернули массив с вопросами*/
// const answersArr = foo3(`${fileName}`); /* передаем на вход fileName.txt и вернули массив с ответами*/
// for (i = 0; i <= questionsArr.length; i += 1) {
//   if(i = questionsArr.length) {
//     foo8(); /*прощание, вывод результата*/
//     return
//   }
//   const answer = foo5(questionsArr[i]); /*задали вопрос и получили ответ(подумать как его задать в консоли может быть через ReadlineSync*/
//   const result = foo6(answer, answersArr[i]); /*обработали ответ, выводим true or false*/
//   if (!result) {
//     foo7(); /*здесь нужно вывести "попробуйте ответить еще раз" (подумать как его задать в консоли может быть через ReadlineSync*/
//     const answer = foo5(questionsArr[i]);
//     const result = foo6(answer, answersArr[i]);
//     if(!result){
//       foo8();
//       return
//     }
//   } 
// }

const Quiz = require('./Quiz');
const View = require('./View');

const quiz = new Quiz();
const theme = View.choiceTheme();
quiz.questions = quiz.questions(theme);
quiz.answers = quiz.answers(theme);

View.questionAnswer(quiz.questions, quiz.answers);






