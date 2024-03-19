//Descubra a lógica e complete o próximo elemento

//a) 1, 3, 5, 7, ___
let listaImpares = [];

for(let i = 1; i < 20; i++){
    if(i % 2 === 1){
        listaImpares.push(i);
    }
}

console.log(listaImpares)

//b) 2, 4, 8, 16, 32, 64, ____
//entendi que os números estão sendo multiplicados por dois
let listaVezes = [2, 4, 8, 16, 32, 64];
 
let multiplica = listaVezes[listaVezes.length-1] * 2
listaVezes.push(multiplica)

//console.log(listaVezes)



//c) 0, 1, 4, 9, 16, 25, 36, ____
let listaSomaImpares = [0, 1, 4, 9, 16, 25,36]
//somar o valores correspondentes ao indices nas listas listaSomaImpares e listaImpares 
const somando = [];

for (let i = 0; i < listaSomaImpares.length; i++) {
        somando.push(listaSomaImpares[i] + listaImpares[i]);
    }

console.log(somando)

//d) 4, 16, 36, 64, ____

//e) 1, 1, 2, 3, 5, 8, ____
var fibonnaci = [0, 1]

while (fibonnaci.length < 100) {
   let ultimoNumero = fibonnaci[fibonnaci.length -1]
   let penultimoNumero = fibonnaci[fibonnaci.length-2]
   let addNumero = ultimoNumero + penultimoNumero
    fibonnaci.push(addNumero)

}

//console.log(fibonnaci)


//f) 2,10, 12, 16, 17, 18, 19, ____