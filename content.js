const videoURL = document.getElementsByClassName("jw-video")[0].src;

chrome.runtime.onMessage.addListener((req,sender,sendResponse)=>{
    if(req === "Return video URL"){
        sendResponse(videoURL);
    }
});