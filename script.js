const questions = [
    { question: "2 + 2", answer: 4 },
    { question: "5 * 3", answer: 15 },
    { question: "10 / 2", answer: 5 },
    { question: "8 - 3", answer: 5 },
    { question: "6 + 7", answer: 13 },
    { question: "4 * 4", answer: 16 },
    { question: "20 / 4", answer: 5 },
    { question: "9 - 2", answer: 7 },
    { question: "3 + 8", answer: 11 },
    { question: "6 * 6", answer: 36 },
    { question: "25 / 5", answer: 5 },
    { question: "12 - 4", answer: 8 }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  let timer;
  
  function startTimer() {
    let timeLeft = 30;
    timer = setInterval(() => {
      document.getElementById('timer').textContent = `Time Left: ${timeLeft}s`;
      timeLeft--;
      if (timeLeft < 0) {
        clearInterval(timer);
        showNextQuestion();
      }
    }, 1000);
  }
  
  function showNextQuestion() {
    if (currentQuestionIndex >= questions.length) {
      clearInterval(timer);
      alert(`Quiz finished! Your score is ${score}`);
      return;
    }
  
    const { question, answer } = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
    currentQuestionIndex++;
    startTimer();
  }
  
  function checkAnswer() {
    const userAnswer = parseInt(document.getElementById('answer').value);
    const correctAnswer = questions[currentQuestionIndex - 1].answer;
    if (userAnswer === correctAnswer) {
      score++;
      document.getElementById('feedback').textContent = 'Correct!';
      document.getElementById('correct-audio').play();
    } else {
      document.getElementById('feedback').textContent = 'Incorrect!';
      document.getElementById('incorrect-audio').play();
    }
    document.getElementById('score').textContent = `Score: ${score}`;
    clearInterval(timer);
    setTimeout(showNextQuestion, 1000);
  }
  
  document.getElementById('submit').addEventListener('click', checkAnswer);
  
  showNextQuestion();
  
  