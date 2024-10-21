$(document).ready(function() {
    $('#showRegisterForm').on('click', function() {
        $('#registerForm').fadeIn();
    });

    $('#cancelForm').on('click', function() {
        $('#registerForm').fadeOut();
    });

    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado correctamente');
    });
});
