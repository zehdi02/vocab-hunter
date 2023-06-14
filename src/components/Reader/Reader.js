import { useEffect } from 'react';
import splitLines from './splitLinesToken';

import "./splitLinesToken.css"

function Reader() {
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
    <div className="Reader">
      <form id="fileUpload">
        <h1 className="p-2 font-medium">Upload .txt file</h1>
          <div>
            <label className="p-2" for="file_input">
              <input type="file" id="upload"
              className="text-sm" />
            </label>
          </div>
      </form>
      <hr />
      <div id="word-container"
      className='font-sans text-xl'></div>
    </div>
  );
}

export default Reader;