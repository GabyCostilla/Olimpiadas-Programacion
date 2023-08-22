function resolverLaberinto(laberinto, fila, columna) {
   
}
const laberinto = [
    ['.', '#', '.', '.', '.'],
    ['.', '#', '.', '#', '.'],
    ['.', '.', '.', '.', '.'],
    ['.', '#', '#', '#', '.'],
    ['.', '.', '.', '#', 'G']
];



const filaInicial = 0;
const columnaInicial = 0;

const resultado = resolverLaberinto(laberinto, filaInicial, columnaInicial);

if (resultado ) {
    console.log("Laberinto resuelto");
} else {
    console.log("No se encontró solución");
}
