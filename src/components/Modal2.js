import React from "react";

const Modal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm mx-auto transform transition-transform duration-300 scale-95 opacity-100">
        <h2 className="text-lg font-bold mb-4 text-center text-indigo-600">
          Succès
        </h2>
        <p className="text-gray-700 text-center">{message}</p>
        <div className="flex justify-center mt-6">
          <button
            onClick={onClose}
            className="bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600 transition duration-200 ease-in-out transform hover:scale-105"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
