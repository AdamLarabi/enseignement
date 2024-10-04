import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";

function Service() {
  return (
    <div className="min-h-screen bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Nos Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={img1}
              alt="Service 1"
              className="w-full h-48 object-cover rounded-t-lg mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Tests en Ligne Interactifs
            </h2>
            <p className="text-gray-600 mb-4">
              Accédez à une variété de tests en ligne interactifs conçus pour
              engager les étudiants et favoriser l'apprentissage actif.
            </p>
            <a
              href="#noo"
              className="text-primeColor font-semibold hover:underline"
            >
              Explorer les Tests &rarr;
            </a>
          </div>
          {/* Service 2 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={img2}
              alt="Service 2"
              className="w-full h-48 object-cover rounded-t-lg mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Plateforme de Collaboration
            </h2>
            <p className="text-gray-600 mb-4">
              Utilisez notre plateforme de collaboration pour permettre aux
              étudiants de travailler ensemble sur des projets et des devoirs,
              renforçant ainsi le travail d'équipe.
            </p>
            <a
              href="#xoo"
              className="text-primeColor font-semibold hover:underline"
            >
              En Savoir Plus &rarr;
            </a>
          </div>
          {/* Service 3 */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <img
              src={img3}
              alt="Service 3"
              className="w-full h-48 object-cover rounded-t-lg mb-6"
            />
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Support Pédagogique Personnalisé
            </h2>
            <p className="text-gray-600 mb-4">
              Notre équipe d'experts est disponible pour fournir un support
              pédagogique personnalisé, aidant les étudiants à surmonter les
              défis d'apprentissage.
            </p>
            <a
              href="#xoooo"
              className="text-primeColor font-semibold hover:underline"
            >
              Contactez-Nous &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
