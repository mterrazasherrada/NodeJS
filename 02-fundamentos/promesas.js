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
let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleadoDB = empleado.find(empleado => {
            return empleado.id === id;
        })

        if (!empleadoDB) {
            reject(`No existe un empleado con el ID ${id}`)
        } else {
            resolve(empleadoDB);
        }
    });

}

/* getEmpleado(30).then(empleado => {
    console.log('Empleado de BD', empleado);
}, (err) => {
    console.log(err);
}); */


//Funcion para obtener el salario por empleados
let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {
        let salarioDB = salarios.find(salario => {
            return salario.id === empleado.id;
        })

        if (!salarioDB) {
            reject(`No existe salarario para el empleado ${empleado.nombre}`)
        } else {
            resolve({
                id: empleado.id,
                nombre: empleado.nombre,
                salario: salarioDB.salario
            });
        }
    });

}

/* getEmpleado(3).then(empleado => {
    getSalario(empleado).then(respuesta => {
        console.log(`El salario del empleado ${respuesta.id}, ${respuesta.nombre} es ${respuesta.salario}Bs`);
    }, (err) => {
        console.log(err);
    });
}, (err) => {
    console.log(err);
}); */

getEmpleado(1).then(empleado => {

        return getSalario(empleado);

    })
    .then(respuesta => {
        console.log(`El salario de ${respuesta.nombre} es ${respuesta.salario}Bs`);
    })
    .catch(err => {
        console.log(err);
    });