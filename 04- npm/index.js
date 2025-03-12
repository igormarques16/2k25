//codigo para executar meu projeto

//importa um modulo

import { calcularIMC, tabelaIMC } from "./CalculadoraIMC.js";

console.log(">>> Calculadora IMC <<<<")
console.table(tabelaIMC)

const peso = 80
const altura = 1.78

const resultado = calcularIMC(peso, altura)

console.log ("Resultado IMC:")
console.log (resultado.toFixed(2))
    

