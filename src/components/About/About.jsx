import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20 px-10 text-center">
      <h2 className="text-4xl font-bold mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-white/10 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold">👨‍🏫 Expert Mentors</h3>
          <p className="mt-4 text-gray-300">Learn from industry professionals with years of experience.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold">💻 Interactive Projects</h3>
          <p className="mt-4 text-gray-300">Hands-on learning with real-world projects.</p>
        </div>
        <div className="bg-white/10 p-6 rounded-xl shadow-md">
          <h3 className="text-2xl font-semibold">🎓 Certifications</h3>
          <p className="mt-4 text-gray-300">Earn globally recognized certificates upon completion.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
