//Manera 1
const arreglo1 = [];
console.log(arreglo1)

//Manera 2
const arreglo2 = Array.of(1, 'Hola',true);
console.log(arreglo2);

//Manera 3
const arreglo3 = new Array(3, true, "adios");


//Metodos 
/* length = longitud
*/

const letras = ['A', 'B', 'C', 'D'];
console.log(letras.length);

/* push = añade un elemento al final de nuestro arreglo
 */

letras.push('E');
console.log(letras);

//Pop = elimina el ultimo elemento

letras.pop();
console.log(letras);

//unshift =  agrega un elemento al inicio
letras.unshift(1);
console.log(letras);

//*shift elimina el primer elemento
letras.shift();
console.log(letras);