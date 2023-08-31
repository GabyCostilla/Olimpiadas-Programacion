let array = [40, 1, 5, 200];
function comparar(a, b) {
  return a - b;
}
array.sort(comparar)

console.log(array)
    function buscarNumeroEnArray(array, numero, indice = 0) {
        
        if (indice === array.length) {
            return false;
        }
        
        if (array[indice] === numero) {
            return true;
        }

        return buscarNumeroEnArray(array, numero, indice + 1);
    }
    
   
    let numero = 3;
    let resultado = buscarNumeroEnArray(array, numero);
    if(resultado == true){
        console.log(true)
    } else{
        console.log(false)
    }
    
