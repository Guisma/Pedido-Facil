document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.confirm-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Pedido confirmado!');
        });
    });

    document.querySelectorAll('.decline-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Pedido recusado!');
        });
    });

    document.querySelectorAll('.finalize-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Pedido finalizado!');
        });
    });

    document.querySelectorAll('.details-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Detalhes do pedido.');
        });
    });

    document.querySelectorAll('.update-button').forEach(button => {
        button.addEventListener('click', () => {
            alert('Atualizando pedidos...');
        });
    });
});
