document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('#addBookmark').addEventListener('click', function(){
        let params = {
            active: true,
            currentWindow: true
        }

        const gotTab = (tabs) => {
            let message = "Create new bookmark";
            chrome.tabs.sendMessage(tabs[0].id, message);
        }

        chrome.tabs.query(params, gotTab);
        
    }, false);

    document.querySelector("#inMainPage").addEventListener('click',()=>{
        chrome.runtime.sendMessage({
            action: "In Main Page"
        })
    })
});