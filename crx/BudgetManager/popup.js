$(document).ready(function () {
    chrome.storage.sync.get(['total', 'limit'], function (budget) {
        console.log(budget);
        if (budget) {
            $('#total').text(budget.total);
            $('#limit').text(budget.limit);
        }
    })
    // when user click on spend button
    $('#spend').on('click', function () {
        // check if total already exists in chrome storage
        chrome.storage.sync.get(['total', 'limit'], function (budget) {
            var newTotal = 0;
            if (budget.total)
                // if exists we re adding it to the newTotal var
                newTotal += parseInt(budget.total);

            // if there is amount add it to newTotal var
            var amount = $('#amount').val();
            if (amount) {
                newTotal += parseInt(amount);
            }
            // and send new value to storage
            chrome.storage.sync.set({
                "total": newTotal
            }, function () {
                if (amount && newTotal >= budget.limit) {
                    // notification options object
                    var notification = {
                        type: 'basic',
                        iconUrl: "icons/icon48.png",
                        title: "Budget limit reached",
                        message: "Uh-oh, it looks like you've reached your budget limit :("
                    };
                    chrome.notifications.create('limitNote', notification);
                }
            });
            // update text on page, and reset the input
            $('#total').text(newTotal);
            $('#amount').val('');
        });
    });
});