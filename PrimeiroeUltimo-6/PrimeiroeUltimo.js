     function PrimeiroeUltimo() {
        // pegando os valores e convertendo para números
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        const num3 = parseFloat(document.getElementById("num3").value);
        const num4 = parseFloat(document.getElementById("num4").value);
      
        const numeros = [num1, num2, num3, num4];
      
        // Verificando se todos os valores são números válidos

        if (numeros.every(num => !isNaN(num))) {
         
            // Resultado
          document.getElementById("resultado").textContent = 
            `O primeiro número é ${num1}, o último é ${num4} e o maior é ${Math.max(...numeros)}`;
      
          // Exibindo o resultado
          document.getElementById("aparecer").style.display = "block";
        } else {
          alert("Digite valores válidos em todas as entradas!");
        }
      }
      