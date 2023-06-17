import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Reader from "./_features/Reader/Reader";
import Vocabulary from "./Sidebar/Pages/Vocabulary";
import Languages from "./Sidebar/Pages/Languages";
import Settings from "./Sidebar/Pages/Settings";
import User from "./Sidebar/Pages/User";
import Home from "./Sidebar/Pages/Home";


const Content = () => {
  return (
    <div
      className="Content h-screen
    sm:px-8 sm:py-4 
    md:pl-8 md:mr-64
    lg:ml-64
    "
    >
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/vocabulary" element={<Vocabulary />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/reader" element={<Reader />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default Content;
