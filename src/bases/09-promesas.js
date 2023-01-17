import { getHereobyId } from "./08-imp-exp-func";


const getHereoByIdAsync = (id) => {
  return new  Promise( (resolve, reject) => {
        setTimeout(() => {
            const heroe = getHereobyId(id);


            heroe ? resolve(heroe)
            : reject( 'No se encontro el hereo' );
    
        }, 2000);
    });
};



getHereoByIdAsync(50)
.then( console.log )
.catch( console.warn );

