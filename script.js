document.addEventListener('DOMContentLoaded', function() {
    const contactButtons = document.querySelectorAll('.boton');

    // Añade el evento click a cada botón
    contactButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Llámanos al +502 7854-9658 y te atenderemos con gusto');
        });
    });
});