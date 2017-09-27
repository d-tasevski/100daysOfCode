$(function () {

    chrome.storage.sync.get('limit', function (budget) { 
        if (budget) {
            $('#limit').val(budget.limit);        
        }
     })

    $('#saveLimit').on('click', function (e) { 
        var limit = $('#limit').val();
        if(limit){
            chrome.storage.sync.set({"limit": limit}, function () { 
                close();
             })
        }
     });

    $('#reset').on('click', function (e) { 
        chrome.storage.sync.set({"total": 0}, function () {
            var resetMsg = {
                type: "basic",
                iconUrl: "icons/icon48.png",
                title: "Budget reset",
                message: "Your budget has been reset down to 0"
            }
            chrome.notifications.create('budgetReset', resetMsg);
        });
     });
});