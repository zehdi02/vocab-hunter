import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Dictionary() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [brightness, setBrightness] = useState(0);

  const toggleBrightness = () => {
    const newBrightness = brightness === 0 ? 100 : 0;
    setBrightness(newBrightness);
  }

  const [data, setData] = useState("");

  useEffect(() => {
    const handleClick = (event) => {
      if (event.target.id === 'wordWithoutPunctuation') {
        const word = event.target.innerText;
        // console.log(event.target);
        // event.target.classList.remove('bg-custom-red', 'bg-custom-yellow', 'bg-custom-skyblue')
        Axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`
        ).then((response) => {
          setData(response.data[0]);
          // console.log(response.data[0])
        }).catch((error) => {
          console.log("Error: ", error.response.data.title + ` for '${word}'`, error);
          alert(error.response.data.title + ` for '${word}'`, error);
        })
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }

  }, []);

  return (
    <div className='Dictionary'>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-3 text-sm text-gray-500 bg-gray-700 rounded-lg z-50
        md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
        dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600
        fixed opacity-100 h-full right-0 top-0"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside className={`transition-transform translate-x-full md:translate-x-0
        sm:block transition-transform fixed top-0 right-0 z-40 w-64
        h-screen max-w-max px-6 py-4 bg-gray-50 text-white bg-gray-800
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}
      >
        <h1 className='text-3xl font-medium text-gray-900 text-white'>Dictionary</h1>

        {data && (
          <div className="definition pb-1">
            <div className='flex justify-between text-lg font-medium text-gray-900 text-white'>
              <div className='flex'>
                <h1>Word:</h1>
                <p className="underline inline-flex items-center justify-center px-2 py-1 ml-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-xl dark:bg-gray-700 dark:text-gray-300">
                  {data.word}</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
              </svg>
            </div>
          </div>
        )}
        <hr></hr>

        {data && data.meanings && data.meanings.length > 0 && data.meanings[0].definitions && data.meanings[0].definitions.length > 0 && ( // Add null checks for nested properties
          <div className="definition pt-1 pb-3">
            <h1 className='text-lg font-medium text-gray-900 text-white'>Definition</h1>
            <div className='text-gray-200 bg-gray-700 rounded-lg p-1 px-2 text-sm'>
              <span>
                {data.meanings[0].definitions[0].definition}
              </span>
            </div>
          </div>
        )}
        <hr></hr>

        <div className='synonyms pt-1 pb-3'>
          <h1 className='text-lg font-medium text-gray-900 text-white'>Synonyms</h1>
          {data && data.meanings && data.meanings.length > 0 && data.meanings[0].definitions && data.meanings[0].definitions.length > 0 && data.meanings[0].definitions[0].synonyms && data.meanings[0].definitions[0].synonyms.length > 0 ? (
            <div className='text-gray-200 bg-gray-700 rounded-lg p-1 px-2 text-sm'>
              <span>
                {/* {data.meanings[0].definitions[0].synonyms.join(', ')} */}
                {data.meanings.map((meaning) => {
                  const joinedSynonyms =
                    meaning.synonyms.length ? meaning.synonyms.join('; ') + '; ' : '';
                  // console.log(joinedSynonyms);
                  return joinedSynonyms;
                })}
              </span>
            </div>
          ) : (
            <span>No synonyms available</span>
          )}
        </div>
        <hr></hr>

        <div className='antonyms pt-1 pb-3'>
          <h1 className='text-lg font-medium text-gray-900 text-white'>Antonyms</h1>
          {data && data.meanings && data.meanings.length > 0 && data.meanings[0].definitions && data.meanings[0].definitions.length > 0 && data.meanings[0].definitions[0].antonyms && data.meanings[0].definitions[0].antonyms.length > 0 ? (
            <div className='text-gray-200 bg-gray-700 rounded-lg p-1 px-2 text-sm'>
              <span>
                {/* {data.meanings[0].definitions[0].antonyms.join(', ')} */}
                {data.meanings.map((meaning) => {
                  const joinedAntonyms =
                    meaning.antonyms.length ? meaning.antonyms.join('; ') + '; ' : '';
                  return joinedAntonyms;
                })}
              </span>
            </div>
          ) : (
            <span>No antonyms available</span>
          )}
        </div>
        <hr></hr>

        <div className="sentence pt-1 pb-3">
          <h1 className='text-lg font-medium text-gray-900 text-white'>Sample sentence</h1>
          {data && data.meanings && data.meanings.length > 0 && data.meanings[0].definitions && data.meanings[0].definitions.length > 0 && data.meanings[0].definitions[0].example ? (
            <div className='text-gray-200 bg-gray-700 rounded-lg p-1 px-2 text-sm'>
              <span>
                {data.meanings[0].definitions[0].example}
              </span>
            </div>
          ) : (
            <span>No sample sentence available</span>
          )}
        </div>
        <hr></hr>

        <div className="translation pt-1 pb-3">
          <h1 className='text-lg font-medium text-gray-900 text-white'>Translation</h1>
          <div className='text-gray-200 bg-gray-700 rounded-lg p-1 px-2 text-sm'>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>
        </div>
        <hr></hr>

        <div className="word-image pt-1 pb-3">
          <h1 className='text-lg font-medium text-gray-900 text-white'>Image</h1>
          <img className="mt-2 rounded-lg cursor-pointer" id='word-image-show' alt="Word"
            style={{ filter: `brightness(${brightness}%)` }}
            onClick={toggleBrightness}
            src='https://media.tenor.com/9z3rpvYfoDIAAAAC/sonic-and-mario-kiss.gif' />
        </div>

      </aside>
    </div>
  )
}

export default Dictionary