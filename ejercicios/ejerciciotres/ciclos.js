/*
ciclos - bucles - Loops

while
dowhile
for

**while**
let condition = 1;  valor inicial
while(condicion){
    *tu codigo
    *modificacion a nuestro valor inicial
}

*/

//imprimir todos los numeros del 1 al 10

/* let condicion = 1; 

while (condicion<=10){
    console.log(condicion)
    condicion = condicion + 1;
} */

// do while

/* let numero = 11;
do{
    console.log(numero);
    numero++;
}while(numero<=10); */

/*
for tiene un contador

*/
/* 
for (let control= 1; control <= 10; control++ ){
    console.log(control);

} */


const comida=["posole", "Tacos", "Tamales", "Tortas"];
for( let i= 0; i <= comida.length; i++){
    console.log(comida[i]);
}