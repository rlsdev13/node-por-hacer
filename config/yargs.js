const descripcion = {
    demand: true,
    alias: 'd',
    type: 'string',
    desc: 'Descripcion de la tarea por hacer'

};

const completado = {
    demand: false,
    alias: 'c',
    type: 'boolean',
    desc: 'Estado de la tarea'
};



const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('listar', 'Lista las tareas guardadas', {
        completado
    })
    .command('borrar', 'Borra una tarea en especifico', {
        descripcion
    })
    .help('h')
    .argv;

module.exports = {
    argv
}