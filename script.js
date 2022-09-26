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
        option : ['1958','1968','1967','1922'],
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
var earned = document.getElementById('dispEarned');
var span = document.querySelectorAll('span');
var i = 0;
var score = 1000;

let correctSound = new Audio('/audio/sound_correct.mp3');
let incorrectSound = new Audio('/audio/sound_incorrect.mp3');
let fiftySound = new Audio('/audio/50-50_sound.mp3');
let askAudsound = new Audio('/audio/Ask The Audience_sound.mp3');
let phoneSound = new Audio('/audio/Phone-A-Friend_sound.mp3');
let closingSound = new Audio('/audio/Closing Theme_sound.mp3');
let backgroundSound = new Audio('/audio/sound_background.mp3');
let timeupSound = new Audio('/audio/Time_Up_sound.mp3');

const displayQuestion = ()=>{
    for(var a = 0; a < span.length; a++){
        span[a].style.background = 'none';
    }
    question.innerHTML = questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML === questionBank[i].answer && score > questionBank.length){
        score = score * 2;
        document.getElementById(e.id).style.background = 'green';
        // backgroundSound.pause()
        correctSound.play()
    }
    else{
        document.getElementById(e.id).style.background = 'red';
        incorrectSound.play()
        points.innerHTML = `Congratulations <br> you won <br> ₦ ${score}`;
        scoreboard.style.display = 'grid'
        quizContainer.style.display = 'none'
        alticonDiv.style.display = 'none';
        backgroundSound.pause()
        closingSound.play()
    }
    setTimeout(nextQuestion, 4000);
}

const nextQuestion = ()=>{
    if(i < questionBank.length - 1){
        i = i+1
        displayQuestion();
        earned.innerHTML = `₦ ${score}`;
        // setTimeout(nextQuestion, 5000)
    }
    else{
        points.innerHTML = `Congratulations <br> you won <br> ₦ ${score}`;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'grid'
        alticonDiv.style.display = 'none';
        backgroundSound.pause()
        closingSound.play()
    }
}

//click event to next button
next.addEventListener('click',nextQuestion);

//back to Quiz button event
const backToQuiz = ()=>{
    location.reload();
}

displayQuestion();

// function to 50/50 option
function fifty(){
    let fifty = document.getElementById("fifty")
    option0.innerHTML = "....."
    option3.innerHTML = "....."
    document.getElementById('fifty').src="/img/50-50-used.png"
    fifty.onclick = ""
    fiftySound.play()
}

// function to phone a friend
function phone(){
    let phone = document.getElementById("phone")
    document.getElementById('phone').src="/img/phone-a-friend-used.png"
    phone.onclick = ""
    phoneSound.play()
}

// function to ask audience
function ask(){
    let ask = document.getElementById("ask")
    document.getElementById('ask').src="/img/ask-the-audience-used.png"
    ask.onclick = ""
    askAudsound.play()
}

//function to start game
function startGame(){
    window.location.href = "game.html"
}

//function to onload of game.html
function onloadGame(){
    backgroundSound.play()
}