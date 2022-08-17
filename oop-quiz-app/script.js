function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}
//Question prototype

Question.prototype.checkAnswer = function (answer) {
  return this.answer === answer;
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

console.log(q1.checkAnswer("C#"));
console.log(q1.checkAnswer("JavaScript"));

console.log(q2.checkAnswer("Visual Basic"));
console.log(q2.checkAnswer("JavaScript"));
