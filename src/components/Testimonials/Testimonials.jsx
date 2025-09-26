import React from "react";

const Testimonials = () => {
  const feedback = [
    { name: "Aarav", review: "This platform helped me land my first job!", rating: "⭐⭐⭐⭐⭐" },
    { name: "Neha", review: "Amazing mentors and practical learning.", rating: "⭐⭐⭐⭐" },
    { name: "Ravi", review: "Loved the courses and interactive style.", rating: "⭐⭐⭐⭐⭐" },
  ];

  return (
    <section id="testimonials" className="py-20 px-10 text-center">
      <h2 className="text-4xl font-bold mb-12">What Our Students Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {feedback.map((f, i) => (
          <div key={i} className="bg-white/10 p-6 rounded-xl shadow-md">
            <p className="text-gray-300 italic">"{f.review}"</p>
            <h3 className="mt-4 font-bold">{f.name}</h3>
            <p className="text-yellow-400">{f.rating}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
