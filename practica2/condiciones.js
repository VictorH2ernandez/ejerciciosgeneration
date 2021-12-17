const edad = parseInt(prompt("Introduce tu edad: "));

if(edad >=18 && edad<30){
    document.write("<h1>" + "Eres un adulto joven pana"+ "</h1>");
}else if(edad >=30 && edad<60){
document.write("Eres un adulto mayor");
}else if(edad >=62 && edad<120){
    document.write("Eres un anciano :( F por ti: ")
}else if(edad >=120){
    document.write("Edad invalida")
} else{
    document.write("Eres un niño bai: ")
}
