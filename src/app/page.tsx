"use client";
import "./index.css";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <>
    

      <Header />
      <Hero />
      <Intro />
      <Projects />
      {/* <Testimonials /> */}
      <Footer />
    </>
    
  );
}
