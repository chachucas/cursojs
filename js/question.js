// Preguntas y respuestas
const questions = [
    {
        question: "¿Cuál es el animal más rápido del mundo?",
        options: ["Guepardo", "León", "Águila"],
        answer: 0
    },
    {
        question: "¿Cuál es el océano más grande del mundo?",
        options: ["Océano Atlántico", "Océano Pacífico", "Océano Índico"],
        answer: 1
    },
    {
        question: "¿Cuál es el país con mayor población del mundo?",
        options: ["India", "China", "Estados Unidos"],
        answer: 1
    },
    {
        question: "¿Cuál es el edificio más alto del mundo?",
        options: ["Burj Khalifa", "Shanghai Tower", "One World Trade Center"],
        answer: 0
    },
    {
        question: "¿Cuál es el elemento químico más abundante en la corteza terrestre?",
        options: ["Oxígeno", "Silicio", "Aluminio"],
        answer: 1
    }
];

// Variables de juego
let currentQuestionIndex = 0;
let score = 0;

// Función para iniciar el juego
function startGame() {
    showQuestion();
}

// Función para mostrar una pregunta
function showQuestion() {
    const questionContainer = document.getElementById("question-container");
    const question = questions[currentQuestionIndex];
    const questionText = questionContainer.querySelector(".question");
    const options = questionContainer.querySelector(".options");
    const optionButtons = options.querySelectorAll(".option");

    // Mostrar la pregunta
    questionText.textContent = question.question;

    // Mostrar las opciones de respuesta
    question.options.forEach((option, index) => {
        optionButtons[index].textContent = option;
    });
}

// Función para verificar la respuesta seleccionada
function checkAnswer(optionIndex) {
    const question = questions[currentQuestionIndex];
    const resultContainer = document.getElementById("result-container");
    const resultText = resultContainer.querySelector(".result");
    const scoreText = document.querySelector(".score");

    // Comparar la opción seleccionada con la respuesta correcta
    if (optionIndex === question.answer) {
        score++;
        resultText.textContent = "¡Correcto!";
        resultText.style.color = "#4caf50";
    } else {
        resultText.textContent = "Incorrecto";
        resultText.style.color = "#f44336";
    }

    // Mostrar la respuesta y la puntuación actualizada
    resultContainer.style.display = "block";
    scoreText.textContent = "Puntuación: " + score;

    // Pasar a la siguiente pregunta o finalizar el juego
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        setTimeout(showQuestion, 1000);
    } else {
        showFinalScore();
    }
}

// Función para mostrar la puntuación final y mensaje de felicitaciones
function showFinalScore() {
    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const resultText = resultContainer.querySelector(".result");
    const scoreText = document.querySelector(".score");
    const restartButton = document.querySelector(".restart");

    // Ocultar el contenedor de la pregunta y mostrar la puntuación final
    questionContainer.style.display = "none";
    scoreText.textContent = "¡Felicidades! Tu puntuación final es: " + score;

    // Mostrar mensaje personalizado de acuerdo a la puntuación obtenida
    if (score === questions.length) {
        resultText.textContent = "¡Excelente! ¡Acertaste todas las preguntas!";
    } else if (score >= questions.length / 2) {
        resultText.textContent = "¡Buen trabajo! Has acertado la mayoría de las preguntas.";
    } else {
        resultText.textContent = "Puedes mejorar tu puntuación.";
    }

    // Mostrar el contenedor de resultados y el botón de reinicio
    resultContainer.style.display = "block";
    restartButton.style.display = "block";
}

// Función para reiniciar el juego
function restartGame() {
    currentQuestionIndex = 0;
    score = 0;

    const questionContainer = document.getElementById("question-container");
    const resultContainer = document.getElementById("result-container");
    const scoreText = document.querySelector(".score");
    const restartButton = document.querySelector(".restart");

    // Mostrar el contenedor de la pregunta y ocultar el contenedor de resultados y el botón de reinicio
    questionContainer.style.display = "block";
    resultContainer.style.display = "none";
    restartButton.style.display = "none";

    // Reiniciar la puntuación y mostrar la primera pregunta
    scoreText.textContent = "";
    showQuestion();
}