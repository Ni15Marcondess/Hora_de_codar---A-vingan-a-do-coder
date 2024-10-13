function lernumero() {
    const numero = document.getElementById("num").value;

    if (numero) {
        if (numero > 0) {
            // retorno caso o número seja positivo //
            document.getElementById("resultado").textContent = 'Olha só! Seu número é positivo!';
            document.getElementById("retorno");

        } else if (numero < 0) {
            //retorno caso o número seja negativo
            document.getElementById("resultado").textContent = 'Muito interessante, seu número é negativo!';
            document.getElementById("retorno");
        } else {
            document.getElementById("resultado").textContent ='Que bacana! Seu número é neutro!';
            document.getElementById("retorno");
        }
    }
}