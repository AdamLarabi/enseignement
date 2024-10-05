import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

function AnswerTest() {
  const [testData, setTestData] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await getTestDataFromDB();
      setTestData(data);
    };

    fetchData();
  }, []);

  const handleAnswerChange = (questionId, answer) => {
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    const email = Cookies.get("userEmail");
    if (email) {
      alert(`Bonjour, ${email}`);
    } else {
      alert("Bonjour, utilisateur !");
    }
    console.log("Réponses de l'utilisateur :", userAnswers);
  };

  const getTestDataFromDB = async () => {
    return {
      questions: [
        {
          id: 1,
          type: "simple",
          question: "Écrivez un algorithme pour trier un tableau.",
        },
        {
          id: 2,
          type: "qcm",
          question: "Quelle est la capitale de la France ?",
          options: ["Berlin", "Paris", "Madrid"],
        },
      ],
    };
  };

  if (!testData) {
    return (
      <div className="text-center text-blue-600">Chargement des données...</div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Répondez au Test
      </h2>
      {testData.questions.map((q) => (
        <div
          key={q.id}
          className="mb-6 p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
        >
          <label className="block mb-4 text-lg font-medium text-gray-700">
            {q.question}
          </label>
          {q.type === "simple" ? (
            <textarea
              onChange={(e) => handleAnswerChange(q.id, e.target.value)}
              placeholder="Écrivez votre réponse ici..."
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              rows={6}
            />
          ) : (
            q.options.map((option, index) => (
              <div key={index} className="flex items-center mb-3">
                <input
                  type="radio"
                  id={`option-${q.id}-${index}`}
                  name={`question-${q.id}`}
                  value={option}
                  onChange={(e) => handleAnswerChange(q.id, e.target.value)}
                  className="mr-2 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />
                <label
                  htmlFor={`option-${q.id}-${index}`}
                  className="text-gray-700"
                >
                  {option}
                </label>
              </div>
            ))
          )}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded-lg shadow hover:bg-blue-600 transform transition-transform duration-200 hover:scale-105"
      >
        Soumettre
      </button>
    </div>
  );
}

export default AnswerTest;
