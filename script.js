var startScreen = document.getElementById("start-card");
var startButton = document.getElementById("start");
var quizScreen = document.getElementById("quiz-card");
var quizQuestion = document.getElementById("question-title");
var choiceButtonEL = document.getElementById("choice-btns");
var scoreBoard = document.getElementById("score-screen");
var scoreBoardEl = document.getElementById("scoreboard");
var co = 0
var inCo = 0
var index = 0;

var questionArray = [
    {
        question: "What does HTML stand for?",
        answers: ["Hyper Text Markup Lingua", "Hot Tamales Made Locally", "Hyper Text Markup Language", "Hyperlink Transmitting Modal Lexicon"],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "Where might you find a solution to Javascript bugs?",
        answers: ["The Console", "The Terminal", "The Sage", "The Element"],
        correct: "The Console"
    },
    {
        question: "What Javascript value is used for text?",
        answers: ["Threads", "Strings", "Novels", "Lines"],
        correct: "Strings"
    },  
    {
        question: "What unit of measurement is most common in determing font size in CSS?",
        answers: ["Imperial inches (in)", "Pixels (px)", "WordFontSize (wfs)", "Bahrain Dinars (bd)"],
        correct: "Pixels (px)"
    },
    {
        question: "What handy website makes CSS a breeze?",
        answers: ["Bootstring", "CodeR", "StyleFlot", "Bootstrap"],
        correct: "Bootstrap"
    },
    {
        question: "Which HTML tag is used to contain an image?",
        answers: ["<pic>", "<photo>", "<img>", "<view>"],
        correct: "<img>"
    },
    {
        question: "In Javascript, what do you call a block of code used to perform a specific task?",
        answers: ["A function", "An executable", "A routine", "A widget"],
        correct: "A function"
    },
    {
        question: "What three letter command is used to store data in Javascript?",
        answers: ["abc", "val", "var", "ind"],
        correct: "var"
    },
    {
        question: "How many types of heading does HTML support?",
        answers:["4", "5", "6", "7"],
        correct: "6"
    },
    {
        question: "What does NaN represent?",
        answers: ["Not available Number", "Not a Number", "Never at Nantucket", "No arrays Now"],
        correct: "Not a Number"
    },
    
]

var currentQ = questionArray[index];
startButton.addEventListener("click", function(){
    startScreen.setAttribute("class", "hide");
    quizScreen.removeAttribute("class", "hide");
    buildCard();
});

function buildCard() {
    choiceButtonEL.innerHTML = "";
   quizQuestion.textContent = questionArray[index].question;


    currentQ.answers.forEach(function(answer){
       var choiceButton = document.createElement("button");
       choiceButton.setAttribute("value", answer);
       choiceButton.textContent = answer;
       choiceButton.onclick = qClick;
      choiceButtonEL.appendChild(choiceButton);
   })

}

function qClick(){
    
    console.log(this.value)
    //evaluate our answers
    if (this.value !== currentQ.correct) {
        console.log("wrong")
        {inCo++}
    } else {
        console.log("right")
        {co++}
    }
    //increment index value
    index++;
    currentQ = questionArray[index];
    if(index === questionArray.length){
        console.log("endgame")
        quizScreen.setAttribute("class", "hide");
        scoreBoard.removeAttribute("class", "hide");
        scoreBoard.textContent = "correct" + co , "incorrect" + inCo;
        scoreBoardEl.appendChild(scoreBoard);
        
    } else {
    buildCard();
    }
 
}