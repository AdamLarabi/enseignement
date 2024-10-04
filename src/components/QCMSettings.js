import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

function QCMSettings() {
  const [numberOfQuestions, setNumberOfQuestions] = useState(1);
  const [questions, setQuestions] = useState([
    { question: "", options: ["", "", ""], correctOption: "" },
  ]);
  const [feedback, setFeedback] = useState("");

  const handleNumberOfQuestionsIncrease = () => {
    if (numberOfQuestions < 20) {
      // Limite à 20 questions
      setNumberOfQuestions((prev) => prev + 1);
      setQuestions((prev) => [
        ...prev,
        { question: "", options: ["", "", ""], correctOption: "" },
      ]);
      setFeedback("Question ajoutée !");
      setTimeout(() => setFeedback(""), 2000);
    } else {
      setFeedback("Limite atteinte : maximum 20 questions !");
      setTimeout(() => setFeedback(""), 2000);
    }
  };

  const handleNumberOfQuestionsDecrease = () => {
    if (numberOfQuestions > 1) {
      setNumberOfQuestions((prev) => prev - 1);
      setQuestions((prev) => prev.slice(0, -1));
      setFeedback("Question supprimée !");
      setTimeout(() => setFeedback(""), 2000);
    }
  };

  const handleSubmit = () => {
    // Ici, vous pouvez gérer la soumission des questions
    console.log("Questions soumises :", questions);
    setFeedback("QCM soumis avec succès !");
    setTimeout(() => setFeedback(""), 2000);
  };

  return (
    <div className="bg-white p-4 rounded shadow-lg">
      <h2 className="text-xl font-semibold mb-2">Paramètres QCM</h2>
      <div className="flex items-center mb-4">
        <button
          onClick={handleNumberOfQuestionsDecrease}
          className="bg-red-500 text-white p-2 rounded-l hover:bg-red-600 flex items-center transform transition-transform duration-200 hover:scale-105"
        >
          <FaMinus />
        </button>
        <span className="border-t border-b w-20 text-center py-2 mx-2">
          {numberOfQuestions}
        </span>
        <button
          onClick={handleNumberOfQuestionsIncrease}
          className="bg-green-500 text-white p-2 rounded-r hover:bg-green-600 flex items-center transform transition-transform duration-200 hover:scale-105"
        >
          <FaPlus />
        </button>
      </div>
      {feedback && <div className="text-green-600 mb-2">{feedback}</div>}
      <div className="h-2 bg-gray-200 rounded mb-4">
        <div
          className="h-full bg-blue-500 rounded"
          style={{ width: `${(numberOfQuestions / 20) * 100}%` }} // 20 questions == 100%
        ></div>
      </div>
      {questions.map((q, index) => (
        <div key={index} className="mb-4">
          <label className="block mb-2">Question {index + 1} :</label>
          <input
            type="text"
            value={q.question}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].question = e.target.value;
              setQuestions(newQuestions);
            }}
            placeholder="Entrez votre question"
            className="w-full mb-2 p-2 border rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
          />
          <label className="block mb-2">Options :</label>
          {q.options.map((option, optIndex) => (
            <input
              key={optIndex}
              type="text"
              value={option}
              onChange={(e) => {
                const newQuestions = [...questions];
                newQuestions[index].options[optIndex] = e.target.value;
                setQuestions(newQuestions);
              }}
              placeholder={`Option ${optIndex + 1}`}
              className="w-full mb-2 p-2 border rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
            />
          ))}
          <label className="block mb-2">Réponse correcte :</label>
          <select
            value={q.correctOption}
            onChange={(e) => {
              const newQuestions = [...questions];
              newQuestions[index].correctOption = e.target.value;
              setQuestions(newQuestions);
            }}
            className="w-full mb-2 p-2 border rounded transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 hover:bg-gray-100"
          >
            <option value="">Sélectionnez une option</option>
            {q.options.map((option, optIndex) => (
              <option key={optIndex} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transform transition-transform duration-200 hover:scale-105"
      >
        Soumettre
      </button>
    </div>
  );
}

export default QCMSettings;
