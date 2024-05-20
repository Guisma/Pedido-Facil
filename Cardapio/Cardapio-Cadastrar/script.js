document.getElementById('item-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome-item').value;
    const imagem = document.getElementById('imagem-item').files[0];
    const descricao = document.getElementById('descricao-item').value;
    const valor = document.getElementById('valor-item').value;

    if (nome && imagem && descricao && valor) {
        alert('Item cadastrado com sucesso!');
        // Lógica de cadastro do item pode ser adicionada aqui.
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
