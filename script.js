//Array to store all of the questions, their possible awnsers and wether or not the awsners is true or false 
var questions = [
    {
        question: 'What city were the Jazz located in before moving to Utah?',
        answers: [
            { text: 'New Orleans', correct: true},
            { text: 'Chicago', correct: false },
            { text: 'Chattanooga', correct: false },
            { text: 'Kansas City ', correct: false },
        ]
    },
    {
        question: 'What is the legendary Karl Malone’s nick name?',
        answers: [
            { text: 'The Mailman', correct: true},
            { text: 'The Delivery-man', correct: false },
            { text: 'The Postman', correct: false },
            { text: 'The Courier', correct: false },
        ]
    },
    {
        question: 'Which one of these numbers is NOT retired by the Utah Jazz?',
        answers: [
            { text: '20', correct: true},
            { text: '12', correct: false },
            { text: '32', correct: false },
            { text: '35', correct: false },
        ]
    },
    {
        question: 'How many times have the Jazz won the NBA championship?',
        answers: [
            { text: '0', correct: true},
            { text: '2', correct: false },
            { text: '4', correct: false },
            { text: '9', correct: false },
        ]
    },
    {
        question: 'What college did Utah Jazz star Donovan Mitchell play for?',
        answers: [
            { text: 'Louisville ', correct: true},
            { text: 'Duke', correct: false },
            { text: 'Villanova', correct: false },
            { text: 'Gonzaga', correct: false },
        ]
    },
    {
        question: 'What is the current Jazz logo (2019-2020)?',
        answers: [
            { text: 'Music Note', correct: true},
            { text: 'Mountains', correct: false },
            { text: 'A Saxophone', correct: false },
            { text: 'The Arches', correct: false },
        ]
    },
    {
        question: 'Who is the mascot for the Utah Jazz? ',
        answers: [
            { text: 'The Jazz Bear', correct: true},
            { text: 'The Jazz Bee', correct: false },
            { text: 'The Jazz Bobcat', correct: false },
            { text: 'The Scat Man', correct: false },
        ]
    },
    {
        question: 'What is the name of the stadium that the Jazz currently play in (2019-2020)?',
        answers: [
            { text: 'Vivant Smart Home Arena', correct: true},
            { text: 'The Delta Center', correct: false },
            { text: 'Energy Solutions Arena', correct: false },
            { text: 'The Maverick Center', correct: false },
        ]
    },
    {
        question: 'How many times have the Utah Jazz currently advanced to the playoffs (2019-2020)?',
        answers: [
            { text: '28', correct: true},
            { text: '26', correct: false },
            { text: '13', correct: false },
            { text: '17', correct: false },
        ]
    },
    {
        question: 'Which one of these people have NOT coached the Utah Jazz?',
        answers: [
            { text: 'Larry Miller ', correct: true},
            { text: 'Quin Snyder', correct: false },
            { text: 'Jerry Sloan', correct: false },
            { text: 'Tyrone Corbin', correct: false },
        ]
    },

]
//Put other needed varialbes here 
var startBtn = document.getElementById('start-btn');

//Put functions here 
//function that will start the game 
startBtn.addEventListener('click', function yolo() {
    console.log('started')
   });


//function that will get the next question 
function nextQuestion() {

}

//function for when the user selecets an awnsers 
function selectedAwnser() {

}