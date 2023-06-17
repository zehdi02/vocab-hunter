import { useEffect } from "react";
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
    <div className="Reader">
      <div className="flex ">
        <div
          id="word-container"
          className="flex-row justify-center font-sans text-xl"
        >
          {/* populate with the text file's content */}
          <div>READER</div>
          <div>READER</div>
          <div>READER</div>
          <div>READER</div>
          <div>READER</div>
          <div>READER</div>
          <div>READER</div>
          <div>READER</div>
          <div>READER</div>
          <div>READER</div>
          <div>READER</div>
        </div>

        <Highlighter />
      </div>
    </div>
  );
}

export default Reader;
