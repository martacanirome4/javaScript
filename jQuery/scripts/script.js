$(document).ready(function() {
    $('#showRegisterForm').on('click', function() {
        $('#registerForm').slideToggle();
    });

    $('#cancelForm').on('click', function() {
        $('#registerForm').slideUp();
    });

    $('#registrationForm').on('submit', function(event) {
        event.preventDefault();

        const name = $('#name').val().trim();
        const email = $('#email').val().trim();
        const phone = $('#phone').val().trim();
        const password = $('#password').val().trim();

        const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]+(\s+[a-zA-ZáéíóúÁÉÍÓÚñÑ]+)+$/;  // Al menos dos palabras y solo letras (con acentos)
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;    // Validación de email
        const phoneRegex = /^[0-9]+$/;                                          // Solo números
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;  // Al menos una minúscula, una mayúscula y un número

        if (!nameRegex.test(name)) {
            $('#name').get(0).setCustomValidity('Por favor, ingrese un nombre válido (al menos dos palabras, solo letras).');
            return;
        }
        
        if (!emailRegex.test(email)) {
            alert('Por favor, ingrese un email válido.');
            return;
        }

        if (!phoneRegex.test(phone)) {
            alert('Por favor, ingrese un teléfono válido (solo números, sin espacios).');
            return;
        }

        if (!passwordRegex.test(password)) {
            alert('La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, una minúscula y un número.');
            return;
            Cargad0r345678
        }

        alert('Formulario enviado correctamente');
    });
});