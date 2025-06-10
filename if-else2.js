const fechaActual=new Date();
let diaSemana=fechaActual.getDay();
let horaActual=fechaActual.getHours();
let horaApertura;
let horaCierre=18;
let mensaje;
diaSemana=2;
horaActual=9;
console.log("fecha y hora actual: ", fechaActual);
console.log("dia actual: ", diaSemana);
console.log("hora actual: ", horaActual);
if(diaSemana==0||diaSemana==6){
    console.log("Abierto de 9:00 a 18:00");
   horaApertura=9;
}
else{
    console.log("Abierto de 11:00 a 18:00");
    horaApertura=11;
}
if (horaActual >= horaApertura){
    console.log(mensaje = "¡Bienvenido! Nuestra tienda esta abierta.");
} else{
    console.log( mensaje = `Lo sentimos, nuestra tienda esta cerrada en este momento.
    abrimos a las ${horaApertura} horas.`);
}





