import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";

const FooterBottom = () => {
  return (
    <div className="w-full bg-[#F5F5F3] group">
      <div className="max-w-container mx-auto border-t-[1px] pt-5 pb-5">
        <p className="text-titleFont font-normal text-center flex md:items-center justify-center text-lightText duration-200 text-sm">
          <span className="text-md mr-[1px] mt-[2px] md:mt-0 text-center hidden md:inline-flex">
            <AiOutlineCopyright />
          </span>
          Copyright 2024 | Tous droits réservés | adamlarabi10@gmail.com |
          <a href="#ew" rel="noreferrer">
            <span className="ml-1 font-medium group-hover:text-primeColor">
              Propulsé par Entreprise de technologie éducative
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default FooterBottom;
