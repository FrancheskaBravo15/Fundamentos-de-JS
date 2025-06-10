console.log("While");
let marcasCarros=['Ford','Toyota', 'Hyundai', 'Mazda','Suzuki'];
let i=0;
console.warn('--  WHILE --');
while (i<marcasCarros.length){
    console.log(marcasCarros[i]);
    i++;
}
console.warn('-- DO WHILE --');
let j=0;
do{
    console.log(marcasCarros [j]);
    j++;
    
} while(j< marcasCarros.length);
