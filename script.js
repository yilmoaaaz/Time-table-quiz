const table = [
    { question: "2x3", answer: 6 },
    { question: "4x6", answer: 24 },
    { question: "9x7", answer: 63 },
    { question: "5x9", answer: 45 },
    { question: "2x7", answer: 14 },
    { question: "8x7", answer: 56 }
];

function getRandomQuestion() {
    return table[Math.floor(Math.random() * table.length)];
}

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const randomQuestion = getRandomQuestion();
    questionElement.textContent = randomQuestion.question;
    questionElement.dataset.answer = randomQuestion.answer;
}

function checkAnswer() {
    const answerElement = document.getElementById("answer");
    const resultElement = document.getElementById("result");
    const correctAnswer = parseInt(document.getElementById("question").dataset.answer, 10);
    const userAnswer = parseInt(answerElement.value, 10);

    if (userAnswer === correctAnswer) {
        resultElement.textContent = "True";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "False";
        resultElement.style.color = "red";
    }

    // Clear the input field and display a new question
    answerElement.value = "";
    displayQuestion();
}

// Initialize the first question
displayQuestion();
