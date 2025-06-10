let videoGames =['Fornite','Doom', 'Mario'];
console.log(videoGames);
console.log(videoGames[2]);
let arregloCosas=['Fornite',20, true,null, undefined, {nombre: 'Francheska Bravo'},[1,2,3] ]
console.log(arregloCosas[6][2]);
console.log(arregloCosas[5].nombre);
//length
console.log(arregloCosas.length);
let nuevoArregloCosas=arregloCosas.push('Libro');
console.log('Nuevo Arreglo de Cosas', nuevoArregloCosas);
console.log(arregloCosas);
const dias =["domingo","lunes","martes","miercoles","jueves",
"viernes","sabado","domingo"];
console.log(dias[1]|| "dia no valido"); 
console.log(dias[2]|| "dia no valido");
console.log(dias[4]|| "dia no valido");
console.log(dias[9]|| "dia no valido");