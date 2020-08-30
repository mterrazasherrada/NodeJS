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
// let getEmpleado = (id) => {

//     return new Promise((resolve, reject) => {

//         let empleadoDB = empleado.find(empleado => {
//             return empleado.id === id;
//         })

//         if (!empleadoDB) {
//             reject(`No existe un empleado con el ID ${id}`)
//         } else {
//             resolve(empleadoDB);
//         }
//     });

// }


// //Funcion para obtener el salario por empleados
// let getSalario = (empleado) => {

//     return new Promise((resolve, reject) => {
//         let salarioDB = salarios.find(salario => {
//             return salario.id === empleado.id;
//         })

//         if (!salarioDB) {
//             reject(`No existe salarario para el empleado ${empleado.nombre}`)
//         } else {
//             resolve({
//                 id: empleado.id,
//                 nombre: empleado.nombre,
//                 salario: salarioDB.salario
//             });
//         }
//     });

// }



/* 
Transformando todo lo anterior con async y await:
 */

//Funcion para obtener empleados por ID
let getEmpleado = async(id) => {

    let empleadoDB = empleado.find(empleado => {
        return empleado.id === id;
    })

    if (!empleadoDB) {
        throw new Error(`No existe un empleado con el ID ${id}`)
    } else {
        return (empleadoDB);
    }

}


//Funcion para obtener el salario por empleados
let getSalario = async(empleado) => {

    let salarioDB = salarios.find(salario => {
        return salario.id === empleado.id;
    })

    if (!salarioDB) {
        throw new Error(`No existe salarario para el empleado ${empleado.nombre}`)
    } else {
        return ({
            id: empleado.id,
            nombre: empleado.nombre,
            salario: salarioDB.salario
        });
    }

}

//Utilizando Async y Await
let getInformacion = async(id) => {

    let empleado = await getEmpleado(id);
    let respuesta = await getSalario(empleado);

    return `El salario de ${respuesta.id}, ${respuesta.nombre} es ${respuesta.salario}Bs`;
}

//Mostrar 
getInformacion(2)
    .then(mensaje => console.log(mensaje))
    .catch(err => console.log(err));