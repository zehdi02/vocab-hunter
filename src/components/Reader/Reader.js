import { useEffect } from 'react';
import splitLines from './splitLinesToken';
import Dictionary from '../Dictionary/Dictionary';

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
    <div className='Reader'>
      {/* <form className='bg-gray-50 text-white dark:bg-gray-800' id="fileUpload">
        <h1 className="p-2 font-medium">Upload .txt file</h1>
          <div>
            <label className="p-2" for="file_input">
              <input type="file" id="upload"
              className="text-sm" />
            </label>
          </div>
      </form> */}

      <div className="flex ">
        <hr />
        <div id="word-container" className='flex-row justify-center font-sans text-xl'>
        </div>

        <Dictionary />
      </div>
    </div>
  );
}

export default Reader;