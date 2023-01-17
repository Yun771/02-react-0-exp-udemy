import heroes/* , { owners } */  from '../data/heroes'


export const getHereobyId = (id) =>  heroes.find((e) => e.id === id);


// console.log( getHereobyId(1) );

export const getHereoByOwner = (owner) => heroes.filter((e) => e.owner === owner);


// console.log( getHereoByOwner('DC') );

// console.log( owners );

