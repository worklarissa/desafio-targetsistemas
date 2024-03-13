//Sequência de fibonnaci
var fibonnaci = [0, 1]

while (fibonnaci.length < 100) {
   let ultimoNumero = fibonnaci[fibonnaci.length -1]
   let penultimoNumero = fibonnaci[fibonnaci.length-2]
   let addNumero = ultimoNumero + penultimoNumero
    fibonnaci.push(addNumero)

}

//input de um número
let numero = prompt( "Digite um número entre 1 e 100: ");

//verificar se o número está na sequência de fibonnaci
function verificaNumero(numero, fibonnaci) {
    if (fibonnaci.includes(Number(numero))) {
        //retornar mensagem  para o usuário
        alert(`O número ${numero}, está na Sequência de Fibonnaci!`)
    }else{
        //retornar mensagem  para o usuário
        alert(`O número ${numero} não está na Sequência de Fibonnaci!`)
    }
}

verificaNumero(numero, fibonnaci)