// Desestructuracion
// Asignar Desestructrurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IroMan',
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);


const userContext = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
    // console.log( nombre, edad, rango );

    return {
        nombreClave: clave,
        anios: edad,
        latlag: {
            lat: 1568411,
            lng: 984156178,
        }
    }
};

const { nombreClave, anios, latlag:{ lat, lng} } = userContext(persona);

console.log( nombreClave, anios );
console.log( lat, lng );