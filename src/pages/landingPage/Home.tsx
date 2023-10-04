import React from "react";
import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="mx-14">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
