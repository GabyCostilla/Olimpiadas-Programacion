/* por si algun dia lo termino guardo este codigo
let texto = "ZAIBY";
let desplazamiento = 23;
let cifrado = [];
let resultado = [];

for (let i = 0; i < texto.length; i++) {
    let aux;
    cifrado.push(texto.charCodeAt(i));
    aux = (cifrado[i] - 97 + desplazamiento) % 26 + 97; // Utilizamos 97 para 'a' y 'A' para trabajar en minúsculas
    resultado.push(aux);
}

let textoCifrado = String.fromCharCode(...resultado);
console.log(textoCifrado);
*/



let clave=23;
let N= 2;
let frase="Te amoo zai ";
let letra;
let respuesta='';
let alfabeto = 'abcdefghijklmnñopqrstuvwxyz';
//use el alfabeto todo junto porque no me funcionaba completamente por separado
let cifrado  = alfabeto.slice(+clave);
cifrado  += alfabeto.slice(0, alfabeto.length + clave);

for(let i=0; i< frase.length; i++){  
  letra = frase[i].toLowerCase();
    if(letra ==' '){
      letra =' ';
                }
      else{
          letra = cifrado[alfabeto.indexOf(letra)] ;
        }
          respuesta += letra;
        }

console.log(respuesta)

