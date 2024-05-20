document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('consultant-form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Contato recebido! Em breve entraremos em contato.');
    });

    document.querySelectorAll('.plan-card button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Plano contratado!');
        });
    });
});
