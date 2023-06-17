import { useEffect } from 'react';

function Highlighter() {

  useEffect(() => {
    let highlightedWord = null;
  
    const handleHighlightHover = (event) => {
      if (event.target.tagName === 'SPAN' && event.target.id === 'wordWithoutPunctuation') {
        const word = event.target.innerText;
        // console.log(word);
        highlightedWord = word;
      }
      else {
        highlightedWord = '';
      }
    };
  
    const handleHighlightKeydown = (event) => {
      if (highlightedWord && document.getElementById('wordWithoutPunctuation')) {
        const words = document.getElementsByTagName('span');
        // console.log(words);
        for (let i = 0; i < words.length; i++) {
          const word = words[i];
          if (word.innerText === highlightedWord) {
            if (event.key === '1') {
              word.classList.remove('bg-custom-yellow', 'bg-custom-skyblue');
              word.classList.add('bg-custom-red');
            }
            if (event.key === '2') {
              word.classList.remove('bg-custom-red', 'bg-custom-skyblue');
              word.classList.add('bg-custom-yellow');
            }
            if (event.key === '3') {
              word.classList.remove('bg-custom-red', 'bg-custom-yellow');
              word.classList.add('bg-custom-skyblue');
            }
            if (event.key === '4') {
              word.classList.remove('bg-custom-red', 'bg-custom-yellow', 'bg-custom-skyblue');
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