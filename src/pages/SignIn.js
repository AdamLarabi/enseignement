import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const SignIn = () => {
  const navigate = useNavigate();

  // ============= État Initial Début ici =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  const [successMsg, setSuccessMsg] = useState("");
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

    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email,
        password,
      });

      if (response.status === 200) {
        Cookies.set("userEmail", email, { expires: 365 });
        Cookies.set("userPassword", password, { expires: 365 });
        setSuccessMsg(
          "Bonjour cher utilisateur, vous êtes maintenant connecté."
        );
        setEmail("");
        setPassword("");
        navigate("/AnswerTest");
      }
    } catch (error) {
      console.error("Erreur lors de la connexion :", error);
      setErrorMsg(
        error.response?.data?.message ||
          "Erreur lors de la connexion. Veuillez réessayer."
      );
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {successMsg ? (
          <div className="flex flex-col items-center">
            <p className="text-green-500 font-medium text-lg mb-4">
              {successMsg}
            </p>
            <Link to="/signup">
              <button className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold tracking-wide hover:bg-black hover:text-white duration-300 pt-2 pb-2 pr-8 pl-8">
                S'inscrire
              </button>
            </Link>
          </div>
        ) : (
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
                <span className="text-blue-600 hover:underline">
                  S'inscrire
                </span>
              </Link>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignIn;
