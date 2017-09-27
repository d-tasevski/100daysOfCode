$(function () { 
    $('#name').on('keyup', function () { 
        $('#greeting').text('Hi, ' + $('#name').val() + '!');
     });
 })