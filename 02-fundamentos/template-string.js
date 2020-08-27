/**
 * Template String se utiliza para meter o inyectar variable o código JavaScript dentro de ellos
 */
let nombre = 'Deadpool';
let real = 'Wade Winston';

// console.log(nombre + ' ' + real);
// console.log(`${1 + 2}`);

// let nombreCompleto = nombre + ' ' + real;
// let nombreTemplate = `${nombre} ${real}`;

// console.log(nombreCompleto === nombreTemplate);

function getNombre() {
    return `${nombre} ${real}`;
}

console.log(`El nombre de: ${getNombre() }`);