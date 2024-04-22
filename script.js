document.addEventListener("DOMContentLoaded", function() {
    // Adiciona uma nota inicial em cada seção
    adicionarNota('fundamental1');
    adicionarNota('fundamental2');
});

function adicionarNota(containerId) {
    const container = document.getElementById(containerId);
    const input = document.createElement("input");
    input.type = "number";
    input.placeholder = "Nota";
    container.appendChild(input);

    const removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";
    removerBtn.classList.add("remover-button");
    removerBtn.addEventListener("click", function() {
        container.removeChild(input);
        container.removeChild(removerBtn);
    });
    container.appendChild(removerBtn);
}

function calcularDesempenho() {
    const notasFundamental1 = lerNotas("fundamental1");
    const notasFundamental2 = lerNotas("fundamental2");

    const indiceFundamental1 = calcularIndice(notasFundamental1);
    const indiceFundamental2 = calcularIndice(notasFundamental2);

    exibirResultado(indiceFundamental1, indiceFundamental2);
}

function lerNotas(elementId) {
    const notas = [];
    const container = document.getElementById(elementId);
    const inputs = container.querySelectorAll("input[type='number']");
    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            notas.push(parseFloat(input.value));
        }
    });
    return notas;
}

function calcularIndice(notas) {
    if (notas.length === 0) {
        return "Sem notas";
    }
    const media = notas.reduce((acc, curr) => acc + curr, 0) / notas.length;
    if (media >= 9.0) {
        return "Desempenho excepcional";
    } else if (media >= 8.0) {
        return "Desempenho muito bom";
    } else if (media >= 7.0) {
        return "Desempenho bom";
    } else if (media >= 6.0) {
        return "Desempenho satisfatório";
    } else {
        return "Desempenho abaixo do esperado";
    }
}

function exibirResultado(indiceFundamental1, indiceFundamental2) {
    const resultadosDiv = document.getElementById("resultados");
    resultadosDiv.innerHTML = `
        <p>Índice de performance para o Ensino Fundamental 1: ${indiceFundamental1}</p>
        <p>Índice de performance para o Ensino Fundamental 2: ${indiceFundamental2}</p>
    `;
}
