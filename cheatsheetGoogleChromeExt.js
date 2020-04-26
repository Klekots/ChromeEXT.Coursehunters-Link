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



    
