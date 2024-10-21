function MaiorQue72() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);
    const num5 = parseFloat(document.getElementById("num5").value);
    const num6 = parseFloat(document.getElementById("num6").value);

    const numeros = [num1, num2, num3, num4, num5, num6];

    // Verificando se todos os valores são números válidos
    const todosValidos = numeros.every(num => !isNaN(num));

    if (todosValidos) {
        // Filtra os números menores que 72 e faz a soma
        const soma = numeros.filter(num => num < 72).reduce((acc, curr) => acc + curr, 0);

        document.getElementById("resultado").textContent = `Valores informados: ${numeros.join(', ')}. Soma dos números menores que 72: ${soma}`;
    } else {
        alert("Por favor, insira valores numéricos válidos em todos os campos.");
    }
}

