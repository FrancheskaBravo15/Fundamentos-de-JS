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
