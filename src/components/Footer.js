// src/components/Footer.js
import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center px-6">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} | All rights reserved.
          </div>
          <div className="flex space-x-4">
            <a
              href="#privacy"
              className="relative text-gray-400 hover:text-gray-300 duration-300 group"
            >
              Politique de confidentialité
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-500 transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </a>
            <a
              href="#terms"
              className="relative text-gray-400 hover:text-gray-300 duration-300 group"
            >
              Conditions d'utilisation
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-500 transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </a>
            <a
              href="#contact"
              className="relative text-gray-400 hover:text-gray-300 duration-300 group"
            >
              Nous contacter
              <span className="absolute left-0 bottom-[-2px] w-full h-[2px] bg-gray-500 transition-transform duration-500 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
