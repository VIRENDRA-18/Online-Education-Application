import React from "react";
import { motion } from "framer-motion";
import { FaBookOpen, FaLaptopCode } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-between px-10 md:px-20 py-32 overflow-hidden"
    >
      {/* Background gradient + shapes */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-purple-900 to-black opacity-90"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl"></div>

      {/* Left Content */}
      <motion.div
        className="relative z-10 text-center md:text-left max-w-2xl"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          Empower Your Future with{" "}
          <span className="text-blue-400">Tech Education</span>
        </h1>
        <p className="mt-6 text-lg text-gray-300">
          Learn coding, AI, data science, and more from expert mentors. Build
          real-world projects and earn industry-recognized certifications.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.button
            className="px-8 py-3 bg-blue-600 rounded-xl text-lg font-semibold hover:bg-blue-500"
            whileHover={{ scale: 1.05 }}
          >
            🚀 Get Started
          </motion.button>
          <motion.button
            className="px-8 py-3 border border-white/40 rounded-xl text-lg font-semibold hover:bg-white/10"
            whileHover={{ scale: 1.05 }}
          >
            📚 Browse Courses
          </motion.button>
        </div>
      </motion.div>

      {/* Right Illustration */}
      <motion.div
        className="relative z-10 mt-12 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-3xl shadow-2xl max-w-sm">
          <FaLaptopCode className="text-6xl text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-2">Start Learning Today</h3>
          <p className="text-gray-300">
            Access 100+ tech courses crafted by professionals.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
