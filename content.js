const videoURL = document.getElementsByClassName("jw-video")[0].src;
const title = document.title;
const URL = document.URL;

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req === "Create new bookmark") {
        chrome.runtime.sendMessage({
            action: "Add new bookmark",
            payload: {
                videoURL,
                title,
                URL
            }
        });
    }
});