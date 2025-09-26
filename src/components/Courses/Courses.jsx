import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaBrain, FaDatabase, FaShieldAlt, FaCloud, FaMobileAlt, FaNetworkWired, FaRobot, FaServer, FaLaptop } from "react-icons/fa";

const courses = [
  { title: "Web Development", icon: <FaLaptopCode />, desc: "Build modern responsive web apps with HTML, CSS, JS & React.", lessons: 20, hours: 30, bg: "from-blue-200 to-blue-400", iconBg: "from-blue-400 to-blue-600" },
  { title: "AI & Machine Learning", icon: <FaBrain />, desc: "Create intelligent AI & ML projects with practical applications.", lessons: 15, hours: 25, bg: "from-purple-200 to-purple-400", iconBg: "from-purple-400 to-purple-600" },
  { title: "Data Science", icon: <FaDatabase />, desc: "Analyze, visualize & gain insights from complex data.", lessons: 18, hours: 28, bg: "from-green-200 to-green-400", iconBg: "from-green-400 to-green-600" },
  { title: "Cybersecurity", icon: <FaShieldAlt />, desc: "Protect networks, systems & applications efficiently.", lessons: 12, hours: 20, bg: "from-red-200 to-red-400", iconBg: "from-red-400 to-red-600" },
  { title: "Cloud Computing", icon: <FaCloud />, desc: "Deploy & scale apps on cloud platforms efficiently.", lessons: 14, hours: 22, bg: "from-teal-200 to-teal-400", iconBg: "from-teal-400 to-teal-600" },
  { title: "Mobile App Development", icon: <FaMobileAlt />, desc: "Develop high-quality apps for Android & iOS.", lessons: 16, hours: 26, bg: "from-pink-200 to-pink-400", iconBg: "from-pink-400 to-pink-600" },
  { title: "Networking", icon: <FaNetworkWired />, desc: "Understand networking fundamentals, protocols & secure data flow.", lessons: 10, hours: 18, bg: "from-yellow-200 to-yellow-400", iconBg: "from-yellow-400 to-yellow-600" },
  { title: "Robotics & Automation", icon: <FaRobot />, desc: "Build smart robots & automation systems using AI & IoT.", lessons: 12, hours: 20, bg: "from-indigo-200 to-indigo-400", iconBg: "from-indigo-400 to-indigo-600" },
  { title: "Server & DevOps", icon: <FaServer />, desc: "Learn server management, CI/CD & deployment pipelines.", lessons: 15, hours: 24, bg: "from-orange-200 to-orange-400", iconBg: "from-orange-400 to-orange-600" },
  { title: "Computer Fundamentals", icon: <FaLaptop />, desc: "Master computer systems, hardware & software basics.", lessons: 8, hours: 15, bg: "from-cyan-200 to-cyan-400", iconBg: "from-cyan-400 to-cyan-600" },
];

const Courses = () => {
  return (
    <section className="relative py-24 px-8 bg-gradient-to-b from-gray-100 to-gray-200 overflow-hidden">
      
      {/* Section Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Explore Our <span className="text-blue-500">Tech Courses</span>
      </motion.h2>
      <p className="text-gray-700 max-w-3xl mx-auto mb-16 text-center relative z-10">
        Learn from industry experts with interactive courses designed for the tech future.
      </p>

      {/* Horizontal Scroll Panels */}
      <div className="flex space-x-8 overflow-x-auto py-4 px-2 scrollbar-hide relative z-10">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className={`relative flex-shrink-0 w-80 bg-gradient-to-tr ${course.bg} backdrop-blur-md rounded-3xl p-6 shadow-lg cursor-pointer border border-white/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Icon */}
            <motion.div
              className={`w-16 h-16 mb-4 flex items-center justify-center bg-gradient-to-tr ${course.iconBg} rounded-full text-white text-3xl shadow-md transition-all duration-300 hover:scale-110 hover:rotate-15`}
            >
              {course.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.title}</h3>

            {/* Description */}
            <p className="text-gray-800 text-sm mb-3">{course.desc}</p>

            {/* Stats Badge */}
            <div className="flex justify-between items-center mb-4 text-gray-700 text-xs">
              <span>{course.lessons} Lessons</span>
              <span>{course.hours} Hours</span>
            </div>

            {/* Enroll Button */}
            <motion.button
              className="px-5 py-2 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-lg font-semibold shadow hover:from-blue-300 hover:to-purple-400 transition"
              whileHover={{ scale: 1.05 }}
            >
              Enroll Now
            </motion.button>

            {/* Floating Decorative Shapes */}
            <motion.div
              className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-tr from-purple-300 to-pink-300 rounded-full opacity-30 blur-2xl pointer-events-none"
              animate={{ y: [0, 5, 0], x: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute -bottom-5 -left-5 w-24 h-24 bg-gradient-to-tr from-blue-300 to-green-300 rounded-full opacity-20 blur-3xl pointer-events-none"
              animate={{ y: [0, -5, 0], x: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            ></motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
