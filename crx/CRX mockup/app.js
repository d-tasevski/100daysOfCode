$(function () { 
    $('#weatherApp').on('click', function () { 
        $('.container_body-weather').toggleClass('container_shrinked');
     })
    $('#colorPicker').on('click', function () { 
        $('.container_body-color').toggleClass('container_shrinked');
     })
    $('#urlShortener').on('click', function () { 
        $('.container_body-url').toggleClass('container_shrinked');
     })
 });