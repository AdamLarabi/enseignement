import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaBars } from "react-icons/fa";
import Cookies from "js-cookie";
import Loading from "../components/Loading";
import { FiCopy } from "react-icons/fi";

function Professor() {
  const [students, setStudents] = useState([]);
  const [tests, setTests] = useState([]); // Pour stocker les tests
  const [loading, setLoading] = useState(true); // État de chargement
  const navigate = useNavigate();

  // Fonction pour gérer l'animation du bouton "Créer un Test"
  const handleCreate = (e) => {
    const buttonText = document.getElementById("button-text");
    const button = document.getElementById("order-button");
    const icon = document.getElementById("menu-icon");

    buttonText.style.display = "none";
    icon.classList.remove("hidden");
    icon.classList.add("animate-menu-icon");
    button.style.background = "none";
    button.classList.remove("rounded-lg", "shadow-lg");

    setTimeout(() => {
      navigate("/createTest");
    }, 2000);
  };

  const [professorEmail, setProfessorEmail] = useState("");

  useEffect(() => {
    const email = Cookies.get("userEmail");
    console.log("Email du cookie:", email);
    if (email) {
      setProfessorEmail(email);
    } else {
      console.error("Le cookie contenant l'email n'est pas trouvé.");
    }
  }, []);

  const handleCopy = (x) => {
    navigator.clipboard.writeText(x); // Copier le code dans le presse-papiers
    // alert("Code copié dans le presse-papiers !");
  };
  // Récupérer les étudiants et les tests de l'API
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Récupérer les étudiants
        const studentResponse = await axios.post(
          "http://localhost:8000/api/students"
        );
        setStudents(studentResponse.data.students);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Vérifiez d'abord si l'email du professeur est défini
        if (!professorEmail) {
          console.error("L'email du professeur n'est pas disponible.");
          return;
        }

        // Récupérer les tests associés au professeur
        const testResponse = await axios.post(
          "http://127.0.0.1:8000/api/professor/tests",
          {
            email: professorEmail, // Envoyer l'email dans le corps de la requête
          }
        );

        setTests(testResponse.data.tests);
      } catch (error) {
        console.error("Erreur lors de la récupération des tests:", error);
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    // Appelez fetchData seulement si l'email du professeur est disponible
    if (professorEmail) {
      fetchData();
    }
  }, [professorEmail]);

  // Fonction pour gérer l'affichage des détails de l'étudiant
  const handleStudentClick = (studentId) => {
    alert(`ID de l'étudiant: ${studentId}`);
  };

  // Fonction pour lancer le test
  const lancerTest = (testCode) => {
    alert(`Lancement du test avec le code: ${testCode}`);
  };

  if (loading) {
    return <Loading />; // Affiche le composant Loading pendant le chargement
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-600 to-slate-400">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-6xl w-full ">
        {/* <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Liste des Étudiants et Tests
        </h2> */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Liste des étudiants */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg shadow-lg p-6 ">
            <h3 className="text-2xl font-bold mb-4 text-center">Étudiants</h3>
            {students.length > 0 ? (
              <ul className="divide-y divide-blue-300">
                {students.map((student, index) => (
                  <li
                    key={index}
                    className="py-4 px-6 flex justify-between items-center bg-white text-gray-800 rounded-lg my-2 shadow-md hover:shadow-lg transition duration-200"
                  >
                    <span className="text-lg font-medium">
                      {student.nom} {student.prenom}
                    </span>
                    <button
                      onClick={() => handleStudentClick(student.id)}
                      className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center"
                    >
                      Détails
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">Aucun étudiant trouvé.</p>
            )}
          </div>

          {/* Liste des tests */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 text-white rounded-lg shadow-lg p-6 ">
            <h3 className="text-2xl font-bold mb-4 text-center">Tests</h3>
            {tests.length > 0 ? (
              <ul className="divide-y divide-green-300">
                {tests.reverse().map((test, index) => (
                  <li
                    key={index}
                    className="py-4 px-6 flex justify-between items-center bg-white text-gray-800 rounded-lg my-2 shadow-md hover:shadow-lg transition duration-200"
                  >
                    {/* Afficher le numéro du test et le code */}
                    <div className="flex flex-col">
                      <span className="text-lg font-medium">
                        Test {tests.length - index}
                      </span>
                      <span className="flex items-center text-lg font-medium">
                        Code : {test.testCode}{" "}
                        <FiCopy
                          onClick={() => handleCopy(test.testCode)}
                          className="ml-2 cursor-pointer text-blue-600 hover:text-blue-800" // Utilise `ml-2` pour un espacement ajusté
                        />
                      </span>

                      <span className="text-sm text-gray-600 mt-1.5">
                        Date : {new Date(test.date).toLocaleDateString("fr-FR")}{" "}
                        {/* Formater la date */}
                      </span>
                    </div>

                    {/* Bouton pour lancer le test avec le code du test */}
                    <button
                      onClick={() => lancerTest(test.testCode)} // Remplacer avec la fonction appropriée
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 flex items-center"
                    >
                      Lancer Test
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="ml-1 h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">Aucun test trouvé.</p>
            )}
          </div>
        </div>

        <div className="flex justify-between mt-8">
          {/* Button to create test */}
          <button
            onClick={handleCreate}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-transform transform relative"
            id="order-button"
          >
            <span id="button-text">Créer un Test</span>
            <FaBars
              className="hidden absolute text-5xl text-black top-1 right-1"
              id="menu-icon"
            />
          </button>

          {/* Button to access profile */}
          <Link to="/profile">
            <button className="w-full sm:w-auto bg-gray-800 text-white py-2 px-6 rounded-lg shadow hover:bg-gray-700 transition duration-200">
              Mon Profil
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Professor;
