import { useEffect } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content";
import Dictionary from "./components/Dictionary/Dictionary";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
      <Dictionary />
    </div>
  );
}

export default App;
