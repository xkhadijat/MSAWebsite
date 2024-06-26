import React from "react";
import Clients from "../components/partners";
import Footer from "../components/Footer";
import Hero from "../components/header";
import Intro from "../components/introduction";
import Portfolio from "../components/thefourevents";
import Services from "../components/quran_and-dua";

const Home = () => {
  return (
    <>
      <Hero />
      <Intro />
      <Services />
      <Portfolio />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
