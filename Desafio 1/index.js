function calcularDivisores(numero) {
  const divisores = [];
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
    }
  }
  return divisores;
}

function maximaSumaCadena(a) {
  const divisores = calcularDivisores(a);
  const dp = new Array(a + 1).fill(0);

  for (let i = 1; i <= a; i++) {
    dp[i] = i;
    for (const divisor of divisores) {
      if (i - divisor > 0) {
        dp[i] = Math.max(dp[i], dp[i - divisor] + divisor);
      }
    }
  }

  return dp[a];
}

const numeroInicial = 60;
const resultado = maximaSumaCadena(numeroInicial);
console.log(`La máxima suma posible es: ${resultado}`);
