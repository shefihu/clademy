import React from "react";
import Navbar from "./Navbar";

const RootLayout = ({ children }) => {
  return (
    <div>
      <div className="">
        <Navbar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default RootLayout;
