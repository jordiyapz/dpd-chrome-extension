/**
 * Handle a selected word by looking it up in the dictionary.
 *
 * @param {string} word - The selected word.
 */
function handleSelectedWord(word) {
  console.log("Selected word:", word);
  panel?.setText("Loading...");

  const url =
    "https://dpd-proxy.snyatix.my.id/gd?search=" + encodeURIComponent(word);

  fetch(url)
    .then((response) => response.text())
    .then((res) => {
      panel?.setText("Result for " + word);
      panel?.setContent(res);
    })
    .catch((error) => {
      console.error(error);
      panel?.setText("Error");
    });
}

function init() {
  if (document.getElementById("main-content-32050248") === null) {
    const newContentContainer = document.createElement("div");
    const nodes = document.body.childNodes;
    newContentContainer.id = "main-content-32050248";
    [...nodes]
      .filter((node) => node.tagName !== "SCRIPT")
      .forEach((node) => {
        newContentContainer.appendChild(node);
      });

    document.body.appendChild(newContentContainer);
    addListenersToTextElements();
    chrome.runtime.onMessage.addListener(function (
      request,
      sender,
      sendResponse
    ) {
      if (request === "destroy") {
        panel?.destroy();
        delete panel;
        panel = null;
        sendResponse("done");
      }
    });
  }

  panel = panel || new DictionaryPanel();
}

// Run the script after the DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
