import React, { useState } from "react";

function QuestionForm() {
  const [questionText, setQuestionText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Traitez l'envoi de la question ici
    console.log("Question simple soumise:", questionText);
    setQuestionText("");
  };

  return (
    <div className="bg-white p-4 rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Créer une Question Simple</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">Question :</label>
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          placeholder="Entrez votre question"
          className="w-full mb-4 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Soumettre
        </button>
      </form>
    </div>
  );
}

export default QuestionForm;
