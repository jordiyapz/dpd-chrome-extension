# dpd-chrome-extension

A Chrome Extension to [Digital Paḷi Dictionary](https://github.com/digitalpalidictionary) (See issue [#122](https://github.com/digitalpalidictionary/dpd-db/issues/122))

## Features

- Access to [Digital Paḷi Dictionary](https://github.com/digitalpalidictionary) directly.
- Works generally on any website (thanks to additional backend for handling CORS).
  - Sutta Central
    ![Screenshot_6](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/Screenshot_6.png)
  - Wikipedia
    ![Screenshot_2](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/Screenshot_2.png)
  - Wisdom Lib
    ![Screenshot_3](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/Screenshot_3.png)
  - Buddhanet
    ![Screenshot_4](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/Screenshot_4.png)
  - Facebook
    ![Screenshot_5](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/Screenshot_5.png)
  - Yes, even on the [Digital Paḷi Dictionary](https://github.com/digitalpalidictionary) website itself.
    ![Screenshot_1](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/Screenshot_1.png)
- Activate and deactivate mode of the extension per Tab.
- Single word selection (ignores multiple words selection).
- Supports double-click and manual selection on a word.
- Support partial word selection.
- The original feature of DPD, i.e. the Grammar, Example, Declension, Family Root, etc still works.
- Themed to match the branding of original DPD.
- Revert most changes made by the DPD extension upon deactivation.

## How to install

1. Download this [Zip file](https://github.com/jordiyapz/dpd-chrome-extension/releases/download/v1.0-beta/dpd-chrome.zip)
2. Extract the zip file
3. Go to "chrome://extensions/" in your chrome browser.
4. Activate "developer mode" in the top right corner.
5. Click "load unpacked" in the top left corner.
   ![Install extension](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/How-to-1.png)
6. Select the extracted folder.

### Optional - Pin the extension

1. After loading the extension, click on "Details"
2. Scroll down and find "Pin to toolbar"
3. Click on "Pin to toolbar" to add the extension to the toolbar
   ![Pin extension](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/How-to-2.png)

## How to use

1. Go to any pali website (e.g. [tipitaka.org](https://tipitaka.org/romn/#1556))
2. Navigate to any chapter with pali text.
3. Turn on the extension by clicking on the icon in the toolbar or activate the extension from extensions menu (puzzle icon).
   ![Activate extension](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/How-to-3.png)
   A right side panel will show up.
   ![Right side panel screenshot](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/Sidepanel-init.png)
4. Select a word by highlighting or double clicking on it.
5. The definition will show up in the panel.
   ![Right side panel result](https://github.com/jordiyapz/dpd-chrome-extension/blob/main/docs/Sidepanel-result.png)

## Known issues

- Jump-to link (A.K.A quick navigation or hashtag link) from original DPD does not work. It's a known bug of iFrame limitation.
- It changes the original website page's structure to accomodate for layouting of the panel. (Fixable if there's any issue in the future).

## Further improvements

- Support word lookup from the right panel.
