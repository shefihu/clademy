import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <div className="">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
