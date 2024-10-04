import React, { useState } from "react";
import { FaBars, FaCompactDisc, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import Modal from "./Modal";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const Links = [
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/service" },
    { name: "ABOUT", link: "/about" },
    { name: "CONTACT", link: "/contact" },
  ];

  const handleSignIn = () => {
    setShowModal(false);
    navigate("/signin");
  };

  const handleSignUp = () => {
    setShowModal(false);
    navigate("/signup");
  };

  return (
    <div className="shadow-md w-full top-0 left-0 bg-white z-10">
      <div className="md:flex items-center justify-between py-4 px-7 md:px-10">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3xl text-indigo-600 mr-1 pt-2">
            <FaCompactDisc />
          </span>
          Digitale Education
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl md:hidden cursor-pointer absolute right-8 top-6"
        >
          {open ? <FaTimes /> : <FaBars />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-[50%] sm:w-[40%] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-lg md:my-0 my-7 group">
              <a
                href={link.link}
                className="relative text-gray-900 hover:text-gray-500 duration-300"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-gray-700 transition-all duration-500 group-hover:w-full"></span>
              </a>
            </li>
          ))}
          <Button onClick={() => setShowModal(true)}>Get Started</Button>
        </ul>
      </div>

      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
      />
    </div>
  );
};

export default Header;
