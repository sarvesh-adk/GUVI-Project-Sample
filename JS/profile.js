$(document).ready(function() {
    if (!localStorage.getItem('username')) {
        window.location.href = 'login.html';
    }

    $('#profileForm').submit(function(event) {
        event.preventDefault();
        $.ajax({
            url: 'profile.php',
            type: 'POST',
            data: {
                username: localStorage.getItem('username'),
                age: $('#age').val(),
                dob: $('#dob').val(),
                contact: $('#contact').val()
            },
            success: function(response) {
                alert('Profile updated successfully');
            }
        });
    });
});
