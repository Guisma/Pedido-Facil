document.getElementById('deliveryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const bairroName = document.getElementById('bairroName').value;
    const freteValue = document.getElementById('freteValue').value;

    if (bairroName && freteValue) {
        const freteList = document.getElementById('freteList');
        const newItem = document.createElement('li');
        newItem.innerHTML = `Bairro: ${bairroName} - Frete: ${freteValue}R$ <button class="delete-btn">Excluir</button>`;

        freteList.appendChild(newItem);

        newItem.querySelector('.delete-btn').addEventListener('click', function() {
            newItem.remove();
        });

        document.getElementById('deliveryForm').reset();
    }
});

document.querySelectorAll('.delete-btn').forEach(button => {
    button.addEventListener('click', function() {
        button.parentElement.remove();
    });
});
