import React, { useEffect, useState } from 'react';
import 'highlight.js/styles/default.css';

function Highlighter() {
  // can use setAttribute("style", {bg-custom-color})

  // useEffect(() => {
  //   const handleKeyPress  = (event) => {
  //     const key = event.key;
  //     const word = event.target.innerText;
  //     // console.log(word);

  //     switch (key) {
  //       case '1':
  //         document.getElementById("wordWithoutPunctuation").setAttribute("class", 'bg-custom-red');
  //         break;
  //       case '2':
  //         document.getElementById("wordWithoutPunctuation").setAttribute("class", 'bg-custom-yellow');
  //         break;
  //       case '3':
  //         document.getElementById("wordWithoutPunctuation").setAttribute("class", 'bg-custom-skyblue');
  //         break;
  //       case '4':
  //         document.getElementById("wordWithoutPunctuation").setAttribute("class", '');
  //         break;
  //       default:
  //         break;
  //     }
  //   }

  //   document.addEventListener('keydown', handleKeyPress);

  //   return () => {
  //     document.removeEventListener('keydown', handleKeyPress);
  //   };

  useEffect(() => {
    let highlightedWord = null;
  
    const handleHighlightHover = (event) => {
      if (event.target.tagName === 'SPAN') {
        const word = event.target.innerText;
        // console.log(word);
        highlightedWord = word;
      }
    };
  
    const handleHighlightKeydown = (event) => {
      if (highlightedWord) {
        const words = document.getElementsByTagName('span');
        console.log(words);
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          if (word.innerText === highlightedWord) {
            if (event.key == '1') {
              word.classList.add('bg-custom-red');
            }
            if (event.key == '2') {
              word.classList.add('bg-custom-yellow');
            }
            if (event.key == '3') {
              word.classList.add('bg-custom-skyblue');
            }
            if (event.key == '4') {
              word.classList.remove('bg-custom-yellow');
            }
          } 
        }
      }
    };
  
    document.addEventListener('mouseover', handleHighlightHover);
    document.addEventListener('keydown', handleHighlightKeydown);
  
    return () => {
      document.removeEventListener('mouseover', handleHighlightHover);
      document.removeEventListener('keydown', handleHighlightKeydown);
    };
    
  }, []);
}

export default Highlighter