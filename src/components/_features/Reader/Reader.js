import React, { useEffect, useState } from "react";
import SplitLinesToken from "./SplitLinesToken";
import Highlighter from "../Highlighter/Highlighter";

import "./SplitLinesToken.css";

function Reader() {
  const [processedContent, setProcessedContent] = useState(null);
  const [selectedWord, setSelectedWord] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const fileContent = reader.result;
        const content = SplitLinesToken({ fileContent, handleWordClick });
        setProcessedContent(content);
      });

      reader.readAsText(file);
    };

    const uploadInput = document.getElementById("upload");
    uploadInput.addEventListener("change", handleFileChange);

    return () => {
      uploadInput.removeEventListener("change", handleFileChange);
    };
  }, []);

  const handleWordClick = (word) => {
    setSelectedWord(word);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="Reader h-screen">
      <div className="flex w-fit m-auto font-bold">
        <div id="" className="flex-row h-100 justify-center font-sans text-xl">
          <div id="word-container"  className="flex-grow">
            {processedContent ? (
              processedContent
            ) : (
              <div
                className="w-full text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3"
                role="alert"
              >
                <p className="text-4xl font-bold">Ready to Read!</p>
                <p className="text-xl">
                  Please click on the 'Upload text' tab to start reading.
                </p>
              </div>
            )}
          </div>
        </div>
        <Highlighter />
      </div>
      {showModal && (
        <p>Selected Word: {selectedWord}</p>
      )}
    </div>
  );
}

export default Reader;
