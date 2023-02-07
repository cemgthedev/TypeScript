
/*
* Ao deixar o mouse sobre os parâmetros da função aparecerá um aviso recomentando a tipagem dos mesmos
* . Iste é um recurso do TypeScript adicionando tipagem ao JavaScript.
*/
/*
function badSoma(a, b) {
    return a + b;
}
*/

/*
* a função badSoma não apresenta erros de sintaxe, mas possui erros de lógica:
*/
//console.log(`Concatenou 1 e 2: ${badSoma('1', '2')}`);

//console.log(`Somou 1 e 2: ${badSoma(1, 2)}`);

/*
* Errado!!!... a função soma deveria apenas somar dois números e não concatená-los.
* Utilizando TypeScript podemos adicionar tipagem aos parâmetros de uma função
*/
function goodSoma(a: number, b: number) {
    return a + b;
}

/*
* Agora o tipo dos parâmetros passados será verificado antes mesmo da compilação
*/
// goodSoma(1, 2);     // nenhuma mensagem

// goodSoma('1', '2'); // mensagem: o tipo string não é atribuível ao parâmetro do tipo number