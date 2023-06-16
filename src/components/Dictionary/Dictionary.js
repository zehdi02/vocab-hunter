import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

function Dictionary() {
  const [brightness, setBrightness] = useState(0);

  const toggleBrightness = () => {
    const newBrightness = brightness === 0 ? 100 : 0;
    setBrightness(newBrightness);
  }

  const [data, setData] = useState("");

  useEffect(() => {
    const handleClick = (event) => {
      if(event.target.id === 'wordWithoutPunctuation'){
        const word = event.target.innerText;

        Axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
        ).then((response) => {
          setData(response.data[0]);
          console.log(response.data[0])
        }).catch((error) => {
          console.log("Error: ", error);
        })
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, []);

  return (
    <aside className="fixed top-0 right-0 h-screen w-64 max-w-max px-6 py-4 bg-gray-50 text-white bg-gray-800">
      <h1 className='text-3xl font-medium text-gray-900 text-white'>Dictionary</h1>
      
      {data && (
        <div className="definition">
          <h1 className='text-lg font-medium text-gray-900 text-white'>
            Word: {data.word}
          </h1>
        </div>
      )}
      <hr></hr>


      {data && data.meanings && data.meanings.length > 0 && data.meanings[0].definitions && data.meanings[0].definitions.length > 0 && ( // Add null checks for nested properties
        <div className="definition">
          <h1 className='text-lg font-medium text-gray-900 text-white'>Definition</h1>
          <span>
            {data.meanings[0].definitions[0].definition}
          </span>
        </div>
      )}
      <hr></hr>

      <div className='synonyms'>
        <h1 className='text-lg font-medium text-gray-900 text-white'>Synonyms</h1>
        {data && data.meanings && data.meanings.length > 0 && data.meanings[0].definitions && data.meanings[0].definitions.length > 0 && data.meanings[0].definitions[0].synonyms && data.meanings[0].definitions[0].synonyms.length > 0 ? (
          <span>
            {data.meanings[0].definitions[0].synonyms[0]}
          </span>
        ) : (
          <span>No synonyms available</span>
        )}
      </div>
      <hr></hr>

      <div className='antonyms'>
        <h1 className='text-lg font-medium text-gray-900 text-white'>Antonyms</h1>
        {data && data.meanings && data.meanings.length > 0 && data.meanings[0].definitions && data.meanings[0].definitions.length > 0 && data.meanings[0].definitions[0].antonyms && data.meanings[0].definitions[0].antonyms.length > 0 ? (
          <span>
            {data.meanings[0].definitions[0].antonyms}
          </span>
        ) : (
          <span>No antonyms available</span>
        )}
      </div>
      <hr></hr>


      <div className="sentence">
        <h1 className='text-lg font-medium text-gray-900 text-white'>Sample sentence</h1>
        {data && data.meanings && data.meanings.length > 0 && data.meanings[0].definitions && data.meanings[0].definitions.length > 0 && data.meanings[0].definitions[0].example ? (
          <span>
            {data.meanings[0].definitions[0].example}
          </span>
        ) : (
          <span>No sample sentence available</span>
        )}
      </div>
      <hr></hr>

      <div className="translation">
        <h1 className='text-lg font-medium text-gray-900 text-white'>Translation</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <hr></hr>

      <div className="word-image">
        <h1 className='text-lg font-medium text-gray-900 text-white'>Image</h1>
        <img className="" id='word-image-show' alt = "Word" 
        style={{ filter: `brightness(${brightness}%)` }}
        onClick={toggleBrightness}
        src='https://media.tenor.com/9z3rpvYfoDIAAAAC/sonic-and-mario-kiss.gif' />
      </div>
      <hr></hr>
    </aside>
  )
}

export default Dictionary