import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav 
      className="flex justify-between items-center px-10 py-6 backdrop-blur-lg bg-white/10 rounded-b-2xl shadow-lg sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-2xl font-bold text-blue-400">TechEdu</h1>
      <ul className="flex gap-8 text-lg">
        <li><a href="#home" className="hover:text-blue-300">Home</a></li>
        <li><a href="#courses" className="hover:text-blue-300">Courses</a></li>
        <li><a href="#about" className="hover:text-blue-300">About</a></li>
        <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
      </ul>
      <div className="space-x-4">
        <button className="px-4 py-2 bg-purple-700 rounded-xl hover:bg-purple-600">Login</button>
        <button className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500">Sign Up</button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
