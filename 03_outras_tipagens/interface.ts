/*
* Podemos utilizar interface na definição de tipos
*/
interface Point {
    x: number,
    y: number
}

function heigthLine(point: Point) {
    return Math.abs(point.x - point.y);
}