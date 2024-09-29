document.addEventListener('DOMContentLoaded', function() {
    const contactButtons = document.querySelectorAll('.boton');

   
    contactButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            alert('Llámanos al +502 7854-9658 y te atenderemos con gusto');
        });
    });
});

window.addEventListener('load', function() {
    alert('Se recargó la página');
});