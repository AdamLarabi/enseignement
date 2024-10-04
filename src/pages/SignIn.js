import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  // ============= État Initial Début ici =============
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // ============= État Initial Fin ici ===============

  // ============= Messages d'Erreur Début ici =================
  const [errEmail, setErrEmail] = useState("");
  const [errPassword, setErrPassword] = useState("");
  // ============= Messages d'Erreur Fin ici ===================

  const [successMsg, setSuccessMsg] = useState("");

  // ============= Gestionnaire d'Événements Début ici =============
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  // ============= Gestionnaire d'Événements Fin ici ===============

  const handleSignUp = (e) => {
    e.preventDefault();

    if (!email) {
      setErrEmail("Veuillez entrer votre email");
    }

    if (!password) {
      setErrPassword("Veuillez créer un mot de passe");
    }

    // ============== Récupération des valeurs ==============
    if (email && password) {
      setSuccessMsg(
        `Bonjour cher utilisateur, merci pour votre tentative. Nous sommes en train de valider votre accès. En attendant, restez connecté et une assistance supplémentaire vous sera envoyée par email à ${email}`
      );
      setEmail("");
      setPassword("");
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
              <button
                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
                tracking-wide hover:bg-black hover:text-white duration-300 pt-2 pb-2 pr-8 pl-8"
              >
                S'inscrire
              </button>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSignUp} className="flex flex-col gap-4">
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
      <button
        className="absolute top-3 left-4 bg-slate-500 hover:bg-slate-700 text-gray-200 hover:text-white cursor-pointer w-20 h-10 rounded-md text-sm font-medium flex items-center justify-center gap-2 duration-300"
        onClick={handleNavigate}
      >
        <FaArrowLeft />
        Accueil
      </button>
    </div>
  );
};

export default SignIn;
