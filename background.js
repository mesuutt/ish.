chrome.browserAction.onClicked.addListener(function(tab) {
    // When click to browser action icon send message to content script for create
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        chrome.tabs.sendMessage(tabs[0].id, {action: "run"}, function(response) {});
    });
});
