import React, { useState } from "react";
import QCMSettings from "../components/QCMSettings";
import QuestionForm from "../components/QuestionForm";
import axios from "axios";
import Cookies from "js-cookie";

function CreateTest() {
  const [testType, setTestType] = useState("qcm"); // Par défaut, le type de test est un QCM
  const [duration, setDuration] = useState(60); // Durée par défaut
  const [questions, setQuestions] = useState([]); // Questions du test
  const [errorMsg, setErrorMsg] = useState("");

  const handleTestTypeChange = (e) => {
    setTestType(e.target.value);
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  };

  const handleSubmit = async () => {
    const email = Cookies.get("userEmail"); // Récupérer l'email à partir des cookies
    const currentDate = new Date().toISOString().split("T")[0]; // Date du jour

    let formattedQuestions;

    if (testType === "qcm") {
      // Formatage pour un QCM
      formattedQuestions = questions.map((q) => ({
        text: q.question,
        options: q.options,
        correctAnswer: q.correctOption,
      }));
    } else if (testType === "simple") {
      // Formatage pour une question simple
      formattedQuestions = questions.map((q) => ({
        text: q.text,
      }));
    }

    // Préparation des données selon le type de test
    const testData = {
      email,
      date: currentDate,
      duration,
      type: testType,
      questions: formattedQuestions,
    };

    try {
      console.log(testData);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/tests",
        testData
      );
      if (response.status === 200) {
        alert("Test créé avec succès !");
      }
    } catch (error) {
      console.error("Erreur lors de la création du test :", error);
      setErrorMsg("Erreur lors de la création du test. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-slate-600 to-slate-400 p-6">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Créer un Test
        </h1>

        {/* Sélection du type de test */}
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Choisissez le type de test :
          </label>
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <input
                id="qcm"
                type="radio"
                value="qcm"
                checked={testType === "qcm"}
                onChange={handleTestTypeChange}
                className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
              />
              <label htmlFor="qcm" className="ml-2 text-lg text-gray-700">
                QCM
              </label>
            </div>
            <div className="flex items-center">
              <input
                id="simple"
                type="radio"
                value="simple"
                checked={testType === "simple"}
                onChange={handleTestTypeChange}
                className="h-6 w-6 text-blue-600 focus:ring-blue-500 border-gray-300 rounded-full"
              />
              <label htmlFor="simple" className="ml-2 text-lg text-gray-700">
                Question Simple
              </label>
            </div>
          </div>
        </div>

        {/* Input pour la durée */}
        <div className="mb-4">
          <label
            htmlFor="duration"
            className="block text-lg font-semibold text-gray-700 mb-2"
          >
            Durée du test (en minutes) :
          </label>
          <input
            type="number"
            id="duration"
            value={duration}
            onChange={handleDurationChange}
            className="w-full p-2 border border-gray-300 rounded-lg"
          />
        </div>

        {/* Affichage du formulaire en fonction du type de test */}
        <div className="border-t border-gray-300 mt-4 pt-4">
          {testType === "qcm" && <QCMSettings setQuestions={setQuestions} />}
          {testType === "simple" && (
            <QuestionForm setQuestions={setQuestions} />
          )}
        </div>

        {/* Bouton pour soumettre le test */}
        <button
          onClick={handleSubmit}
          className="mt-6 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500"
        >
          Soumettre le test
        </button>

        {/* Message d'erreur */}
        {errorMsg && (
          <p className="text-red-600 font-semibold mt-4">{errorMsg}</p>
        )}
      </div>
    </div>
  );
}

export default CreateTest;
