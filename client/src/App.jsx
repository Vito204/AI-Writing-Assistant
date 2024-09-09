import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivyProvider } from "@privy-io/react-auth";
import Home from "./components/Home";
import About from "./components/About";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";
import LoginPage from "./components/Login";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/write" element={<Editor />} />
      </Routes>
    </Router>
  );
};

export default App;
