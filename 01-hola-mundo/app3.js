/**
 * Ciclo de eventos de NodeJS
 */

console.log('Inicio del programa');

setTimeout(function() {

    console.log('Primer Timeout');

}, 3000); //3segundos

setTimeout(function() {

    console.log('Segundo Timeout');

}, 0); //0segundos

setTimeout(function() {

    console.log('Tercer Timeout');

}, 0); //0segundos

console.log('Fin del programa');