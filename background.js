chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: "OFF",
  });
});

const tipitakaOrg = "https://tipitaka.org";

chrome.action.onClicked.addListener(async (tab) => {
  let initialized = false;

  const initialize = async (id) => {
    if (!initialized) {
      await chrome.scripting.executeScript({
        target: { tabId: id },
        files: ["utils.js", "dictionary-panel.js"],
      });
      initialized = true;
    }
  };

  // if (tab.url.startsWith(tipitakaOrg)) {
  // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
  const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
  // Next state will always be the opposite
  const nextState = prevState === "ON" ? "OFF" : "ON";

  // Set the action badge to the next state
  await chrome.action.setBadgeText({
    tabId: tab.id,
    text: nextState,
  });

  if (nextState === "ON") {
    // Insert the CSS file when the user turns the extension on
    await chrome.scripting.insertCSS({
      files: ["custom-style.css"],
      target: { tabId: tab.id },
    });

    await initialize(tab.id);

    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ["main.js"],
    });
  } else if (nextState === "OFF") {
    chrome.tabs.sendMessage(tab.id, "destroy");

    // Remove the CSS file when the user turns the extension off
    await chrome.scripting.removeCSS({
      files: ["custom-style.css"],
      target: { tabId: tab.id },
    });

    // console.debug("custom-style.css");
  }
  // }
});
