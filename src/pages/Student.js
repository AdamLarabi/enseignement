import React, { useState } from "react";

function Student() {
  const [testCode, setTestCode] = useState("");

  const handleCodeChange = (e) => {
    setTestCode(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (testCode) {
      alert(`Code soumis : ${testCode}`);
      // Logique supplémentaire pour traiter le code...
    } else {
      alert("Veuillez entrer un code.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Entrer le Code du Test
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label
            htmlFor="testCode"
            className="text-lg font-semibold text-gray-700"
          >
            Code du Test
          </label>
          <input
            id="testCode"
            type="text"
            value={testCode}
            onChange={handleCodeChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
            placeholder="Entrez votre code ici..."
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg shadow hover:bg-indigo-600 transform transition-transform duration-200 hover:scale-105"
          >
            Valider
          </button>
        </form>
      </div>
    </div>
  );
}

export default Student;
