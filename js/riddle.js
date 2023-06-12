    const riddles = [
        {
          question: "Tiene ojos y no puede ver, tiene un cuarto pero no puede salir. ¿Qué es?",
          answer: "cerradura"
        },
        {
          question: "Blanco por dentro, verde por fuera. Si quieres que te lo diga, espera.",
          answer: "pera"
        },
        {
          question: "Es redondo como el sol, guarda todo en su interior, solo puede abrirlo quien tenga la llave de su corazón.",
          answer: "cofre"
        }
      ];
      
      let score = 0;
      
      function checkAnswers() {
        const nameInput = document.getElementById("nameInput").value;
        const guessInput1 = document.getElementById("guessInput1").value.toLowerCase();
        const guessInput2 = document.getElementById("guessInput2").value.toLowerCase();
        const guessInput3 = document.getElementById("guessInput3").value.toLowerCase();
      
        if (guessInput1 === riddles[0].answer.toLowerCase()) {
          score++;
        }
      
        if (guessInput2 === riddles[1].answer.toLowerCase()) {
          score++;
        }
      
        if (guessInput3 === riddles[2].answer.toLowerCase()) {
          score++;
        }
      
        document.getElementById("result").textContent = `¡${nameInput}, has acertado ${score} adivinanzas!`;
        document.getElementById("score").textContent = `Puntuación Total: ${score}`;
      }
      
      function restartGame() {
        document.getElementById("gameForm").reset();
        document.getElementById("result").textContent = "";
        document.getElementById("score").textContent = "";
        score = 0;
      }