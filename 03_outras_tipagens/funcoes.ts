function showMessage(msg:string):string {
    return msg;
}

// Obs: TypeScript infere o "tipo" void quando nada é declarado
function withoutReturn(nCars:number) {
    console.log(`You Have ${nCars} cars`);
}

// Obs: sendo a função de tipo de retorno void nenhum valor de outro tipo pode ser retornado