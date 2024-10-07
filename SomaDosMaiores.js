function SomaDosMaiores() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);

    var maior = num1
    var menor = num2
    var segmaior = num3

    if (num2 > maior){
        maior = num2
    } else if (num2 < menor) {
        menor = num2
    }
    if (num3 > maior){
        maior = num3
    } else if (num3 < menor){
        menor = num3
    }
    if(num2 > menor < maior){
        segmaior = num2

    } else if (num3 > menor < maior){
        segmaior = num3
    } 
    document.getElementById("resultado").textContent = ("O valor é " + maior);

}