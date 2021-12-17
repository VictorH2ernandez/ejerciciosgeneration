/*
ARREGLOS
*/

const comidas = ['pozole', 'quesadillas', 'tacos'];

/*
length
*/

console.log(comidas.length)

/*push agrega al final
pop - quita un elemnto del final
unshift- agrega elemento al inicio
shift quita elemento al inicio
*/

comidas.push('torta');
console.log(comidas);

comidas.pop();
console.log(comidas);

comidas.unshift('Pancita');
console.log(comidas);

comidas.shift();
console.log(comidas);

/*
forEach - nos puede servir una accion por cada elemnto de nuestro arreglo de forma automaitica*/

console.log(comidas[0])
console.log(comidas[1])
console.log(comidas[2])

comidas.forEach(function(el) {
    console.log(el);

})

const numeros = [1,4,7,8];
console.log(numeros);
numeros.forEach(function(el){
    let suma = el + 1;
    console.log(suma);
})

/* 
ejercicio
*/

const arr =[];

function suma(num){
    let sumNum = num + 1;
    return arr.unshift(sumNum);
}

console.log(suma);
suma(3);
suma(5);
suma(2);
suma(78);

console.log(arr);

