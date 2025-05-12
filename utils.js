function getSelectedWord() {
  const selection = window.getSelection();
  const text = selection.toString().trim();
  if (text && text.split(/\s+/).length === 1) {
    return text;
  }
  return null;
}

// Add listener to all elements that contain text
function addListenersToTextElements() {
  document.body.addEventListener("mouseup", () => {
    const word = getSelectedWord();
    if (word) handleSelectedWord(word);
  });
}
