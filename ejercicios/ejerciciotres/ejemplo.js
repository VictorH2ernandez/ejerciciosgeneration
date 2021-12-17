const numeros = new Array(1, 4, 7, 9, 19, 15, 46, 27, 40, 123)
console.log(numeros);

let resultados = [];
numeros.forEach(function(el){
    let mult= el * 2;
    return resultados.push(mult);
})

console.log(resultados);

for( let i= 0; i < resultados.length; i++){
    console.log("El resultado es: " + resultados[i])
}  