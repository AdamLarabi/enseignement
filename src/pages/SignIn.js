import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import Loading from "../components/Loading"; // Import the Loading component
import { FaArrowLeft } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  // ============= État Initial Début ici =============

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  // Récupérer les cookies sur le premier rendu
  useEffect(() => {
    const storedEmail = Cookies.get("userEmail");
    const storedPassword = Cookies.get("userPassword");
    if (storedEmail) setEmail(storedEmail);
    if (storedPassword) setPassword(storedPassword);
  }, []);

  // ============= État des erreurs =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // ============= Gestionnaire d'Événements Début ici =============

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
    setErrorMsg(""); // Réinitialiser le message d'erreur
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
    setErrorMsg(""); // Réinitialiser le message d'erreur
  };

  // ============= Gestionnaire d'Événements Fin ici ===============

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Veuillez entrer votre email");
      return;
    }

    if (!password) {
      setErrPassword("Veuillez créer un mot de passe");
      return;
    }

    setLoading(true); // Start loading

    try {
      // ============== Récupération des valeurs pour la connexion ==============
      const loginResponse = await axios.post(
        "http://localhost:8000/api/login",
        {
          email,
          password,
        }
      );

      if (loginResponse.status === 200) {
        Cookies.set("userEmail", email, { expires: 365 });
        Cookies.set("userPassword", password, { expires: 365 });

        // Récupérer le type d'utilisateur via une autre API
        const typeResponse = await axios.post(
          "http://127.0.0.1:8000/api/type",
          {
            email,
          }
        );

        if (typeResponse.status === 200 && typeResponse.data.status) {
          const userType = typeResponse.data.type;

          // Naviguer selon le type d'utilisateur
          if (userType === "student") {
            navigate("/student");
          } else if (userType === "professor") {
            navigate("/prof");
          }
        }

        // Nettoyer les champs après succès
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setErrorMsg(
        error.response?.data?.message ||
          "Erreur lors de la connexion. Veuillez réessayer."
      );
    } finally {
      setLoading(false); // Stop loading
    }
  };

  // Display the loading component if loading is true
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <form onSubmit={handleSignIn} className="flex flex-col gap-4">
          <h1 className="font-titleFont text-3xl font-semibold text-center mb-6">
            Connexion
          </h1>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-base font-semibold text-gray-600"
            >
              Email
            </label>
            <input
              onChange={handleEmail}
              value={email}
              className="w-full h-12 px-4 text-base rounded-md border border-gray-300 outline-none"
              type="email"
              id="email"
              placeholder="adam@email.com"
            />
            {errEmail && (
              <p className="text-sm text-red-500 font-semibold">
                <span className="font-bold italic mr-1">!</span>
                {errEmail}
              </p>
            )}
          </div>

          {/* Mot de Passe */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-base font-semibold text-gray-600"
            >
              Mot de Passe
            </label>
            <input
              onChange={handlePassword}
              value={password}
              className="w-full h-12 px-4 text-base rounded-md border border-gray-300 outline-none"
              type="password"
              id="password"
              placeholder="Votre mot de passe"
            />
            {errPassword && (
              <p className="text-sm text-red-500 font-semibold">
                <span className="font-bold italic mr-1">!</span>
                {errPassword}
              </p>
            )}
          </div>

          {/* Erreur de connexion */}
          {errorMsg && (
            <p className="text-sm text-red-500 font-semibold">
              <span className="font-bold italic mr-1">!</span>
              {errorMsg}
            </p>
          )}

          <button
            type="submit"
            className="bg-slate-800 hover:bg-slate-600 text-gray-200 hover:text-white cursor-pointer w-full h-12 rounded-md text-base font-medium duration-300"
          >
            Connexion
          </button>
          <p className="text-sm text-center font-medium ">
            Vous n'avez pas de compte ?{" "}
            <Link to="/signup">
              <span className="text-blue-600 hover:underline">S'inscrire</span>
            </Link>
          </p>
        </form>
      </div>
      <button
        className="absolute top-3 left-4 bg-slate-500 hover:bg-slate-700 text-gray-200 hover:text-white cursor-pointer w-20 h-10 rounded-md text-sm font-medium flex items-center justify-center gap-2 duration-300"
        onClick={handleNavigate}
      >
        <FaArrowLeft />
        Home
      </button>
    </div>
  );
};

export default SignIn;
