function calcularoMaiorValor() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);

    // Verifica se todos os valores são números válidos
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
      let maior = num1;
      let menor = num1;

      if (num2 > maior) {
        maior = num2;
      }
      if (num2 < menor) {
        menor = num2;
      }

      if (num3 > maior) {
        maior = num3;
      }
      if (num3 < menor) {
        menor = num3;
      }

      document.getElementById("resultado").textContent = "O maior valor é: " + maior;
    } else {
      alert("Por favor, insira valores válidos.");
    }
  }