/*
Condicionales se utilizan para tomar desiciones de nuestro programa
solo se va a a ejecutar si la accion es verdadera

*/

/*if(condicion) 
{

}*/

const edad = prompt("Ingresa tu edad: ");

/*let edad = 15; //"introduce tu edad: ";
console.log(edad);*/

if(edad >= 18 && edad <30) {
    document.write("Tu edad es ",+ edad, " eres joven puedes votar");
}
else if(edad >= 30 && edad < 60){
document.write("Tu edad es: " + edad, "eres adulto")     
}
else if (edad > 60){
    document.write("Tu edad es " + edad, "eres un adulto mayor")
}
else{
    document.write("Tu edad es ", + edad, " no puedes votar tas chikito xd")
}
    


console.log(edad);