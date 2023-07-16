import React, { useEffect } from "react";
import SplitLinesToken from "./SplitLinesToken";
import Highlighter from "../Highlighter/Highlighter";

import "./SplitLinesToken.css";

function Reader() {
  useEffect(() => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.addEventListener("load", () => {
        const fileContent = reader.result;
        const processedContent = SplitLinesToken(fileContent);
        const wordContainer = document.getElementById("word-container");
        wordContainer.innerHTML = processedContent;
      });

      reader.readAsText(file);
    };

    const uploadInput = document.getElementById("upload");
    uploadInput.addEventListener("change", handleFileChange);

    return () => {
      uploadInput.removeEventListener("change", handleFileChange);
    };
  }, []);

  return (
    <div className="Reader h-screen">
      <div className="flex w-fit m-auto font-bold">
        <div id=""
          className="flex-row h-100 justify-center font-sans text-xl">
          {/* <div className="h-screen w-full">Upload your text file!</div> */}
          <div id="word-container">
            <div class="w-full text-center bg-blue-100 border-t border-b border-blue-500 text-blue-700 px-4 py-3" role="alert">
              <p class="text-4xl font-bold">Ready to Read!</p>
              <p class="text-xl">Please click on the 'Upload text' tab to start reading.</p>
            </div>
          </div>
        </div>
    
      </div>
    </div>
  );
}

export default Reader;
