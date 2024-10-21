function calcular() {
    const valor1 = parseInt(document.getElementById("valor1").value); 
    const valor2 = parseInt(document.getElementById("valor2").value); 
    const operacao = parseInt(document.getElementById("operacao").value); 

    let resultado;

    switch (operacao) {
        case 1: // Adição
            resultado = valor1 + valor2;
            break;
        case 2: // Subtração
            resultado = valor1 - valor2;
            break;
        case 3: // Divisão
            if (valor2 !== 0) {
                resultado = valor1 / valor2;
            } else {
                resultado = "Erro: Divisão por zero!";
            }
            break;
        case 4: // Multiplicação
            resultado = valor1 * valor2;
            break;
        default:
            resultado = "Operação inválida!";
            break;
    }

    document.getElementById("resultado").textContent = `Resultado: ${resultado}`;
}
