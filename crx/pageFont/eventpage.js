// message listener during runtime
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) { 
    if (request.todo == "showPageAction"){
        // retrieves all the tabs
        chrome.tabs.query({active:true, currentWindow: true}, function (tabs) { 
            chrome.pageAction.show(tabs[0].id);
        });
    }
 })


