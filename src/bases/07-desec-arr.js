const personajes = ['Goku','Vegeta', 'Trunks'];

const [ , , p3 ] = personajes;

console.log( p3 );

const retornaArreglo = () => {
    return ['ABCE', 123]
};

const [ letras , numeros ] = retornaArreglo();

console.log( letras, numeros );

const tarea = (valor) => {
    return [valor, () => {console.log('Hola Mundo')}]
};

const [ nombre, setNombre ] = tarea('goku');

console.log(nombre);
setNombre();