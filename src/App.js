import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dictionary from "./components/Dictionary/Dictionary";

import { Routes, Route } from "react-router-dom";
import Home from "./components/Sidebar/Pages/Home";
import Vocabulary from "./components/Sidebar/Pages/Vocabulary";
import Languages from "./components/Sidebar/Pages/Languages";
import Settings from "./components/Sidebar/Pages/Settings";
import Reader from "./components/_features/Reader/Reader";
import User from "./components/Sidebar/Pages/User";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div
        className="Content h-max bg-gray-300
        sm:px-8 sm:py-4 
        md:pl-8 md:mr-64
        lg:ml-64
        ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/vocabulary" element={<Vocabulary />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/reader" element={<Reader />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
      {/* <Content /> */}
      <Dictionary />
    </div>
  );
}

export default App;
