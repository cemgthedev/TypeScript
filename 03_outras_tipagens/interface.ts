/*
* Podemos utilizar interface na definição de tipos
*/
interface IUser {
    id: number | string,
    name: string
}

interface IPayment {
    method: string
}

interface IAccount extends IUser, IPayment {}; // interseção de tipos para interfaces

let newAccount: IAccount = {
    id: 1,
    name: 'luquinhascds',
    method: 'pix'
}

interface Image {
    imageUrl: string,
    className?: string
}

interface Text {
   label: string,
   className?: string
}

interface Card extends Image, Text {};
