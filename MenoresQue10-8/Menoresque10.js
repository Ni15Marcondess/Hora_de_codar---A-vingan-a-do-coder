function calcularMedia() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);
    const num4 = parseFloat(document.getElementById("num4").value);

    const numeros = [num1, num2, num3, num4];

    // Verifica se todos os números estão entre 1 e 9
    const numerosValidos = numeros.every(num => num > 0 && num < 10);

    if (numerosValidos) {
        const media = (num1 + num2 + num3 + num4) / 4;
        
        // Verifica se a média é maior que 5
        if (media > 5) {
            document.getElementById("resultado").textContent = "Você passou no teste!";
        } else {
            document.getElementById("resultado").textContent = "Tente novamente.";
        }
    } else {
        document.getElementById("resultado").textContent = "Por favor, insira números entre 1 e 9.";
    }
}
