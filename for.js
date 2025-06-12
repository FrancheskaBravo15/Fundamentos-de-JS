console.warn("-- For tradicional --");
let marcasCelulares=['Samsung','Apple', 'Xiaomi', 'Infinix','Nokia'];
for(let i=0; i<marcasCelulares.length; i++){
    console.log(marcasCelulares[i]);
}

//for in 
console.warn("-- For in --");
for(let i in marcasCelulares){
    console.log(marcasCelulares[i]);
}

//for of
console.warn("-- For of --");
for(let marcaCelular of marcasCelulares){
    console.log(marcaCelular);
}

//forEach
console.warn("-- ForEach");
marcasCelulares.forEach(function(marcaCelular, index){
console.log(`${index}-${marcaCelular}`);
});

console.warn("-- forEach simple --");
marcasCelulares.forEach(()=>{
    console.log("Hola mundo");
});

