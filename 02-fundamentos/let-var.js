/* 1.- Var
    Me mostraría la última variable que declaré, en este caso Milton5
*/

// var nombre = 'Milton';

// if (true) {
//     var nombre = 'Magneto';
// }
// var nombre = 'Milton1';
// var nombre = 'Milton2';
// var nombre = 'Milton3';
// var nombre = 'Milton4';
// var nombre = 'Milton5';

// console.log(nombre);

/* 2.- Let
    No me deja declarar varias veces la misma variable.

    En el ejemplo me muestra Wolverine, porque está en otro marco diferente al de magento; aunque 
    se llamen igual apuntan a lugares diferentes de memoria
*/

let nombre = 'Wolverine';

if (true) {
    let nombre = 'Magento';
}

console.log(nombre);

// *-* En el siguiente ejemplo let sólo se usa dentro del for. Por eso es que la i siguiente da error
for (let i = 0; i <= 5; i++) {
    console.log(`i: ${i}`);
}

console.log(i);