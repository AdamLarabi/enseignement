import React, { useState } from "react";
import {
  BsFillPeopleFill,
  BsFillLockFill,
  BsFillGeoAltFill,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsFillHouseFill,
  BsFillPinMapFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { UserAddIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [checked, setChecked] = useState(false);

  const [errClientName, setErrClientName] = useState("");
  const [errEmail, setErrEmail] = useState("");
  const [errPhone, setErrPhone] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const [errAddress, setErrAddress] = useState("");
  const [errCity, setErrCity] = useState("");
  const [errCountry, setErrCountry] = useState("");
  const [errZip, setErrZip] = useState("");

  const [successMsg, setSuccessMsg] = useState("");

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail("");
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
    setErrPhone("");
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setErrPassword("");
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
    setErrAddress("");
  };
  const handleCity = (e) => {
    setCity(e.target.value);
    setErrCity("");
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
    setErrCountry("");
  };
  const handleZip = (e) => {
    setZip(e.target.value);
    setErrZip("");
  };
  // ============= Event Handler End here ===============

  // ================= Email Validation start here =============
  const EmailValidation = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  };
  // ================= Email Validation End here ===============

  const handleSignUp = (e) => {
    e.preventDefault();
    if (checked) {
      if (!clientName) {
        setErrClientName("Entrez votre nom");
      }
      if (!email) {
        setErrEmail("Entrez votre email");
      } else {
        if (!EmailValidation(email)) {
          setErrEmail("Entrez un email valide");
        }
      }
      if (!phone) {
        setErrPhone("Entrez votre numéro de téléphone");
      }
      if (!password) {
        setErrPassword("Créez un mot de passe");
      } else {
        if (password.length < 6) {
          setErrPassword(
            "Les mots de passe doivent contenir au moins 6 caractères"
          );
        }
      }
      if (!address) {
        setErrAddress("Entrez votre adresse");
      }
      if (!city) {
        setErrCity("Entrez le nom de votre ville");
      }
      if (!country) {
        setErrCountry("Entrez le pays dans lequel vous résidez");
      }
      if (!zip) {
        setErrZip("Entrez le code postal de votre région");
      }
      // ============== Récupération de la valeur ==============
      if (
        clientName &&
        email &&
        EmailValidation(email) &&
        password &&
        password.length >= 6 &&
        address &&
        city &&
        country &&
        zip
      ) {
        setSuccessMsg(
          `Bonjour cher(e) ${clientName}, Bienvenue sur le panneau d'administration OREBI. Nous avons reçu votre demande d'inscription. Nous sommes en train de traiter votre accès. D'ici là, restez connecté(e) et une assistance supplémentaire vous sera envoyée par email à ${email}`
        );
        setClientName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setAddress("");
        setCity("");
        setCountry("");
        setZip("");
      }
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center  ">
      <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
        {successMsg ? (
          <div className="w-full px-6 py-4">
            <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
              {successMsg}
            </p>
            <Link to="/signin">
              <button
                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
                tracking-wide hover:bg-black hover:text-white duration-300"
              >
                Sign in
              </button>
            </Link>
          </div>
        ) : (
          <form className="w-full flex flex-col items-center px-6 py-4 ">
            <div className="w-full h-full max-w-md flex flex-col justify-center  scrollbar-thin scrollbar-thumb-primeColor rounded-xl pt-10 pb-10 pr-10 pl-10 bg-slate-50">
              <div className="w-full h-full max-w-md flex flex-row justify-center space-x-8">
                <UserAddIcon className="h-9 w-9 text-primeColor" />
                <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                  Create your account
                </h1>
              </div>
              <div className="flex flex-col gap-4 w-full ">
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="name"
                    className="text-sm font-titleFont font-medium"
                  >
                    Nom Complet<span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={clientName}
                      onChange={handleName}
                      placeholder="Entrez votre nom complet"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillPeopleFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errClientName && (
                    <p className="text-red-600 text-sm">{errClientName}</p>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-titleFont font-medium"
                  >
                    Adresse Email <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={handleEmail}
                      placeholder="Entrer votre adresse email"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillEnvelopeFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errEmail && (
                    <p className="text-red-600 text-sm">{errEmail}</p>
                  )}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-titleFont font-medium"
                  >
                    Numero de Telephone <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={handlePhone}
                      placeholder="Entrer votre telephone"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillTelephoneFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errPhone && (
                    <p className="text-red-600 text-sm">{errPhone}</p>
                  )}
                </div>

                {/* Password */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="password"
                    className="text-sm font-titleFont font-medium"
                  >
                    Mot de passe <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={handlePassword}
                      placeholder="Creer un mot de passe"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillLockFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errPassword && (
                    <p className="text-red-600 text-sm">{errPassword}</p>
                  )}
                </div>

                {/* Address */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="address"
                    className="text-sm font-titleFont font-medium"
                  >
                    Addresse <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="address"
                      value={address}
                      onChange={handleAddress}
                      placeholder="Entrer votre addresse"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillHouseFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errAddress && (
                    <p className="text-red-600 text-sm">{errAddress}</p>
                  )}
                </div>

                {/* City */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="city"
                    className="text-sm font-titleFont font-medium"
                  >
                    Ville <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={handleCity}
                      placeholder="Entrer votre ville"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillPinMapFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errCity && <p className="text-red-600 text-sm">{errCity}</p>}
                </div>

                {/* Country */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="country"
                    className="text-sm font-titleFont font-medium"
                  >
                    Pays <span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="country"
                      value={country}
                      onChange={handleCountry}
                      placeholder="Entrer votre pays"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillGeoAltFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errCountry && (
                    <p className="text-red-600 text-sm">{errCountry}</p>
                  )}
                </div>

                {/* Zip Code */}
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="zip"
                    className="text-sm font-titleFont font-medium"
                  >
                    Code Postale<span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="zip"
                      value={zip}
                      onChange={handleZip}
                      placeholder="Entrer le code postale"
                      className="w-full h-12 pl-10 text-base rounded-md border border-gray-300 bg-gray-200 outline-none"
                    />
                    <BsFillPinMapFill className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-600 text-xl" />
                  </div>
                  {errZip && <p className="text-red-600 text-sm">{errZip}</p>}
                </div>

                {/* Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    checked={checked}
                    onChange={() => setChecked(!checked)}
                    className="h-5 w-5"
                  />
                  <label
                    htmlFor="terms"
                    className="text-sm font-titleFont font-medium"
                  >
                    J'accepte les termes et conditions.
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  onClick={handleSignUp}
                  className="w-full h-12 bg-slate-800 hover:bg-slate-600 rounded-md text-gray-200 text-base font-titleFont font-semibold tracking-wide hover:text-white duration-300"
                >
                  S'inscrire
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
      <button
        className="absolute top-3 left-4 bg-slate-500 hover:bg-slate-700 text-gray-200 hover:text-white cursor-pointer w-20 h-10 rounded-md text-sm font-medium flex items-center justify-center gap-2 duration-300"
        onClick={handleNavigate}
      >
        <FaArrowLeft />
        Home
      </button>
    </div>
  );
};

export default SignUp;
