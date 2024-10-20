function SomaDosMaiores() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);

    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        // Coloca os números em um array e ordena de forma decrescente
        let numeros = [num1, num2, num3];
        numeros.sort(function(a, b) { return b - a; });

        // Os dois maiores números estão nas primeiras posições
        let somaDosMaiores = numeros[0] + numeros[1];

        // Exibe o resultado
        document.getElementById("resultado").textContent = "A soma dos dois maiores valores é: " + somaDosMaiores;
    } else {
        alert("Por favor, insira valores válidos.");
    }
}