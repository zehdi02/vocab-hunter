import React, { useContext, useState, useEffect } from 'react';

function Dictionary() {
  const [brightness, setBrightness] = useState(0);
  const clickedWord = "Hello"

  const toggleBrightness = () => {
    const newBrightness = brightness === 0 ? 100 : 0;
    setBrightness(newBrightness);
  }

  useEffect(() => {
    const handleClick = (event) => {
      if(event.target.id === 'wordWithoutPunctuation'){
        console.log("Span clicked: ", event.target.innerText);
        event.stopPropagation();
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
      
      <div className="definition">
        <h1 className='text-lg font-medium text-gray-900 text-white'>Word: {clickedWord}</h1>

      </div>
      <hr></hr>

      <div className="definition">
        <h1 className='text-lg font-medium text-gray-900 text-white'>Definition</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <hr></hr>

      <div className='synonyms'>
        <h1 className='text-lg font-medium text-gray-900 text-white'>Synonyms</h1>
        <span>
          Lorem ipsum dolor sit amet.
        </span>
      </div>
      <hr></hr>

      <div className='antonyms'>
        <h1 className='text-lg font-medium text-gray-900 text-white'>Antonyms</h1>
        <span>
          Lorem ipsum dolor sit amet.
        </span>
      </div>
      <hr></hr>

      <div className="sentence">
        <h1 className='text-lg font-medium text-gray-900 text-white'>Sample sentence</h1>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
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
        <img className="" id='word-image-show' 
        style={{ filter: `brightness(${brightness}%)` }}
        onClick={toggleBrightness}
        src='https://media.tenor.com/9z3rpvYfoDIAAAAC/sonic-and-mario-kiss.gif' />
      </div>
      <hr></hr>
    </aside>
  )
}

export default Dictionary