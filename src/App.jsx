
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Courses from "./components/Courses/Courses";
import About from "./components/About/About";
import Testimonials from "./components/Testimonials/Testimonials";
import CTA from "./components/CTA/CTA";
import Footer from "./components/Footer/Footer";

// import './App.css'

function App() {
  

  return (
    <>
      <div>
        <Navbar />  
        <Hero />
        <Courses />
        <About />
        <Testimonials /> 
        <CTA  /> 
        <Footer />
      </div>
      
    </>
  )
}

export default App
