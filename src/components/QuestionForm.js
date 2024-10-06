import React, { useState, useEffect } from "react";

function QuestionForm({ setQuestions }) {
  const [questionText, setQuestionText] = useState("");

  // Met à jour la question à chaque changement de l'input
  useEffect(() => {
    if (questionText.trim()) {
      setQuestions([{ text: questionText }]); // Mettez à jour l'état avec une seule question
    } else {
      setQuestions([]); // Réinitialiser si le champ est vide
    }
  }, [questionText, setQuestions]);

  return (
    <div>
      <h2 className="text-2xl font-semibold">Ajouter une question simple</h2>
      <input
        type="text"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-lg mt-2"
        placeholder="Entrez votre question ici"
      />
    </div>
  );
}

export default QuestionForm;
