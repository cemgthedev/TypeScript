/*
* Asserção de tipo é um recurso utilizado quando se quer definir um padrão para objetos
*/
type UserType = {
    id: number | string;
    name: string;
}

let newUser = {} as UserType; // o objeto newUser foi definido como UserType

type AnimalType = {
    specie: string;
    years: number;
}

let newAnimal = {specie: 'felinus aracnid', years: 13};
/*
* let newUser = newAnimal as UserType;
* Ao passar um objeto que não possue o padrão definido para UserType ocorre um erro:
*     O tipo '{ specie: string; years: number; }' não tem as propriedades a seguir do tipo 'UserType': id, name
*/

function showAnimalInformations(animal: AnimalType) {
    console.log(`The animal is of the specie ${animal.specie} and have ${animal.years} years old`);
}

showAnimalInformations({ specie: 'homo sapiens', years: 21 });
