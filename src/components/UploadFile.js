import { useEffect } from 'react';
import splitLines from './splitLinesToken';

import "./splitLinesToken.css"

function UploadFile() {
  useEffect(() => {
    const handleFileChange = (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        const fileContent = reader.result;
        const processedContent = splitLines(fileContent);
        const wordContainer = document.getElementById('word-container');
        wordContainer.innerHTML = processedContent;
      });

      reader.readAsText(file);
    };

    const uploadInput = document.getElementById('upload');
    uploadInput.addEventListener('change', handleFileChange);

    return () => {
      uploadInput.removeEventListener('change', handleFileChange);
    };
  }, []);

  return (
    <div className="UploadFile">
      <form>
        <input type="file" id="upload" />
      </form>
      <hr />
      <div id="word-container"></div>
    </div>
  );
}

export default UploadFile;