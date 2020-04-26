// chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });
// chrome.browserAction.setBadgeText({text: "10+"});

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.action === "Add new bookmark") {
    const {
      title,
      videoURL,
      URL
    } = msg.payload;
    chrome.bookmarks.create({
      'parentId': "1592",
      'title': `${title} - ${videoURL}`,
      'url': URL
    });
  }
});