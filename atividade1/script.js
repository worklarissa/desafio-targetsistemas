/*int INDICE = 13, SOMA = 0, K = 0;

enquanto K < INDICE faça

{

K = K + 1;

SOMA = SOMA + K;

}

imprimir(SOMA);*/


/*let indice = 13;
var soma = 0;

function  contador(indice, soma) {

for(let k=0; k<indice; k++){
    let soma1 = soma + k;
    console.log(soma1)
}
}
contador();*/

let indice = 13;
let soma = 0;
let k = 0;

do{
     k = k + 1;
     soma = soma + k;
     console.log(soma)
}while(k < indice)
