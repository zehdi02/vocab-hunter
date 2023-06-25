import React, { useEffect, useState } from "react";
import SplitLinesToken from "./SplitLinesToken";
import Highlighter from "../Highlighter/Highlighter";
import "./SplitLinesToken.css";
import ReactDOM from 'react-dom';

function Reader() {
  const [showModal, setShowModal] = useState(false);
  const [clickedWord, setClickedWord] = useState("");

  const handleWordClick = (word) => {
    console.log("Clicked word:", word);
    setShowModal(true);
    setClickedWord(word);
  };

  useEffect(() => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const fileContent = reader.result;
        const processedContent = SplitLinesToken(fileContent, handleWordClick);
        const wordContainer = document.getElementById("word-container");
        ReactDOM.render(processedContent, wordContainer);
      });

      reader.readAsText(file);
    };

    const uploadInput = document.getElementById("upload");
    uploadInput.addEventListener("change", handleFileChange);

    return () => {
      uploadInput.removeEventListener("change", handleFileChange);
    };
  }, []);

  const closeModal = () => {
    setShowModal(false);
    setClickedWord("");
  };

  return (
    <div className="Reader">
      <div className="flex">
        <div
          id="word-container"
          className="flex-row justify-center font-sans text-xl"
        ></div>

        <Highlighter />
      </div>

      {/* Modal component (implement according to your modal implementation) */}
      {showModal && (
        <div className="modal">
          {/* Modal content */}
          <p>Clicked word: {clickedWord}</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export default Reader;
