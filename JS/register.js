$(document).ready(function() {
    $('#registerForm').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'register.php',
            type: 'POST',
            data: {
                username: $('#username').val(),
                password: $('#password').val()
            },
            success: function(response) {
                alert(response);
            }
        });
    });
});
