const start_quiz = document.querySelector(".container .start_quiz");
const btn_start = document.querySelector(".btn_start button");
const btn_next = document.querySelector(".btn_next button");
const btn_submit = document.querySelector(".btn_submit button");
const quiz = document.querySelector(".quiz ");
const all_btn= document.querySelector(".all_btn");
const quiz_answers= document.querySelector(".quiz_answers");
const questionElement = document.getElementById("questionElement");

let count=0;
const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: ["Shark", "Blue Whale", "Elephant", "Giraffe"],
        correct: 1 // Index of the correct answer
    },
    {
        question: "What is your name?",
        answers: ["John", "Jane", "Alice", "Bob"],
        correct: 3
    },
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "What is the tallest mountain in the world?",
        answers: ["K2", "Mount Everest", "Kangchenjunga", "Makalu"],
        correct: 1
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Venus", "Jupiter"],
        correct: 1
    },
    {
        question: "Who wrote the play 'Romeo and Juliet'?",
        answers: ["Shakespeare", "Dickens", "Hemingway", "Austen"],
        correct: 0
    },
    {
        question: "What is the chemical symbol for water?",
        answers: ["O2", "H2O", "CO2", "HO2"],
        correct: 1
    },
    {
        question: "Which country is the largest by land area?",
        answers: ["USA", "China", "Canada", "Russia"],
        correct: 3
    },
    {
        question: "In what year did World War II end?",
        answers: ["1942", "1944", "1945", "1950"],
        correct: 2
    },
    {
        question: "What is the smallest bone in the human body?",
        answers: ["Femur", "Stapes", "Tibia", "Radius"],
        correct: 1
    }
];


console.log(questions.length - 1);




btn_start.addEventListener("click",()=>{
    console.log("Hello");
    start_quiz.classList.add("d-none");
    quiz.classList.remove("move_right");
    all_btn.classList.remove("d-none");
    all_btn.classList.add("d-flex");
    getQuestion();

});


btn_next.classList.add("inactive");

btn_next.addEventListener("click",()=>{
    getQuestion();
    btn_next.classList.add("inactive");

});
btn_submit.addEventListener("click",()=>{
    finishQuiz();
})

quiz_answers.addEventListener("click", (e) => {
    if (e.target.matches(".quiz_answers p")) {
        // Remove the 'selected' class from all answers
        document.querySelector(".quiz_answers .selected")?.classList.remove("selected");
        // Add the 'selected' class to the clicked answer
        e.target.classList.add("selected");
        btn_next.classList.remove("inactive");
    }

});



let currentQuestionIndex = 0;

function getQuestion(){
    if( currentQuestionIndex < questions.length){
        const currentQuestion = questions[currentQuestionIndex];
        console.log(currentQuestion);
        questionElement.textContent = currentQuestion.question;
        const current_answer=currentQuestion.answers
        quiz_answers.innerHTML = `
                    <p>${current_answer[0]}</p>
                    <p>${current_answer[1]}</p>
                    <p>${current_answer[2]}</p>
                    <p>${current_answer[3]}</p>
        `;
        currentQuestionIndex++;


        if (currentQuestionIndex === questions.length ) {
            btn_next.classList.add("d-none"); // Hide the "Next" button
            btn_submit.classList.remove("d-none"); // Show the "Submit" button
        }
    }else{
        finishQuiz();
    }
}

function finishQuiz(){
    questionElement.textContent = "Quiz Complete!";
    quiz_answers.innerHTML = '<p style="text-align: center; border: none;">Thank you for taking the quiz.</p>';
    all_btn.classList.add("d-none");
}

