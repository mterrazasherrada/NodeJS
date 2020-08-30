//Simular MiniBase de Datos

let empleado = [{
    id: 1,
    nombre: 'Milton'
}, {
    id: 2,
    nombre: 'Melissa'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}]

//Funcion para obtener empleados por ID
let getEmpleado = (id, callback) => {

    let empleadoDB = empleado.find(empleado => {
        return empleado.id === id;
    })

    if (!empleadoDB) {
        callback(`No existe un empleado con el ID ${id}`)
    } else {
        callback(null, empleadoDB);
    }

    // console.log(empleadoDB);
}

/* getEmpleado(1, (err, empleado) => {

    if (err) {
        return console.log(err);
    }
    console.log(empleado);
}); */


//Funcion para obtener el salario por empleados
let getSalario = (empleado, callback) => {

    let salarioDB = salarios.find(salario => {
        return salario.id === empleado.id;
    })

    if (!salarioDB) {
        callback(`No existe salarario para el empleado ${empleado.nombre}`)
    } else {
        callback(null, {
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }
}

getEmpleado(3, (err, empleado) => {

    if (err) {
        return console.log(err);
    }

    getSalario(empleado, (err, respuesta) => {

        if (err) {
            return console.log(err);
        };
        console.log(`El salario de ${respuesta.id}, ${respuesta.nombre} es de ${respuesta.salario}Bs`);
    });
});