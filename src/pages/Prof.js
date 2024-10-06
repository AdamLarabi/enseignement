import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading"; // Assurez-vous que le chemin est correct

function Professor() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true); // État de chargement

  // Fetch students from API
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.post("http://localhost:8000/api/students");
        setStudents(response.data.students);
      } catch (error) {
        console.error("Erreur lors de la récupération des étudiants:", error);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchStudents();
  }, []);

  // Function to handle student detail alert
  const handleStudentClick = (studentId) => {
    alert(`ID de l'étudiant: ${studentId}`);
  };

  if (loading) {
    return <Loading />; // Affiche le composant Loading pendant le chargement
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-600 to-slate-400">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Liste des Étudiants
        </h2>

        <div className="mb-6">
          {students.length > 0 ? (
            <ul className="divide-y divide-gray-300">
              {students.map((student, index) => (
                <li
                  key={index}
                  className="py-4 px-6 flex justify-between items-center bg-gray-100 rounded-md my-2 shadow"
                >
                  <span className="text-lg font-medium text-gray-700">
                    {student.nom} {student.prenom}
                  </span>
                  {/* Button to show student details */}
                  <button
                    onClick={() => handleStudentClick(student.id)}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    Détails
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500">Aucun étudiant trouvé.</p>
          )}
        </div>

        <div className="flex justify-between mt-8">
          {/* Button to create test */}
          <Link to="/createTest">
            <button className="w-full sm:w-auto bg-indigo-500 text-white py-2 px-6 rounded-lg shadow hover:bg-indigo-600 transform transition-transform duration-200 hover:scale-105">
              Créer un Test
            </button>
          </Link>

          {/* Button to access profile */}
          <Link to="/profile">
            <button className="w-full sm:w-auto bg-gray-800 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-900 transform transition-transform duration-200 hover:scale-105">
              Accéder au Profil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Professor;
