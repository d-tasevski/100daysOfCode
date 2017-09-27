var menuItem = {
    "id": "wikit",
    "title": "Wikit",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

// format any text selected so that it can be used in URL
function fixedEncodeURI (str) {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function (data) { 
    if (data.menuItemId == "wikit" && data.selectionText) {
        var wikiURL = "https://en.wikipedia.org/wiki/" + fixedEncodeURI(data.selectionText);
        var createData = {
            "url": wikiURL,
            "type": "popup",
            "top": 5,
            "left": 5,
            "width": parseInt(screen.availWidth / 2),
            "height": parseInt(screen.availHeight / 2)
        };
        chrome.windows.create(createData, function () {  });
    }
 })