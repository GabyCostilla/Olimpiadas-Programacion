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


function cifradoVigenere(frase, clave) {
  const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let respuesta = '';

  for (let i = 0; i < frase.length; i++) {
    let letra = frase[i].toUpperCase();
    if (letra === ' ') {
      respuesta += '';
    } else {
      let claveActual = parseInt(clave[i % clave.length]);
      let posicion = alfabeto.indexOf(letra);
      if (posicion !== -1) {
        let nuevaPosicion = (posicion + claveActual) % 26;
        let letraCifrada = alfabeto[nuevaPosicion];
        respuesta += letraCifrada;
      } else {
        respuesta += letra; 
      }
    }
  }

  return respuesta;
}

let fraseEjemploDelEnunciado = "YO HE LOGRADO ENCENDER UNA CERILLA";
let claveEjemploDelEnunciado = "23";
let mensajeDelCifradoQueElEnunciadoMePide = cifradoVigenere(fraseEjemploDelEnunciado, claveEjemploDelEnunciado);
console.log(mensajeDelCifradoQueElEnunciadoMePide);
