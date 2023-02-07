/*
* Declaração explícita
let nome:string = "Carlos Eduardo";
*/

/*
* Inferência de tipos no TypeScript
*/
let nome = "Carlos Eduardo";

// nome = 90; // o tipo number não pode ser atribuído ao tipo string

/*
* TypeScript infere o tipo de uma variável em base do tipo de conteúdo que foi declarado.
* Obs: isso não é uma boa prática uma vez que TypeScript deva ser utilizado para facilitar
* ao desenvolvedor a vizualização de cada tipo de variável.
*/