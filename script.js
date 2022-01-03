window.onload = function () {
  const inputText = document.getElementById('text-input');
  const memeImage = document.getElementById('meme-image');
  const inputImage = document.getElementById('meme-insert');
  function textoMeme() {
    const memeText = document.getElementById('meme-text');
    memeText.innerHTML = inputText.value;
  }

  function addImage() {
    // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded/27165977#27165977
    memeImage.src = URL.createObjectURL(inputImage.files[0]);
  }

  inputText.addEventListener('input', textoMeme);
  inputImage.addEventListener('change', addImage);
};
