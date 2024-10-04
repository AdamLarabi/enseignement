import React, { useState } from "react";
import QCMSettings from "../components/QCMSettings";
import QuestionForm from "../components/QuestionForm";

function CreateTest() {
  const [testType, setTestType] = useState("qcm"); // Par défaut, le type de test est un QCM

  const handleTestTypeChange = (e) => {
    setTestType(e.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-r from-slate-600 to-slate-400 p-6">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-4">
          Créer un Test
        </h1>
        <div className="mb-4">
          <label className="block text-lg font-semibold text-gray-700 mb-2">
            Choisissez le type de test :
          </label>
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center">
              <input
                id="qcm" // Ajoutez un id unique pour chaque radio
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
              <label className="ml-2 text-lg text-gray-700" htmlFor="simple">
                Question Simple
              </label>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-4 pt-4">
          {testType === "qcm" && <QCMSettings />}
          {testType === "simple" && <QuestionForm />}
        </div>
      </div>
    </div>
  );
}

export default CreateTest;
