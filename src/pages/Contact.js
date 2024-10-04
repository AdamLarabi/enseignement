import React, { useState } from "react";

function Contact() {
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSendMsg = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    alert("Merci " + name + ", votre message est envoyé avec succès");
    // Réinitialiser les champs du formulaire si nécessaire
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-12">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              If you have any questions or inquiries, feel free to reach out to
              us using the contact details below or by filling out the form.
            </p>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-primeColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4V4zM2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" />
                </svg>
                <p className="text-gray-600">
                  Casablanca Sidimaarouf Almostakbal
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-primeColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4V4zM2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" />
                </svg>
                <p className="text-gray-600">+212 11 11 00 12</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-primeColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 4h16v16H4V4zM2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" />
                </svg>
                <p className="text-gray-600">entreprise@digitale.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form onSubmit={handleSendMsg}>
              <div className="grid grid-cols-1 gap-6">
                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    name="name"
                    className="border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-primeColor focus:border-primeColor"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-primeColor focus:border-primeColor"
                    required
                  />
                </div>
                <div className="flex flex-col">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows="6"
                    className="border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-primeColor focus:border-primeColor"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-slate-700 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-slate-500 transition duration-400"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
