$(function () {

    chrome.storage.sync.get(['total', 'goal'], function (items) {
        $('#total').text(items.total);
        $('#goal').text(items.goal);
    })

    $('#addAmount').on('click', function () {
        // the best practice is to use storage.sync, except when we want to 
        // specifically use local storage where we use chrome.storage.local

        // get total if there is total synced
        chrome.storage.sync.get(['total', 'goal'], function (items) {
            var newTotal = 0;
            if (items.total) {
                newTotal += parseInt(items.total);
            }
            // add amount if there is amount
            var amount = $('#amount').val();
            if (amount) {
                newTotal += parseInt(amount);
            }
            // store new total
            chrome.storage.sync.set({
                "total": newTotal
            });
            // update the UI
            $('#total').text(newTotal);
            // blank out the amount
            $('#amount').val('');

            if (newTotal >= items.goal) {
                var opt = {
                    type: "basic",
                    title: "Goal Reached!",
                    message: "You reached your goal of " + items.goal + "!",
                    iconUrl: "icon.png"
                }
                chrome.notifications.create('goalReached', opt, function () {})
            }
        })
    });
})