function saludar(){
    console.log("Hola, desde la funcion saludar");
}
saludar();

function sumar(a,b){
    return a+b;
}
const total=sumar(10,20);
console.log("total:",total);

const mostrarFecha=function(){
    let fecha=new Date();
    console.log("Fecha: ", fecha);
}
mostrarFecha();
const multiplicar= function(a,b){
    return a*b;
}
const resultado= multiplicar(10,20);
console.log("Resultado: ", resultado);

//funciones 
const decirAdios=()=>{
    console.log("Hasta el martes Profe");
}
decirAdios();

const dividir =(a,b)=>{
    if(b===0){
        return "no se puede dividir entre cero";
    }
    return a/b;
}
const resultadoDivision= dividir(10,2);
console.log("Resultado de Division: ",resultadoDivision);