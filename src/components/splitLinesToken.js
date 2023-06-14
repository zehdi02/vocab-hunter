function splitLines(fileContent) {
  // console.log(fileContent);

  // Split the content into lines using the newline character (\n)
  const lines = fileContent.split('\n');
  // console.log(lines);
  
  // Process each line
  const lineElements = lines.map((line) => {
    const words = line.split(' ');  // Split the line into words
    console.log(words);
    
    // Tokenize each word, and add span tags if its a word -- not if its a punctuation.
    const tokenWord = words.map((word) => {
      // Remove punctuation from word w/ RegEx. Replace any whitespace w/ empty string.
      const wordWithoutPunctuation = word.replace(/[^\w\s]+/g, '');  
      // console.log(wordWithoutPunctuation);
      
      // Remove any character&whitespace from word w/ RegEx. Replace all non-punctuations w/ empty string.
      const punctuation = word.replace(/[\w\s]/g, '');  
      // console.log(punctuation);

      // TODO: Find a way to update the span tag's style color.
      // #ffd6a5 (orange) for unknown
      // #ffe895 (yellow) for unfamiliar
      // #c6dfff (sky-blue) for familiar

      // Create separate span tags for word w/ punctuation.
      // If token is not '\r', then enclose word with <span> tag,
      // otherwise replace '\r' with empty string.
      const wordElement = 
        wordWithoutPunctuation !== '\r' ? `<span style="background-color: #c6dfff;">${wordWithoutPunctuation}</span>` : ''; 
      // console.log(wordElement);

      // If punctuation is not an empty string, then assign ${punctuation}, 
      // Otherwise make punctuationElement an empty string.
      const punctuationElement = punctuation !== '' ? `${punctuation}` : '';
      // console.log(punctuationElement);
      
      // Return the word w/ enclosed span tag OR empty string, and 
      // return punctuation as string OR empty string.
      return wordElement + punctuationElement;  
    });
    
    // Join the word elements with spaces to form the line's content
    const lineContent = tokenWord.join(' ');

    // Enclose the line's content with a <p> tag, OR empty string if empty.
    return lineContent !== '' ? `<p>${lineContent}</p>` : '';
  });
  // console.log(lineElements);
  
  // Join the line elements to form the final processed content
  return lineElements.join('');
}

export default splitLines;