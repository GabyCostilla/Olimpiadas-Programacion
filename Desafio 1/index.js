function maximaSumaCadena(a) {
  let sumaMaxima = a;
  let divisor = 2;

  while (divisor <= a) {
    if (a % divisor === 0) {
      sumaMaxima += a / divisor;
      a = a / divisor;
    } else {
      divisor++;
    }
  }

  return sumaMaxima;
}

const numeroInicial = 33;
const resultado = maximaSumaCadena(numeroInicial);
console.log(`La máxima suma posible es: ${resultado}`);
