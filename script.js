//Var for the button to start the game, load the next question and finish the game 
var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var finishButton = document.getElementById('finish-btn')
//Var for selecting multiple elements on the page to minipulate 
var mainCardElement = document.getElementById('main-card')
var questionCardElement = document.getElementById('question-card')
var timerElement = document.getElementById('timer')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var pointElement = document.getElementById('score-count')

// variable to keep track of the user's score 
var scoreCount = 0

var getRandomQuestion, questionIndex

//event listener for when the start game button is pressed 
startButton.addEventListener('click', startGame)

//eventlistener for the next button after a question is awnsered to proceded to the next question, will stop if there are no more quesitons in the array to get 
nextButton.addEventListener('click', () => {
    questionIndex++
    nextQuestion()
})

finishButton.addEventListener('click', endGame)

//function to start the game when the start button is pressed
function startGame() {
    mainCardElement.classList.add('hide')
    getRandomQuestion = questions.sort(() => Math.random() - .5)
    questionIndex = 0
    questionCardElement.classList.remove('hide')
    timerElement.classList.remove('hide')
    pointElement.classList.remove('hide')
    nextQuestion()
    timer()
}


//function that will get the next question 
function nextQuestion() {
    resetState()
    showQuestion(getRandomQuestion[questionIndex])
}
//function removes the previous awnser buttons (to prevent a user from slecting an awnser from a previous question) and removes the next question button to force the user to select and awnser
function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
//function called when the game is started to get the questions and awnsers to show 
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        var button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn')
        if (answers.correct) {
            button.dataset.correct = answers.correct

        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}
//function for when the user selecets an awnsers, will also bring up a finish button 
function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (getRandomQuestion.length > questionIndex + 1) {
        nextButton.classList.remove('hide')
        //adds a point if the selcted awnser was correct 
        if (event.target.dataset.correct === 'true') {
            
            scoreCount++
            document.getElementById('scoreDisplay').innerHTML = 'Points:  ' + scoreCount
        }
    } else {
        //adds a point if the selcted awnser was correct and it was the last awnser 
        if (event.target.dataset.correct === 'true') {
            scoreCount++
            pointElement.classList.add('hide')
            console.log(scoreCount)
            //stores the user's score in the local storage after the last question 
            localStorage.setItem("score", scoreCount);

        }
        finishButton.classList.remove('hide')
    }
}


//funtion to add green and red to the buttons indicating the correct awnsers AFTER the user inputs a choice
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
//function removes the green and red which indicate the right awnser AFTER moving to the next question 
function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
// function for the game timer that is called by pressing the start game button, if the timer reaches 0 it will alert the user that time us up and bring them to the score screen
function timer() {
    var sec = 119;  //intentially made the time 119 seconds becuase it takes about a seconds for the function to start after the start game button is pressed 
    var timer = setInterval(function () {
        document.getElementById('timerDisplay').innerHTML = '' + sec + '   seconds remaining'
        sec--
        if (sec < 0) {
            clearInterval(timer)
            alert('TIME IS UP')
            endGame()
        }
    }, 1000)
}


// function that will end the game and bring the user to the score screen. 
function endGame() {
    window.location.href = "scores.html"

}



//Array to store all of the questions, their possible awnsers and wether or not the awsners is true or false 
var questions = [
    {
        question: 'What city were the Jazz located in before moving to Utah?',
        answers: [
            { text: 'Chicago', correct: false },
            { text: 'New Orleans', correct: true },
            { text: 'Chattanooga', correct: false },
            { text: 'Kansas City ', correct: false },
        ]
    },
    {
        question: 'What is the legendary Karl Malone’s nick name?',
        answers: [
            { text: 'The Delivery-man', correct: false },
            { text: 'The Postman', correct: false },
            { text: 'The Mailman', correct: true },
            { text: 'The Courier', correct: false },
        ]
    },
    {
        question: 'Which one of these numbers is NOT retired by the Utah Jazz?',
        answers: [
            { text: '20', correct: true },
            { text: '12', correct: false },
            { text: '32', correct: false },
            { text: '35', correct: false },
        ]
    },
    {
        question: 'How many times have the Jazz won the NBA championship?',
        answers: [
            { text: '2', correct: false },
            { text: '0', correct: true },
            { text: '4', correct: false },
            { text: '9', correct: false },
        ]
    },
    {
        question: 'What college did Utah Jazz star Donovan Mitchell play for?',
        answers: [
            { text: 'Duke', correct: false },
            { text: 'Villanova', correct: false },
            { text: 'Gonzaga', correct: false },
            { text: 'Louisville ', correct: true },
        ]
    },
    {
        question: 'What is the current Jazz logo (2019-2020)?',
        answers: [
            { text: 'Music Note', correct: true },
            { text: 'Mountains', correct: false },
            { text: 'A Saxophone', correct: false },
            { text: 'The Arches', correct: false },
        ]
    },
    {
        question: 'Who is the mascot for the Utah Jazz? ',
        answers: [
            { text: 'The Jazz Bee', correct: false },
            { text: 'The Jazz Bobcat', correct: false },
            { text: 'The Jazz Bear', correct: true },
            { text: 'The Scat Man', correct: false },
        ]
    },
    {
        question: 'What is the name of the stadium that the Jazz currently play in (2019-2020)?',
        answers: [
            { text: 'The Delta Center', correct: false },
            { text: 'Vivant Smart Home Arena', correct: true },
            { text: 'Energy Solutions Arena', correct: false },
            { text: 'The Maverick Center', correct: false },
        ]
    },
    {
        question: 'How many times have the Utah Jazz currently advanced to the playoffs (2019-2020)?',
        answers: [
            { text: '26', correct: false },
            { text: '13', correct: false },
            { text: '17', correct: false },
            { text: '28', correct: true },
        ]
    },
    {
        question: 'Which one of these people have NOT coached the Utah Jazz?',
        answers: [
            { text: 'Quin Snyder', correct: false },
            { text: 'Jerry Sloan', correct: false },
            { text: 'Larry Miller ', correct: true },
            { text: 'Tyrone Corbin', correct: false },
        ]
    },

]