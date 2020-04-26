// document.addEventListener('DOMContentLoaded',()=>{
    // const onClick = () => {
    //     chrome.tabs.query({currentWindow: true, active: true}),
    //     (tabs) => {
    //         chrome.tabs.sendMessage(tabs[0].id, 'Hello', setCount);
    //     }

    //     const setCount = (res) =>{
    //         const div = document.createElement('div');
    //         div.textContent = `${res.count}`;
    //         document.body.appendChild(div);
    //     }
    // }

// });


document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('button').addEventListener('click', function(){

        // chrome.runtime.sendMessage(tabs[0].id, 'Hello', setCount);
        const div = document.createElement('div');
        div.textContent = `123123123`;
        document.body.appendChild(div);
        alert(1);

    }, false);
});