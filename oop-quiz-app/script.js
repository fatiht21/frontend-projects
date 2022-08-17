function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
//Question prototype

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
};

//Quiz constructor
function Quiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.questionsIndex = 0;
}

//Quiz Prototype
Quiz.prototype.getQuestion = function () {
  return this.questions[this.questionsIndex];
};

//Quiz isFinish
Quiz.prototype.isFinish = function () {
  return this.questions.length === this.questionsIndex;
};

//Quiz guess {
Quiz.prototype.guess = function (answer) {
  let questions = this.getQuestion();

  if (questions.checkAnswer(answer)) {
    this.score++;
  }
  this.questionsIndex++;
};

let q1 = new Question(
  "What's the best programming?",
  ["C#", "JavaScript", "Python", "Asp.Net"],
  "JavaScript"
);
let q2 = new Question(
  "What's the most popular language?",
  ["C#", "Visual Basic", "Node.Js", "JavaScript"],
  "JavaScript"
);
let q3 = new Question(
  "What's the best modern programming language?",
  ["C#", "JavaScript", "Python", "Asp.Net"],
  "JavaScript"
);

let questions = [q1, q2, q3];

// Start Quiz

let quiz = new Quiz(questions);

console.log(quiz.isFinish());

console.log(quiz.getQuestion());
quiz.guess('JavaScript')
console.log(quiz.getQuestion());
quiz.guess('JavaScript')
console.log(quiz.getQuestion());
quiz.guess('JavaScript')

console.log(quiz.score)
console.log(quiz.isFinish());
