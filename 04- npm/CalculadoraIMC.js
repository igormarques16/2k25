//Criando um modulo do meu projeto
//exporta as funcionalidades desse modulo

export function calcularIMC(peso, altura){
    return peso / (altura * altura)  
}

export const tabelaIMC = [
    {limite: 18.5 , classificacao : "Magreza"},
    {limite: 24.9 , classificacao : "Normal"},
    {limite: 88.5 , classificacao : "Sobrepreso"},
    {limite: 16.5 , classificacao : "Obesidade grau1"},
    {limite: 28.9 , classificacao : "Obesidade grau2"},
    {limite: 40.0 , classificacao : "Obesidade grau3"},
]

    
