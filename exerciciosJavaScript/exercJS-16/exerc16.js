function calculadora(valor1, operacao, valor2) {
  switch (operacao) {
    case "+":
      return valor1 + valor2;
    case "-":
      return valor1 - valor2;
    case "*":
      return valor1 * valor2;
    case "/":
      return valor1 / valor2;
    default:
      return "Operacao invalida";
  }
}
console.log(calculadora(2, '+', 3));
