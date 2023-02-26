import React from "react";
import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import JoinIn from "../components/Home/JoinIn";
import Whatwedo from "../components/Home/Whatwedo";
import RootLayout from "../layout/RootLayout";

const Home = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
  return (
    <div className="w-full h-full">
      <RootLayout>
        <Hero />
        <Whatwedo />
        <About />
        <JoinIn />
      </RootLayout>
    </div>
  );
};

export default Home;
