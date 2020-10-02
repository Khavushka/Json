"use strict";

var questions = [
    ['What is the full form of IP?', 'Internet Provider'],
        ['The C programming language was developed by?', 'Dennis Ritchie'],
        ['What does CC mean in emails?', 'Carbon Copy']
      ],
      correctAnswers = [],
      wrongAnswers = [];
  
      function quiz(questions) {
        var counter = 0;
        
        for (var i = 0; i < questions.length; i++) {
          var answer = prompt(questions[i][0]);
          
          if (answer === questions[i][1]) {
            correctAnswers.push ([questions[i][0]]);
            counter += 1;
          } else {
            wrongAnswers.push ([questions[i][0]]);
          }
        }
  
        print('<h2>You got these questions right</h2>');
        print(correctAnswers);
        print('<h2>You got these questions wrong</h2>');
        print(wrongAnswers);
        
        var printQuestionsRight = '<h3>You got ' + counter + ' questions right</h3>';
        print(printQuestionsRight);
      }
  
      function print(message) {
        document.write(message);
      }
  
      quiz(questions);

/*var allQuestions = [{
    question: "What is the full form of IP?",
    choices: ["Internet Provider", "Internet Port", "Internet Protocol"],
    correctAnswer: "Internet Protocol",
  },

  {
    question: "The C programming language was developed by?",
    choices: ["Brendan Eich", "Dennis Ritchie", "Guido van Rossum"],
    correctAnswer: "Dennis Ritchie",
  },

  {
    question: "What does CC mean in emails?",
    choices: ["Carbon Copy", "Creative Commons", "Other"],
    correctAnswer: "Carbon Copy",
  }
];

//Function to start the quiz
function startQuiz(){

var i;
var j;
for(i=0; i<allQuestions.length; i++){
    document.getElementById("questions").innerHTML +='<form id="question">Q'+(i+1)+': '+ allQuestions[i].question;
    
    for(j=0; j<allQuestions[i].choices.length; j++){
        document.forms[i].innerHTML += '</div><div class="answer"><input name="q1" value="'+ allQuestions[i].choices[j] +'" id="value4" type="checkbox" />' + allQuestions[i].choices[j] + '<br/>';
     }
 document.getElementById("questions").innerHTML +='</form><br/><br/>';
}

document.getElementById("questions").innerHTML += '<button onclick="solveQuiz()">Solve Quiz</button>';

}

function solveQuiz(){
    var x;
    var i = 0;
    var correct = 0; 
    for(i = 0; i < document.forms.length;i++) { 
      x = document.forms[i]; 
      for(j = 0; j<x.length; j++){
        if(x[j].checked) { 
          correctAnswer = allQuestions[i].correctAnswer;
          if(x[j].value == allQuestions[i].choices[correctAnswer]){
            correct += 1;
          }
        }
     }
   }
   document.getElementById("questions").innerHTML += 'Correct answers: '+ correctAnswer;
  } 
  */