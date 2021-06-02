// let numeros = [5,4,3,2,1]

// const resultado = numeros.reduce((acumulador,item) => {
//     return acumulador = acumulador + item
// },10);

// console.log(resultado)

//exemplo string
// let nomes = ["Jessica","Diego","Yasmin","Jeff"]

// const res = nomes.reduce((acumulador,item) => {
//     return acumulador = acumulador + item
// });

// console.log(res)

let numeros = [2,2,6,5,4,3]
// faz a operação acumulando o valor no atual e usando com o próximo valor
let res = numeros.reduce((atual,proximo) =>{
    return atual = atual * proximo
});

// console.log(res)

// exemplo função anônima, let mostrarfuncao = function(){}
//faz a execução sem nenhum retorno
function mostrarNumero(numero){
    // console.log("numero é igual a", numero)

}

// numeros.forEach(mostrarNumero)

let num = [3,2,4] 

let numero = num.map((item,index) => {
    if(item > 2){
        return item + 1
    }
    return item
});

console.log(numero)

