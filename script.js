var questionBank = [
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of',
        option : ['Asia','Africa','Europe','Nigeria'],
        answer : 'Africa'
    },
    {
        question : 'Garampani sanction is located at',
        option : ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],
        answer : 'Diphu, Assam'
    },
    {
        question : 'For which of the following disiplines is Nobel Prize awarded?',
        option : ['Phyiscs and Chemistry','Physiology or Medical','Literature, Peace and Economics','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Hitler party which came into power in 1933 is known as',
        option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
        answer : 'Nazi Party'
    },
    {
        question : 'First human heart transplanted operation conducted br Dr. Washkanshy, was conducted in',
        option : ['1967','1968','1958','1922'],
        answer : '1967'
    }
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 500;

const displayQuestion = ()=>{
    for(var a=0; a<span.length; a++){
        span[a].style.background = 'none;'
    }
    question.innerHTML = questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    // stat.innerHTML = "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
const calcScore = (e)=>{
    if(e.innerHTML === questionBank[i].answer && score > questionBank.length){
        score += 500;
        document.getElementById(e.id).style.background = 'green';
    }
    else{
        document.getElementById(e.id).style.background = 'red';
    }
    setTimeout(nextQuestion, 2000);
}

const nextQuestion = ()=>{
    if(i < questionBank.length - 1){
        i = i+1
        displayQuestion();
    }
    else{
        points.innerHTML = `Congratulation youve earned $ ${score}`;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//click event to next button
next.addEventListener('click',nextQuestion);

//back to Quiz button event
const backToQuiz = ()=>{
    location.reload();
}

// function to check anwsers
const checkAnswer = ()=>{
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for(var a = 0; a < questionBank.length; a++){
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }

}
displayQuestion();

function fifty(){
    option0.innerHTML = "....."
    option3.innerHTML = "....."
    document.getElementById('fifty').src="/img/50-50-used.png"
    let fifty = document.getElementById("fifty")
    fifty.onclick = ""

}
function phone(){
    document.getElementById('phone').src="/img/phone-a-friend-used.png"
    let phone = document.getElementById("phone")
    phone.onclick = ""
}
function ask(){
    document.getElementById('ask').src="/img/ask-the-audience-used.png"
    let ask = document.getElementById("ask")
    ask.onclick = ""
}