 $(function () {
     chrome.storage.sync.get('goal', function (items) { 
         $('#goal').text(items.goal);
      });

      $('#save').on('click', function () { 
            var goal = $('#goal').val();

            // if there is goal
            if (goal) {
                chrome.storage.sync.set({'goal': goal}, function () { 
                    close();
                 });
            };
       });

       $('#reset').on('click', function () { 
           chrome.storage.sync.set({'total': 0}, function () { 
               var opt = {
                   type: "basic",
                   title: "Total reset!",
                   message: "Total has been reset back to zero!",
                   iconUrl: "icon.png"
               }
               // this requires callback, but we dont actually need it right now, so we just pass an empty func
               var opt = {
                type: "basic",
                title: "Goal Reached!",
                message: "You reached your goal!",
                iconUrl: "icon.png"
            }
               chrome.notifications.create('reset', opt, function () {  });
            })
        })
 });