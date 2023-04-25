$(document).ready(function() {
    $('#myForm').submit(function(event) {
        event.preventDefault();
        var newItem = $('#newItem').val();
        if (newItem !== '') {
            $('#myList').append('<li>' + newItem + '</li>');
            $('#newItem').val('');
        }
        });

    $('#myList').on('click', 'li', function() {
        $(this).toggleClass('completed');
        });
    });