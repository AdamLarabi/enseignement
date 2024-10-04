import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          À Propos de Nous
        </h1>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* About Section */}
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Notre Mission
            </h2>
            <p className="text-gray-600 mb-6">
              notre mission est de fournir des solutions éducatives innovantes
              qui inspirent et engagent les apprenants. Nous visons à améliorer
              l'expérience d'apprentissage à travers des technologies
              accessibles et des méthodes pédagogiques modernes.
            </p>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Nos Valeurs
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              <li>
                Satisfaction des Étudiants : Nous plaçons les besoins de nos
                étudiants au premier plan et travaillons sans relâche pour
                dépasser leurs attentes.
              </li>
              <li>
                Innovation : Nous accueillons la créativité et cherchons
                continuellement de nouvelles façons d'améliorer nos programmes
                et services éducatifs.
              </li>
              <li>
                Intégrité : Nous maintenons les plus hauts standards d'honnêteté
                et de transparence dans toutes nos interactions.
              </li>
              <li>
                Collaboration : Nous croyons au pouvoir du travail d'équipe et
                valorisons les contributions de chaque membre de notre équipe.
              </li>
            </ul>
          </div>
          <div className="flex-1 bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Notre Histoire
            </h2>
            <p className="text-gray-600 mb-6">
              Fondée en 2018,{" "}
              {/* <span className="text-black text-xl text-clip uppercase">
                digiTech
              </span>{" "} */}
              évolué d'une petite startup à un leader dans le secteur de
              l'éducation. Au fil des ans, nous avons atteint de nombreux
              jalons, guidés par une passion pour l'excellence et un engagement
              envers nos étudiants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
