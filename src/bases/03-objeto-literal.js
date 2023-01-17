const persona  = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 97815478,
        lat: 14804804,
        lng: 87487488,
    }
};


const persona2 = { ...persona };

persona2.nombre = 'Peter'

console.log( persona );
console.log( persona2 );