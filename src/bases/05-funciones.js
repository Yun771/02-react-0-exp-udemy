// ffunciones en js

const saludar = function( nombre ) {
    return `Hola, ${ nombre }`;
}

const saludar2 = (nombre) =>{
    return `Hola, ${ nombre }`;
    };


const saludar3 = (nombre) => `Hola, ${ nombre }`;

console.log( saludar2('Geralt') );


const getUser  = () => 
    ({
        uid: 'ASDASDASD',
        userName: 'EVe91',
    });


    const user = getUser();

function getUsuariActivo( nombre ) {
    return {
        uid: 'ASDASDASD',
        userName: nombre,
    };
}

const getUsuariActivo2 = ( nombre ) =>
( {
        uid: 'ASDASDASD',
        userName: nombre,
    });



const usuarioActivo = getUsuariActivo('Ever');
const usuarioActivo2 = getUsuariActivo2('Ever');

// console.log(usuarioActivo);
console.log(usuarioActivo2);