import React from 'react';
import "./SplitLinesToken.css"
const SplitLinesToken = ({ fileContent, handleWordClick }) => {
  let path = window.location.pathname
  if (path !== '/reader') {
    console.log(path);
    console.log('terminating...');
    return
  }
  const lines = fileContent.split('\n');

  const lineElements = lines.map((line, index) => {
    const words = line.split(' ');

    const tokenWord = words.map((word, wordIndex) => {
      const wordWithoutPunctuation = word.replace(/[^\w\s]+/g, '');
      const punctuation = word.replace(/[\w\s]/g, '');

      const wordElement =
        wordWithoutPunctuation !== '\r' ? (
          <span
            className="bg-custom-red"
            id={`wordWithoutPunctuation_${index}_${wordIndex}`}
            onClick={() => handleWordClick(wordWithoutPunctuation)}
          >
            {wordWithoutPunctuation}
          </span>
        ) : '';

      const punctuationElement = punctuation !== '' ? `${punctuation}` : '';

      return (
        <React.Fragment key={`${index}_${wordIndex}`}>
          {wordElement}
          {punctuationElement}
        </React.Fragment>
      );
    });

    const lineContent = (
      <p key={`line_${index}`} className="text-white border rounded-xl my-4 p-4 bg-gray-800">
        {tokenWord}
      </p>
    );

    return <React.Fragment key={`lineElement_${index}`}>{lineContent}</React.Fragment>;
  });

  return <React.Fragment>{lineElements}</React.Fragment>;
};

export default SplitLinesToken;
