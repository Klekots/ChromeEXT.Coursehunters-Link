// chrome.bookmarks.create({'parentId': "1592",
// 'title': data.title,
// 'url': 'https://coursehunter.net/course/osnovy-programmirovaniya-na-python-s-napisaniem-telegram-bota'});

chrome.browserAction.onClicked.addListener((tab)=>{
  console.log(tab);
  chrome.tabs.sendMessage(tab.id, "Return video URL",(res)=>{
    chrome.bookmarks.create({'parentId': "1592",
    'title': `${tab.title} - ${res}`,
    'url': tab.url});
  });
});

// "browser_action":{
//   "default_popup": "popup.html",
//   "default_title": "Test"
// }