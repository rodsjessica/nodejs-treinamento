// MÓDULO CALCULADORA
// Criar um módulo (calculadora.js) para exportar uma biblioteca de funções para calculadora simples.
// Métodos:
// - somar(a, b): retorna a soma de a e b;
// - somarNumeros(...numeros): retorna a soma de todos os numeros informados;
// - subtrair(a, b): retorna a subtração de a e b;
// - subtrairNumeros(...numeros): retorna a subtração de todos os numeros informados;
// - multiplicar(a, b): retorna a multiplicação de a e b;
// - multiplicarNumeros(...numeros): retorna a multiplicação de todos os numeros informados;
// - dividir(a, b): retorna a divisão de a e b;
// - dividirNumeros(...numeros): retorna a divisão de todos os numeros informados;
// Importar o módulo em outro script (exemplo-calculadora.js) e fazer exemplos com as funções da calculadora.
// Dentro do diretorio 'exercicios', criar uma pasta '01-exercicio' e incluir
// alí a resolução do exercício. Fazer commit.

const calculadora = {
    somar(a,b){
        resultado = (a + b);
        return (resultado);
    },
    somarNumeros(...numeros){
        let resultado = 0;
        for (let i = 0; i < numeros.length; i++) {
            resultado = numeros[i] + resultado;
        }
        return(resultado)
    },
    subtrair(a,b){
        resultado = (a - b);
        return(resultado)
    },
    subtrairNumeros(...numeros){
        let resultado = numeros[0]
        for (let i = 1; i < numeros.length; i++) {
            resultado = resultado - numeros[i];
        }
        return resultado
    },
    multiplicar(a,b){
        resultado = (a * b);
        return(resultado)
    },
    multiplicarNumeros(...numeros){
        let resultado = numeros[0]
        for (let i = 1; i < numeros.length; i++) {
            resultado = resultado * numeros[i];
        }
        return resultado
    },
    dividir(a,b){
        resultado = (a / b);
        return(resultado)
    },
    dividirNumeros(...numeros){
        let resultado = numeros[0]
        for (let i = 1; i < numeros.length; i++) {
            resultado = resultado / numeros[i];
        }
        return resultado
    }

}

module.exports = calculadora