import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black/50 py-10 text-center">
      <h3 className="text-2xl font-bold mb-4">TechEdu</h3>
      <p className="text-gray-400 mb-4">Empowering learners with tech skills for the future.</p>
      <div className="flex justify-center gap-6 text-2xl mb-4">
        <FaFacebook className="hover:text-blue-400 cursor-pointer" />
        <FaTwitter className="hover:text-blue-400 cursor-pointer" />
        <FaInstagram className="hover:text-pink-400 cursor-pointer" />
        <FaLinkedin className="hover:text-blue-400 cursor-pointer" />
      </div>
      <p className="text-gray-500">© 2025 TechEdu. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
