type ObjectType = {
    name: string;
    widthInCm: number;
    heigthInCm: number;
    weigthInKg?: number;
}

/*
* Observe abaixo que o parâmetro weigthInKg se tornou opcional pelo uso de '?'.
*/
let newObject: ObjectType = {
    name: 'papel',
    widthInCm: 20,
    heigthInCm: 30
} 