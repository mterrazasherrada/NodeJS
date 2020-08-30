const { argv } = require('./config/yargs.js');
const colors = require('colors/safe');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado`, colors.green(archivo)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}


// let base = '5';


// console.log(argv);