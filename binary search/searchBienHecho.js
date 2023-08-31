function buscarCosoRecursivo(arr, elemento, i = 0, f = arr.length - 1) {
    if (i > f) {
        return false;
    }
    
    const medio = Math.floor((i + f) / 2);
    
    if (arr[medio] === elemento) {
        return medio; 
    } else if (arr[medio] < elemento) {
        return buscarCosoRecursivo(arr, elemento, medio + 1, f); 
    } else {
        return buscarCosoRecursivo(arr, elemento, i, medio - 1); 
    }
}

const array = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91];
const elementoBuscado = 23;

const indiceEncontrado = buscarCosoRecursivo(array, elementoBuscado);

if (indiceEncontrado !== -1) {
    console.log(`El elemento ${elementoBuscado} se encuentra en el índice ${indiceEncontrado}.`);
} else {
    console.log(`El elemento ${elementoBuscado} no se encuentra en el array.`);
}
