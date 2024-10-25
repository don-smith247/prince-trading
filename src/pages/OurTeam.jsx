import React, { useEffect, useState } from "react";
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';  

const OurTeam = () => {
  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`bg-white py-16 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="max-w-md mx-auto text-center">
       
        <div className="group transition-transform duration-500 transform hover:scale-105">
          <img
            className="w-[300px] h-[300px] rounded-full mx-auto border-4 border-blue-600 transform transition-transform duration-500 group-hover:rotate-6"
            src="./ceo.jpg"
            alt="CEO"
          />
        </div>
        
        <h2 className="text-2xl font-semibold text-blue-600 mt-4">Prince GNF</h2>
        <p className="text-blue-600 font-medium">CEO & Trading Expert</p>

        
        <p className="mt-4 text-gray-600">
          Prince GNF has over a decade of experience in financial markets and has 
          helped thousands of traders develop winning strategies. His expertise 
          in both technical and fundamental analysis sets him apart as a leader 
          in the trading industry.
        </p>

       
        <div className="mt-6 flex justify-center space-x-4">
         
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>

         
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125"
            aria-label="Twitter"
          >
            <FaTwitter className="w-6 h-6" />
          </a>

       
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125"
            aria-label="Instagram"
          >
            <FaInstagram className="w-6 h-6" />
          </a>

         
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 transition-transform transform hover:scale-125"
            aria-label="Facebook"
          >
            <FaFacebook className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
