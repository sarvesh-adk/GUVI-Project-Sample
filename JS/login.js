$(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'login.php',
            type: 'POST',
            data: {
                username: $('#username').val(),
                password: $('#password').val()
            },
            success: function(response) {
                if (response === 'success') {
                    localStorage.setItem('username', $('#username').val());
                    window.location.href = 'profile.html';
                } else {
                    alert('Invalid credentials');
                }
            }
        });
    });
});
