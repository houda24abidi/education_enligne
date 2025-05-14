import React, { useState } from "react";

const quizData = [
  {
    question: "Quelle est la capitale de la France ?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: "Paris",
  },
  {
    question: "Combien y a-t-il de planètes dans le système solaire ?",
    options: ["7", "8", "9", "10"],
    correct: "8",
  },
  {
    question: "React est une bibliothèque développée par :",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    correct: "Facebook",
  },
];

const StudentQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelected(option);
    if (option === quizData[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-xl rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-center">Quiz de l'Étudiant</h2>

      {showResult ? (
        <div className="text-center">
          <p className="text-2xl font-semibold">Votre score : {score}/{quizData.length}</p>
        </div>
      ) : (
        <div>
          <p className="text-lg mb-3">
            Question {currentQuestion + 1} sur {quizData.length}
          </p>
          <h3 className="text-md font-medium mb-4">
            {quizData[currentQuestion].question}
          </h3>
          <ul className="space-y-2">
            {quizData[currentQuestion].options.map((option, index) => (
              <li key={index}>
                <button
                  className={`w-full text-left px-4 py-2 border rounded-lg ${
                    selected === option
                      ? option === quizData[currentQuestion].correct
                        ? "bg-green-200"
                        : "bg-red-200"
                      : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleAnswer(option)}
                  disabled={selected !== null}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          {selected && (
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={nextQuestion}
            >
              Suivant
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentQuiz;
