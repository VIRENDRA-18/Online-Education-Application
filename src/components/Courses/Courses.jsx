import React from "react";
import { motion } from "framer-motion";

const courses = [
  { title: "Web Development", color: "from-blue-500 to-purple-500" },
  { title: "AI & ML", color: "from-green-500 to-blue-500" },
  { title: "Data Science", color: "from-pink-500 to-red-500" },
  { title: "Cybersecurity", color: "from-yellow-500 to-orange-500" },
  { title: "Cloud Computing", color: "from-purple-500 to-indigo-500" },
];

const Courses = () => {
  return (
    <section id="courses" className="py-20 px-10 text-center">
      <h2 className="text-4xl font-bold mb-12">Our Tech Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-2xl shadow-lg bg-gradient-to-r ${course.color} text-white font-semibold cursor-pointer`}
            whileHover={{ scale: 1.05 }}
          >
            {course.title}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Courses;
