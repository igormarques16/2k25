//01
/*
const readline = require('readline');


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function manipularString(s, letraAntiga, letraNova) {
  
  const maiusculas = s.toUpperCase();
  console.log("Maiúsculas:", maiusculas);

  9999
  const minusculas = s.toLowerCase();
  console.log("Minúsculas:", minusculas);

  
  const invertida = s.split('').reverse().join('');
  console.log("Invertida:", invertida);

  
  const substituida = s.split(letraAntiga).join(letraNova);
  console.log(`Substituída (${letraAntiga} -> ${letraNova}):`, substituida);
}


rl.question("Digite uma string: ", (texto) => {
  rl.question("Digite a letra a ser substituída: ", (letraAntiga) => {
    rl.question("Digite a nova letra: ", (letraNova) => {
      manipularString(texto, letraAntiga, letraNova);
      rl.close(); 
    });
  });
});
*/
//2


/*
function realizarOperacoes(num1, num2) {
    
    let soma = num1 + num2;
    console.log(`Soma: ${num1} + ${num2} = ${soma}`);
  
    let subtracao = num1 - num2;
    console.log(`Subtração: ${num1} - ${num2} = ${subtracao}`);
  
    let multiplicacao = num1 * num2;
    console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicacao}`);
  
    if (num2 !== 0) {  
      let divisao = num1 / num2;
      console.log(`Divisão: ${num1} / ${num2} = ${divisao}`);
    } else {
      console.log("Divisão: Não é possível dividir por zero.");
    }
  
    let maiorQue = num1 > num2;
    console.log(`O primeiro número (${num1}) é maior que o segundo (${num2})? ${maiorQue}`);
  }
  
  realizarOperacoes(15, 5);
  */




  //03


/*
  function verificarIdade(idade) {
    
    if (idade < 18) {
      console.log("A pessoa é menor de idade.");
    } 
    
    else if (idade >= 18 && idade < 65) {
      console.log("A pessoa é maior de idade.");
    } 
   
    else if (idade >= 65) {
      console.log("A pessoa é idosa.");
    }
  }
  
  // Testando com a idade 70
  verificarIdade(70);
  /*


 
}

//04




for (let i = 1; i <= 100; i++) {
    console.log(i);
  }

  

 //05


 function calcularValores(numero) {
    
    let dobro = numero * 2;
  
    let triplo = numero * 3;
  
    let quadrado = numero * numero;
  
    return {
      dobro: dobro,
      triplo: triplo,
      quadrado: quadrado
    };
  }
 
  let resultado = calcularValores(5); 
  console.log(`O dobro de 5 é: ${resultado.dobro}`);
  console.log(`O triplo de 5 é: ${resultado.triplo}`);
  console.log(`O quadrado de 5 é: ${resultado.quadrado}`);
 

  // Exercicio 06

function manipularArray(arr) {
    // 1. Adicionar um número ao final
    arr.push(60);
    console.log("Array após adicionar: " + arr);
    
    // 2. Remover o primeiro número
    arr.shift();
    console.log("Array após remover o primeiro número: " + arr);
    
    // 3. Encontrar o maior número
    console.log("Maior número: " + Math.max(...arr));
    
    // 4. Encontrar o menor número
    console.log("Menor número: " + Math.min(...arr));
}

manipularArray([10, 20, 30, 40, 50]);

 
// Exercicio 07

function manipularStringsArray(arr) {
    // 1. Converte todas as strings para maiúsculas
    let maiusculas = arr.map(str => str.toUpperCase());
    console.log("Maiúsculas: " + maiusculas);

    // 2. Filtra as strings que começam com 'A'
    let comA = arr.filter(str => str[0].toUpperCase() === 'A');
    console.log("Strings que começam com 'A': " + comA);

    // 3. Cria um novo array com o comprimento de cada string
    let comprimentos = arr.map(str => str.length);
    console.log("Comprimentos das strings: " + comprimentos);
}

manipularStringsArray(["Maçã", "Banana", "Abacaxi", "Laranja"]);



// Exercicio 08

function manipularObjeto(obj) {
    // 1. Adicionar uma nova propriedade ao objeto
    obj.profissao = "Desenvolvedor";
    console.log("Objeto após adicionar profissão: ", obj);
    
    // 2. Remover uma propriedade do objeto
    delete obj.idade;
    console.log("Objeto após remover idade: ", obj);
    
    // 3. Listar todas as propriedades do objeto
    console.log("Propriedades do objeto: ", Object.keys(obj));
}

manipularObjeto({ nome: "Carlos", idade: 28, cidade: "São Paulo" });


// Exercicio 09

function desestruturarObjeto(livro) {
    // 1. Desestruturar o título e o autor do objeto
    const { titulo, autor } = livro;
    console.log("titulo: " + titulo + ", Autor: " + autor);

    // 2. Criar uma função que receba o objeto e retorne uma string com o título e o autor
    function obterInformacoes(livro) {
        return `O título do livro é "${livro.titulo}" e o autor é ${livro.autor}.`;


    }
    console.log(obterInformacoes(livro));
}

desestruturarObjeto({ titulo: "O Senhor dos Anéis", autor: "J.R. Tolkien", ano: 1954 });
  */