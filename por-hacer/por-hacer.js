const fs = require('fs');


let listadoPorHacer = [];

const guardarDb = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err)
            throw new Error('Error ', err);
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
}

const crear = descripcion => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);

    guardarDb();

    return porHacer;
}

/*const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}*/

const getListado = (completado) => {
    cargarDB();
    if (completado === undefined) {
        return listadoPorHacer;
    } else {
        let newArray = listadoPorHacer.filter(comp => comp.completado === completado);
        return newArray;
    }
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDb();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();

    let newArray = listadoPorHacer.filter(e => e.descripcion !== descripcion);

    if (listadoPorHacer.length === newArray.length) {
        return false;
    } else {
        listadoPorHacer = newArray;
        guardarDb();
        return true;
    }
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}