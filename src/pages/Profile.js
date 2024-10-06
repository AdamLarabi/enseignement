import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Modal from "../components/Modal2";
import Loading from "../components/Loading";
import { FaArrowLeft } from "react-icons/fa";

function Profile() {
  const [userInfo, setUserInfo] = useState({
    nom: "",
    prenom: "",
    telephone: "",
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [formData, setFormData] = useState({ ...userInfo });
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false); // État pour gérer le chargement lors de la sauvegarde

  // Fetch user info from API
  useEffect(() => {
    const fetchUserInfo = async () => {
      const email = Cookies.get("userEmail");
      if (email) {
        try {
          const response = await axios.post("http://127.0.0.1:8000/api/info", {
            email,
          });
          if (response.data.status) {
            setUserInfo({
              nom: response.data.nom,
              prenom: response.data.prenom, // Correction ici
              telephone: response.data.telephone,
            });
            setFormData({
              nom: response.data.nom,
              prenom: response.data.prenom, // Correction ici
              telephone: response.data.telephone,
            });
          }
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des informations :",
            error
          );
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserInfo();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle saving changes
  const handleSaveChanges = async () => {
    setIsSaving(true); // Commence le chargement
    try {
      const email = Cookies.get("userEmail"); // Assurez-vous que vous avez accès aux cookies
      const response = await axios.post(
        "http://127.0.0.1:8000/api/modify_info",
        {
          email: email,
          nom: formData.nom,
          prenom: formData.prenom,
          telephone: formData.telephone,
        }
      );

      if (response.data.status) {
        setUserInfo(formData); // Met à jour l'état avec les nouvelles informations
        setModalMessage("Infos changed");
        setModalOpen(true); // Ouvre le modal
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des informations:", error);
      setModalMessage("Échec de la mise à jour des informations.");
    } finally {
      setIsSaving(false); // Fin du chargement
    }
  };
  const handleGoBack = () => {
    window.history.back(); // Retour à la page précédente
  };
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-slate-600 to-slate-400">
      <button
        onClick={handleGoBack}
        className="absolute top-20 left-8 p-2 bg-white rounded-full shadow hover:bg-gray-200 transition"
        aria-label="Retour"
      >
        <FaArrowLeft size={20} className="text-indigo-600" />
      </button>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Profil
        </h2>
        <form className="mb-6">
          <div className="mb-4">
            <label className="block text-gray-700">Nom</label>
            <input
              type="text"
              name="nom"
              value={formData.nom}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Prénom</label>
            <input
              type="text"
              name="prenom"
              value={formData.prenom}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Numéro de Téléphone</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <button
            type="button"
            onClick={handleSaveChanges}
            className={`w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 ${
              isSaving ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isSaving} // Désactiver le bouton pendant le chargement
          >
            {isSaving ? "Enregistrement..." : "Sauvegarder les Changements"}
          </button>
        </form>
      </div>
      <Modal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalMessage}
      />
    </div>
  );
}

export default Profile;
