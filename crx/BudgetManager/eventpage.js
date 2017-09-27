var contextMenuItem = {
    "id": "spendMoney",
    "title": "SpendMoney",
    "contexts": ["selection"] // appears only when user select something on the page
};
// checks if value is integer
function isInt(value) {
    return !isNan(value) && 
        parseInt(Number(value)) == value &&
            !isNan(parseInt(value, 10));
}

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function (data) { 
    if (data.menuItemId == 'spendMoney' && data.selectionText) {
        if (isInt(data.selectionText)) {
            chrome.storage.sync.get(['total', 'limit'], function (budget) { 
                var newTotal = 0;
                if(budget.total)
                    newTotal += parseInt(budget.total);
                
                newTotal += parseInt(data.selectionText);
                chrome.storage.sync.set({"total": newTotal}, function () { 
                    if (newTotal >= budget.limit) {
                        var notification = {
                            type: 'basic',
                            iconUrl: "icons/icon48.png",
                            title: "Budget limit reached",
                            message: "Uh-oh, it looks like you've reached your budget limit :("
                        };
                        chrome.notifications.create('limitNote', notification);
                    }
                 })
             })
        } else {
            console.log('Failed');
        }
    } else {
        console.log('Failed');
    }
 })