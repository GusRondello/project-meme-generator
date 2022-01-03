window.onload = function () {
  const inputText = document.getElementById('text-input');
  function textoMeme() {
    const memeText = document.getElementById('meme-text');
    memeText.innerHTML = inputText.value;
  }

  inputText.addEventListener('input', textoMeme);
};
