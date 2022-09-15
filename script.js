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
var next = document.querySelectorAll('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

