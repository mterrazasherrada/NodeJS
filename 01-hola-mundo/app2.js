function saludar(nombre) {
    let mensaje = `Hola ${ nombre }`;

    return mensaje;
}

let saludo = saludar('Milton');

console.log(saludo);