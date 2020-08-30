//Requireds
const colors = require('colors');
const fs = require('fs'); //Libreria propia de Node, no hay que hacer nada mas
//  const fs = require('express');   //No viene con Node, es una paquete que se instala
//  const fs = require('./fs');      //Son archivos que nosotros mismos escribimos y que estan en el project


/*
Crear archivo
*/
let crearArchivo = (base, limite = 10) => {

        return new Promise((resolve, reject) => {

            if (!Number(base, limite)) { //no es un numero
                reject(`Introduzca un numero diferente a ${base}`);
                return;
            }

            let data = '';
            for (let i = 1; i <= limite; i++) {
                data += (`${base} * ${i} = ${i * base}\n `);
            }

            // const data = new Uint8Array(Buffer.from('Hola mundo'));
            fs.writeFile(`archivo/tabla-${base}.txt`, data, (err) => {

                if (err)
                    reject(err);

                else
                    resolve(`tabla-${base}.txt`);

            });
        });

    }
    /*
    Listar archivo
    */
let listarArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base, limite)) { //no es un numero
            reject(`Introduzca un numero diferente a ${base}`);
            return;
        }

        let data = '';
        console.log(`=====================`.green);
        console.log(`Tabla de ${base}`.green);
        console.log(`=====================`.green);
        for (let i = 1; i <= limite; i++) {

            console.log(`${base} * ${i} = ${i * base} `);
        }

    });

}


module.exports = {
    crearArchivo,
    listarArchivo
}