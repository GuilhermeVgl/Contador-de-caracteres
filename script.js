

    const inputText = document.querySelector('#input-text');
    const charWithSpaces = document.querySelector('.char-with-spaces .count');
    const charWithoutSpaces = document.querySelector('.char-without-spaces .count');
    const wordCount = document.querySelector('.word-count .count');
    const lineCount = document.querySelector('.line-count .count');

    inputText.addEventListener('input', () => {
    const text = inputText.value;
  
    charWithSpaces.textContent = text.length;
  

    const textWithoutSpaces = text.replace(/\s+/g, '');
    charWithoutSpaces.textContent = textWithoutSpaces.length;
  
    const valor = inputText.value;
    const palavras = valor.split(' ');
    const numPalavras = palavras.length;
    wordCount.textContent = `${numPalavras}`;
  
    const lines = text.split(/\r\n|\r|\n/);
    lineCount.textContent = lines.length;

    const lineBreaks = (text.match(/\n/g) || []).length;
    lineCount.textContent = lineBreaks + 1; // add one for the last line
   
});
