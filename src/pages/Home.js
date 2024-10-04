import React from "react";
import img4 from "../assets/img4.jpg";
import { FaLock, FaRocket, FaCog, FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const features = [
  {
    id: 1,
    icon: <FaLock className="text-blue-500 text-4xl mb-4" />,
    title: "Sécurisé",
    description:
      "Notre plateforme garantit une sécurité optimale avec des protocoles de cryptage avancés pour protéger vos données.",
  },
  {
    id: 2,
    icon: <FaRocket className="text-red-500 text-4xl mb-4" />,
    title: "Rapide",
    description:
      "Profitez d'une performance ultra-rapide grâce à des systèmes optimisés et une faible latence pour garder une longueur d'avance.",
  },
  {
    id: 3,
    icon: <FaCog className="text-green-500 text-4xl mb-4" />,
    title: "Personnalisable",
    description:
      "Adaptez la plateforme à vos besoins avec un large éventail d'options et de paramètres de personnalisation.",
  },
];

function Home() {
  const navigate = useNavigate();

  const handleCreate = (e) => {
    const buttonText = document.getElementById("button-text");
    const button = document.getElementById("order-button");
    const icon = document.getElementById("menu-icon");

    buttonText.style.display = "none";
    icon.classList.remove("hidden");
    icon.classList.add("animate-menu-icon");
    button.style.background = "none";
    button.classList.remove("rounded-lg", "shadow-lg");

    // Delay navigation until the animation finishes
    setTimeout(() => {
      navigate("/createTest");
    }, 2000);
  };

  const handleAnswer = (e) => {
    const buttonText = document.getElementById("button-text1");
    const button = document.getElementById("order-button1");
    const icon = document.getElementById("menu-icon1");

    buttonText.style.display = "none";
    icon.classList.remove("hidden");
    icon.classList.add("animate-menu-icon");
    button.style.background = "none";
    button.classList.remove("rounded-lg", "shadow-lg");

    // Delay navigation until the animation finishes
    setTimeout(() => {
      navigate("/AnswerTest");
    }, 2000);
  };

  return (
    <div>
      <section className="relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={img4}
            alt="Hero Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
        </div>
        <div className="relative z-1 flex flex-col items-center justify-center min-h-screen px-4 py-16 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Entreprise de technologie éducative
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in delay-200">
            facilitant l'accès à l'éducation à distance en ligne.
          </p>
          <div className="flex space-x-4">
            <a
              href="#features"
              className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-transform transform hover:scale-105 animate-fade-in delay-400"
            >
              Lire plus
            </a>
            <a
              href="#contact"
              className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-green-500 transition-transform transform hover:scale-105 animate-fade-in delay-600"
            >
              Contactez-nous
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 animate-fade-in">
            Nos fonctionnalités
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 animate-fade-in"
              >
                <div className="text-center mb-4 justify-center items-center flex">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Prêt à creer un Test?
        </h2>
        <button
          onClick={handleCreate}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-transform transform relative"
          id="order-button"
        >
          <span id="button-text">Creer Test</span>
          <FaBars
            className="hidden absolute text-5xl text-black top-1 right-1"
            id="menu-icon"
          />
        </button>
      </section>
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Prêt à passer un Test?
        </h2>
        <button
          onClick={handleAnswer}
          className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition-transform transform relative"
          id="order-button1"
        >
          <span id="button-text1">Passer Test</span>
          <FaBars
            className="hidden absolute text-5xl text-black top-1 right-1"
            id="menu-icon1"
          />
        </button>
      </section>
    </div>
  );
}

export default Home;
