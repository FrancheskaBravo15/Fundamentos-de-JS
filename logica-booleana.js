console.log('Logica Booleana');
console.warn('AND &&');
console.log(true && true);//true
console.log(true&&false);
console.log(false&&true);
console.log(false&&false);

console.warn('OR ||');
console.log(true || true);
console.log(true||false);
console.log(false||true);
console.log(false||false); //false

console.warn('NOT !')
console.log(!true);
console.log(!false);

console.log(5>3&&3<2);

let marca = "pepito";
if(marca==="Apple"){
    console.log("el telefono es de Apple");
}else if(marca==="Samsung"){
    console.log("el telefono es de Samsung");
}else if(marca==="Xiaomi"){
    console.log("el telefono es de Xiaomi");
}else{
    console.log("el telefono es de otra marca");
}


let dia=3
if(dia===0){
    console.log("Domingo");
}else if(dia===1){
    console.log("Lunes");
}else if(dia===2){
    console.log("Martes");
    
}else if(dia===3){
    console.log("Miercoles");
}if(dia===4){
    console.log("Jueves");
}  if(dia===5){
    console.log("Viernes");
} if(dia===6){
    console.log("Sabado");
} else{
    console.log("Dia no valido");
}