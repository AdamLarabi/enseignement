import React from "react";

const Modal = ({ show, onClose, onSignIn, onSignUp }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50 transition-opacity duration-300 ease-in-out">
      <div className="relative bg-white p-8 rounded-lg shadow-lg max-w-sm w-full transition-transform transform scale-95 hover:scale-100 duration-300 ease-in-out">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors duration-300"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Get Started
        </h2>
        <p className="mb-6 text-gray-600">Do you already have an account?</p>
        <div className="flex justify-around">
          <button
            onClick={onSignIn}
            className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-500 transition-colors duration-300"
          >
            Sign In
          </button>
          <button
            onClick={onSignUp}
            className="bg-green-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-green-500 transition-colors duration-300"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
