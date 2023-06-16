import "./splitLinesToken.css"

function splitLines(fileContent) {
  // console.log(fileContent);

  // Split the content into lines using the newline character (\n)
  const lines = fileContent.split('\n');
  // console.log(lines);

  // Process each line
  const lineElements = lines.map((line) => {
    const words = line.split(' ');  // Split the line into words
    // console.log(words);
    
    // Tokenize each word, and add span tags if its a word -- not if its a punctuation.
    const tokenWord = words.map((word) => {
      // Remove punctuation from word w/ RegEx. Replace any whitespace w/ empty string.
      const wordWithoutPunctuation = word.replace(/[^\w\s]+/g, '');  
      //console.log(wordWithoutPunctuation);

      // Remove any character&whitespace from word w/ RegEx. Replace all non-punctuations w/ empty string.
      const punctuation = word.replace(/[\w\s]/g, '');  
      // console.log(punctuation);

      // TODO: Find a way to update the span tag's style color.
      // #ffd6a5 (red) for unknown
      // #ffe895 (yellow) for unfamiliar
      // #c6dfff (skyblue) for familiar

      // TODO: Perhaps before applying the <span> tag in wordElement, 
      // make a function to check wordWithoutPunctuation's encountered value
      // (check if unknown/unfamiliar/familiar/known)

      //Handles the event when the user overs over the word on the main page

      // Create separate span tags for word w/ punctuation.
      // If token is not '\r', then enclose word with <span> tag,
      // otherwise replace '\r' with empty string.
      const wordElement =
        wordWithoutPunctuation !== '\r' ? 
        `<span 
            id="wordWithoutPunctuation" class=${'bg-custom-red'} style="margin: 2px; line-height: 2em;"
          >
            ${wordWithoutPunctuation}
          </span>` 
        : ''; 
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
    return lineContent !== '' ? `<p style="padding:1em 1em;">${lineContent}</p>` : '';
  });
  // console.log(lineElements);
  
  // Join the line elements to form the final processed content
  return lineElements.join('');
}

export default splitLines;