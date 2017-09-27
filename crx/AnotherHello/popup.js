$(document).ready(function () {
    $('#name').on('keyup', function (e) { 
        $('#greet').text('Hello ' + $('#name').val());
     });
});