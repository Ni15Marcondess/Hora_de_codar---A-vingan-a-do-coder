function MediaAritmetica(){

const num1 = parseFloat(document.getElementById("num1").value);
const num2 = parseFloat(document.getElementById("num2").value);
const num3 = parseFloat(document.getElementById("num3").value);
const num4 = parseFloat(document.getElementById("num4").value);
const num5 = parseFloat(document.getElementById("num5").value);
const num6 = parseFloat(document.getElementById("num6").value);

const numeros = [num1, num2, num3, num4, num5, num6];

if (numeros.every((num) => !isNaN(num))) {

  const soma = num1 + num2 + num3 + num4 + num5 + num6;
  const media = soma / numeros.length;

  document.getElementById(
    "resultado"
  ).textContent = `A soma desses números é ${soma} e a média deles é ${media.toFixed(2)}`;
  document.getElementById("container-resultado").style.display = "block";
} else {
  alert("Digite valores válidos em todas as entradas!");
}
}