const precioTelefono = 100;
if(precioTelefono > 500){
    console.log("El telefono es caro");
} else{
    console.log("El telefono es barato");
}


if(marca === "Apple"){
    console.log("El telefono es de Apple");
}
else if (marca === "Samsung") {
    console.log("El telefono es de Samsung");
}
else if (marca === "Xiaomi") {
    console.log("El telefono es de  Xiaomi");
}
else if (marca === "Otra marca") {
    console.log("El telefono es de otra marca");
}


let dia = 3; //0:Domingo, 1:Lunes
if(dia === 0 ){
    console.log("Domingo");
} else if(dia === 1) {
    console.log("Lunes");
}
else if(dia === 2) {
    console.log("Martes");
}
else if(dia === 3) {
    console.log("Miercoles");
}
else if(dia === 4) {
    console.log("Jueves");
}
else if(dia === 5) {
    console.log("Viernes");
}
else if(dia === 6) {
    console.log("Sabado");
}
else {
    console.log("Dia no valido");
}