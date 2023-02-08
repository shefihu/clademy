import React from "react";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Whatwedo from "../components/Home/Whatwedo";
import RootLayout from "../layout/RootLayout";

const Home = () => {
  return (
    <div className="w-full h-full">
      <RootLayout>
        <Hero />
        <Whatwedo />
        <About />
      </RootLayout>
    </div>
  );
};

export default Home;
