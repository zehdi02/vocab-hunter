import React from 'react';

const SplitLinesToken = (fileContent, handleWordClick) => {
  const lines = fileContent.split('\n');

  const lineElements = lines.map((line, lineIndex) => {
    const words = line.split(' ');

    const tokenWord = words.map((word, wordIndex) => {
      const wordWithoutPunctuation = word.replace(/[^\w\s]+/g, '');
      const punctuation = word.replace(/[\w\s]/g, '');

      const handleWordClickWrapper = () => {
        handleWordClick(wordWithoutPunctuation);
      };

      const wordElement =
        wordWithoutPunctuation !== '\r' ? (
          <span
            className="bg-custom-red"
            key={`word-${lineIndex}-${wordIndex}`}
            style={{ margin: '2px', lineHeight: '2em' }}
            onClick={handleWordClickWrapper}
          >
            {wordWithoutPunctuation}
          </span>
        ) : null;

      const punctuationElement = punctuation !== '' ? punctuation : '';

      return (
        <React.Fragment key={`token-${lineIndex}-${wordIndex}`}>
          {wordElement}
          {punctuationElement}
        </React.Fragment>
      );
    });

    const lineContent = (
      <p className="py-4" key={`line-${lineIndex}`}>
        {tokenWord}
      </p>
    );

    return lineContent;
  });

  return lineElements;
};

export default SplitLinesToken;
