type Skills = {
    list: string[],
    numberOfSkills: number,
    totalPower: number
}

type Arm = {
    name: string,
    speed: number,
    agility: number
}

/*
* Podemos definir um objeto como sendo a junção de asserções de tipos definidas anteriormente em outros
* objetos
*/
type Avatar = Arm & Skills;

let playerZero: Avatar = {
    name: 'sword',
    speed: 300,
    agility: 5,
    list: ['cruel sun', 'thunder cut', 'divine teleport'],
    numberOfSkills: 3,
    totalPower: 12000
}