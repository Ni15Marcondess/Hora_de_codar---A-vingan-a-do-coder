function verificarVoto() {
    const anoAtual = new Date().getFullYear(); // Pega o ano atual
    const anoNascimento = parseInt(document.getElementById("anoNascimento").value); // Lê o ano de nascimento

    const idade = anoAtual - anoNascimento; // Calcula a idade

    // Verifica se a idade é 16 ou mais para permitir o voto
    if (idade >= 16) {
        document.getElementById("resultado").textContent = "Você pode votar este ano!";
    } else {
        document.getElementById("resultado").textContent = "Você não pode votar este ano.";
    }
}
