function calcularPesoIdeal() {
    const altura = parseFloat(document.getElementById("altura").value);
    const genero = parseInt(document.getElementById("genero").value); 

    let pesoIdeal;

    if (genero === 1) {
        // Fórmula para mulheres
        pesoIdeal = (62.1 * altura) - 44.7;
    } else if (genero === 2) {
        // Fórmula para homens
        pesoIdeal = (72.7 * altura) - 58;
    }

    if (!isNaN(pesoIdeal)) {
        document.getElementById("resultado").textContent = `Seu peso ideal é ${pesoIdeal.toFixed(2)} kg.`;
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira valores válidos.";
    }
}
