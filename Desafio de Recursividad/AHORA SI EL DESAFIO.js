function ordenarArrayRecursivo(arr) {
    if (arr.length === 0) {
      return [];
    }
  
    let max = Math.max(...arr);
    arr.splice(arr.indexOf(max), 1);
  
  }
  
  let arrayNumeros = [9, 4, 5];
  let arrayOrdenado = ordenarArrayRecursivo(arrayNumeros);
  console.log(arrayOrdenado); 
  