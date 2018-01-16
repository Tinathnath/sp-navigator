

chrome.tabs.onActivated.addListener(checkDisplay);
chrome.tabs.onUpdated.addListener(checkDisplay);

function checkDisplay() {
    chrome.tab.getCurrent(function (tab) {
        if (tab.url.test(/^(http|https):\/\/.*\.sharepoint\.com\/?.*/)) {
            chrome.pageAction.show(tab.id);
        }
    });
}