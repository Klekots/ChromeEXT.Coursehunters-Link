//bg.js -> Send Message 
    chrome.browserAction.onClicked.addListener((tab)=>{
        const msg = {
        text: "Hello From BG scripts"
        }
    
        chrome.tabs.sendMessage(tab.id, msg);
    });

//content.js -> Recive Message
    chrome.runtime.onMessage.addListener((req,sender,sendResponse)=>{
        console.log(req.text);
    });

//popup.js -> Send Message
    let params = {
        active: true,
        currentWindow: true
    }

    const gotTab = (tabs) => {
        let message = "Message from Popup page";
        chrome.tabs.sendMessage(tabs[0].id, message);
    }

    chrome.tabs.query(params, gotTab);


// chrome.browserAction.onClicked.addListener((tab)=>{
//   console.log(tab);
//   chrome.tabs.sendMessage(tab.id, "Return video URL",(res)=>{
//     chrome.bookmarks.create({'parentId': "1592",
//     'title': `${tab.title} - ${res}`,
//     'url': tab.url});
//   });
// });