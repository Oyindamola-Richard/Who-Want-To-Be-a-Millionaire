var questionBank = [
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993,is in the continent of',
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
var score = 0;

const displayQuestion = ()=>{
    for(var a=0; a<span.length; a++){
        span[a].style.background = 'none;'
    }
    question.innerHTML = 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    statusbar.innerHTML = "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

const calscore = (e)=>{
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length){
        score = score+1;
        document.getElementById(e.id).style.background = 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

const nextQuestion = ()=>{
    if(i<questionBank.length-1){
        i = i+1
        displayQuestion();
    }
    else{
        points.innerHTML = score+'/'+questionBank.length;
        quizContainer.style.display = 'block'
    }
}

//click event to next button
next.addEventListener('click',nextQuestion);

//back to Quiz button event
const backToQuiz = ()=>{
    location.reload();
}


displayQuestion();