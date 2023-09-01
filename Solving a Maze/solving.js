//ESTO NO ES MIO


function resolverLaberinto(laberinto, fila, columna) {
  const numRows = laberinto.length;
  const numCols = laberinto[0].length;

  if (
    fila < 0 ||
    fila >= numRows ||
    columna < 0 ||
    columna >= numCols ||
    laberinto[fila][columna] === "#" ||
    laberinto[fila][columna] === "+"
  ) {
    return false;
  }

  if (laberinto[fila][columna] === "G") {
    console.log(laberinto);
    return true;
  }

  laberinto[fila][columna] = "+";

  if (resolverLaberinto(laberinto, fila, columna - 1)) {
    return true;
  }
  if (resolverLaberinto(laberinto, fila + 1, columna)) {
    return true;
  }
  if (resolverLaberinto(laberinto, fila, columna + 1)) {
    return true;
  }
  if (resolverLaberinto(laberinto, fila - 1, columna)) {
    return true;
  }

  laberinto[fila][columna] = " ";

  return false;
}

const laberinto = [
  [".", "#", ".", ".", "."],
  [".", "#", ".", "#", "."],
  [".", ".", ".", ".", "."],
  [".", "#", "#", "#", "."],
  [".", ".", ".", "#", "G"],
];

const filaInicial = 0;
const columnaInicial = 0;

const resultado = resolverLaberinto(laberinto, filaInicial, columnaInicial);

if (resultado) {
  console.log("Laberinto resuelto");
} else {
  console.log("No se encontró solución");
}
