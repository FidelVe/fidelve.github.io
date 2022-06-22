let heading = document.querySelector("#heading");
let wordsArray = ["Hi!", "Hello!", "Hola!"];
let wordLoop = 0;
let newWord = true;

setInterval(() => {
  if (!newWord) {
    if (heading.innerText.length === 1) {
      if (wordLoop === wordsArray.length) {
        // reset wordLoop to zero
        wordLoop = 0;
      } else {
        heading.innerText = wordsArray[wordLoop];
        wordLoop += 1;
      }
    } else {
      newWord = true;
    }
  }
}, 333);

// beginning of word
setInterval(() => {
  if (newWord) {
    if (heading.innerText.length > 1) {
      const newText = heading.innerText.slice(0, -1);
      heading.innerText = newText;
    } else {
      newWord = false;
    }
  }
}, 333);
