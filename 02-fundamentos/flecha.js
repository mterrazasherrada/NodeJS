/**
 * Función normal
 */
// function sumar(a, b) {
//     return a + b;
// }

// console.log(sumar(10, 20));

/**
 * Función flecha
 */

// let sumar = (a, b) => a + b;
// console.log(sumar(10, 20));

// function saludar() {
//     return 'Hola Mundo';
// }

// let saludar = () => 'Hola Mundo';

// let saludar = (nombre) => `Hola ${nombre}`;

// console.log(saludar('Milton'));


let deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
};


console.log(deadpool.getNombre());