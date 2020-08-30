const { config } = require('yargs');

const constante = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la table de multiplicar', constante)
    .command('crear', 'Crea un archivo txt con la table de multiplicar', constante)
    .help()
    .argv;

module.exports = {
    argv
}