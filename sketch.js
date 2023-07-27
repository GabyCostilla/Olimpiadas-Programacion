/* por si algun dia lo termino guardo este codigo

let texto="perro"
let desplazamiento=33;
let cifrado=[];
let resultado=[];
for (let i = 0; i < texto.length; i++) {
    let aux;
    cifrado.push(texto.charCodeAt(i))
    aux=(cifrado[i]-65+desplazamiento)%26 + 65
    resultado.push(aux)
    cifrado.splice(0)
  resultado= String.fromCharCode(resultado[i])
    cifrado.push(resultado)
}
console.log(cifrado)
*/


let clave=4;
let frase="zaiby";
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

