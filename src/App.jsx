import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <AnimatePresence mode="wait" initial={false}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
