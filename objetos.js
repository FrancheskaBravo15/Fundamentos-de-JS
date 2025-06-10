let marcaCelulares={
    primera: 'Samsung',
    sgunda: 'Apple',
    tercera: 'Huawei'
}
marcaCelulares.cuarta='Xiaomi';
marcaCelulares['quinta']= 'Motorola';
//console.log(marcaCelulares);
//recorrer todas las claves y valores del objeto
for(let key in marcaCelulares){
   //console.log(key+':' +' '+ marcaCelulares[key]);
    
}
//
let arregloMarcasCelulares= Object.entries(marcaCelulares);
console.log(arregloMarcasCelulares);
let arreglo2MarcasCelulares=Object.values(marcaCelulares);
console.log(arreglo2MarcasCelulares);
const dias ={
    0: "lunes",
   1:  "martes",
   3: "miercoles",
   4: "jueves",
   5:  "viernes",
   6: "sabado",
   7: "domingo",
   
   };
   
   console.log(dias[1]|| "dia no valido"); 
   console.log(dias[2]|| "dia no valido");
   console.log(dias[4]|| "dia no valido");
   console.log(dias[9]|| "dia no valido");