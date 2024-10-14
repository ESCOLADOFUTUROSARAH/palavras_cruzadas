// Impede a entrada de caracteres inválidos e força a entrada de letras maiúsculas
document.addEventListener('keydown', function (event) {
    const target = event.target;
    if (target.tagName === 'INPUT' && target.type === 'text') {
        const key = event.key;
        const letterPattern = /^[A-Za-z]$/;

        // Permite apenas letras
        if (!letterPattern.test(key) && key !== "Backspace" && key !== "Tab") {
            event.preventDefault();
        }

        // Trata o evento de 'Backspace'
        if (key === "Backspace") {
            if (target.value === '') {
                // Move para o input anterior se já estiver vazio
                moverParaInputAnterior(target);
            } else {
                target.value = ''; // Limpa o valor do campo
            }
        }

        // Trata o evento de 'Tab'
        if (key === "Tab") {
            event.preventDefault(); // Impede o comportamento padrão do Tab
            moverParaProximoInput(target); // Move para o próximo input
        }
    }
});

function moverParaProximoInput(inputAtual) {
    // Obtém o ID da palavra e o índice da letra atual a partir dos atributos data
    const palavraId = inputAtual.getAttribute("data-palavra");
    const indiceAtual = parseInt(inputAtual.getAttribute("data-indice"), 10);

    // Seleciona todos os inputs da palavra atual (horizontal ou vertical)
    const inputsPalavra = document.querySelectorAll(`input[data-palavra="${palavraId}"]`);

    // Verifica se há um próximo input na mesma palavra
    if (indiceAtual + 1 < inputsPalavra.length) {
        // Move para o próximo input
        const proximoInput = inputsPalavra[indiceAtual + 1];
        proximoInput.focus();
    }
}

function moverParaInputAnterior(inputAtual) {
    // Obtém o ID da palavra e o índice da letra atual a partir dos atributos data
    const palavraId = inputAtual.getAttribute("data-palavra");
    const indiceAtual = parseInt(inputAtual.getAttribute("data-indice"), 10);

    // Seleciona todos os inputs da palavra atual
    const inputsPalavra = document.querySelectorAll(`input[data-palavra="${palavraId}"]`);

    // Verifica se há um input anterior na mesma palavra
    if (indiceAtual > 0) {
        // Move para o input anterior
        const inputAnterior = inputsPalavra[indiceAtual - 1];
        inputAnterior.focus();
    }
}

// Exemplo de uso da função
document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('input', function () {
        // Após digitar a letra, chama a função para mover para o próximo input
        if (input.value.length === 1) {
            moverParaProximoInput(input);
        }
    });
});