// Question Var
var questionBank = [
    {
        question : 'What’s the largest country in the world, by population?',
        option : ['Canada','China','United States','Russia'],
        answer : 'China'
    },
    {
        question : 'What does “ASAP” stand for?',
        option : ['As soon as possible','As soon as prelevant','As soon as prepared','As simple as possible'],
        answer : 'As soon as possible'
    },
    {
        question : 'When is Halloween celebrated?',
        option : ['September 1st','October 31st','August 30th','October 1st'],
        answer : 'October 31st'
    },
    {
        question : 'Eritrea, which became the 182nd member of the UN in 1993, is in the continent of?',
        option : ['Asia','Africa','Europe','Nigeria'],
        answer : 'Africa'
    },
    {
        question : 'Garampani sanction is located at?',
        option : ['Junagarh, Gujarat','Diphu, Assam','Kohima, Nagaland','Gangtok, Sikkim'],
        answer : 'Diphu, Assam'
    },
    {
        question : 'For which of the following disiplines is Nobel Prize awarded?',
        option : ['Phyiscs and Chemistry','Physiology or Medical','Literature, Peace and Economics','All of the above'],
        answer : 'All of the above'
    },
    {
        question : 'Hitler party which came into power in 1933 is known as?',
        option : ['Labour Party','Nazi Party','Ku-Klux-Klan','Democratic Party'],
        answer : 'Nazi Party'
    },
    {
        question : 'First human heart transplanted operation conducted br Dr. Washkanshy, was conducted in?',
        option : ['1958','1968','1967','1922'],
        answer : '1967'
    },
    {
        question : 'How would one say goodbye in Spanish?',
        option : ['Bawoni','Adios','Salir','Hola'],
        answer : 'Adios'
    },
    {
        question : 'Which of the following regions is NOT a part of the United Kingdom?',
        option : ['England','Wales','The Isle of Man','Scotland'],
        answer : 'The Isle of Man'
    },
    {
        question : 'English belongs to what Indo-European language family?',
        option : ['Germanic','Romance','Slavic','Sitinic'],
        answer : 'Germanic'
    },
    {
        question : 'Portugal borders only one other country. Which one is it?',
        option : ['Italy','Monaco','Spain','Germany'],
        answer : 'Spain'
    },
    {
        question : 'What does the British slang “tosh” stand for?',
        option : ['Dishes','Purse','Dough','Nonsense'],
        answer : 'Nonsense'
    },
    {
        question : 'What is the capital of Estonia?',
        option : ['Talinn','Riga','Ikorodu','Ogbomoso'],
        answer : 'Talinn'
    },
    {
        question : 'What is the more common name for a “lexicon”?',
        option : ['Prayers Book','Dictionary','Autobiography','Travel guide'],
        answer : 'Dictionary'
    },
    {
        question : 'What does the word “renaissance” stand for?',
        option : ['Rebirth','Truth','Life','Knowledge'],
        answer : 'Rebirth'
    },
    {
        question : 'Which famous theologian founded Protestantism?',
        option : ['Sani Abacha','Adolf Hitler','Voltear','Martin Luther'],
        answer : 'Martin Luther'
    },
    {
        question : 'Poisson d’Avril is the French equivalent of what day?',
        option : ['Good Friday','April Fools','Christmas Eve','Thanksgiving'],
        answer : 'April Fools'
    },
    {
        question : 'What is the most widely translated book in the world?',
        option : ['The Bible','Don Quixote','Hamlet','The Great Gatsby'],
        answer : 'The Bible'
    },
    {
        question : 'Which of the following countries is the smallest in the world?',
        option : ['Cyprus','Vatican City','Ikoyi','Singapore'],
        answer : 'Vatican City'
    },
    {
        question : 'Who won Eurovision in 2015 with the Mans Zelmerlow song entitled “Heroes”?',
        option : ['Sweden','France','Poland','Estonia'],
        answer : 'Sweden'
    },
    {
        question : 'How many people in the world speak English?',
        option : ['Around 100 million','Around 480 million','Around 260 million','Around a billion'],
        answer : 'Around 480 million'
    },
    {
        question : 'Which country won football World Cup 2018?',
        option : ['Nigeria','Germany','France','MexicoMexico'],
        answer : 'France'
    },
    {
        question : 'Where was the croissant invented?',
        option : ['Switzeland','France','Austria','Norway'],
        answer : 'Austria'
    },
    {
        question : 'Russia is a — what?',
        option : ['Federation','Kingdom','Democratic Republic','State of Anarchy'],
        answer : 'Federation'
    },
    {
        question : 'Which of these words is misspelled?',
        option : ['Confliction','Configuration','Contraction','Conflagciation'],
        answer : 'Conflagciation'
    },
    {
        question : 'How many languages are spoken around the world?',
        option : ['2,000','Over 7,000','1,506','Over 50,000'],
        answer : 'Over 7,000'
    },
    {
        question : 'What’s the largest country in the world, by geographic area?',
        option : ['Russia','Canada','United States','Africa'],
        answer : 'Russia'
    },
    {
        question : 'Which of the following is a Germanic language?',
        option : ['Flemish','Dutch','Afrikaans','Luxembourgish'],
        answer : 'Afrikaans'
    },
    {
        question : 'What is the motto of the European Union?',
        option : ['United in diversity','Don’t be evil','United in coal and steel','Embracing diversity in unison'],
        answer : 'United in diversity'
    },
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
var score = 500;

let correctSound = new Audio('/audio/sound_correct.mp3');
let incorrectSound = new Audio('/audio/sound_incorrect.mp3');
let fiftySound = new Audio('/audio/50-50_sound.mp3');
let askAudsound = new Audio('/audio/Ask The Audience_sound.mp3');
let phoneSound = new Audio('/audio/Phone-A-Friend_sound.mp3');
let closingSound = new Audio('/audio/Closing Theme_sound.mp3');
let backgroundSound = new Audio('/audio/sound_background.mp3');
let timeupSound = new Audio('/audio/Time_Up_sound.mp3');

// Function to display questions
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

// Function to calculate scores
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

// Function to display next question
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
        over.style.display = 'none'
        backgroundSound.pause()
        closingSound.play()
    }
}

// Click event to next button
next.addEventListener('click',nextQuestion);

// Back to Quiz button event
const backToQuiz = ()=>{
    location.reload();
}

displayQuestion();

// Function to 50/50 option
function fifty(){
    let fifty = document.getElementById("fifty")
    option0.innerHTML = "....."
    option3.innerHTML = "....."
    document.getElementById('fifty').src="/img/50-50-used.png"
    fifty.onclick = ""
    fiftySound.play()
}

// Function to phone a friend
function phone(){
    let phone = document.getElementById("phone")
    document.getElementById('phone').src="/img/phone-a-friend-used.png"
    phone.onclick = ""
    phoneSound.play()
}

// Function to ask audience
function ask(){
    let ask = document.getElementById("ask")
    document.getElementById('ask').src="/img/ask-the-audience-used.png"
    ask.onclick = ""
    askAudsound.play()
}

// Function to start game
function startGame(){
    window.location.href = "game.html"
}

// Function to onload of game.html
function onloadGame(){
    backgroundSound.play()
}