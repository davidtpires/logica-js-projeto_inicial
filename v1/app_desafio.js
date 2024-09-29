console.log("Boa-vindas!");
let nome = 'David';
console.log(`Olá ${nome}`);
alert(`Olá ${nome}`);

let linguagem = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(`A linguagem que o ${nome} é a ${linguagem}.`);

let valor1 = 25;
let valor2 = 35;
let resultado = valor1 + valor2;

console.log( `A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
resultado = valor1 - valor2;
console.log( `A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt('Informe sua idade:');
let maiorIdade = idade >= 18 ? 'maior' : "menor";
console.log(`${nome} é ${maiorIdade} de idade`);

let numero = prompt('Informe um numero');
if (numero > 0) {
        console.log(`O número ${numero} é positivo`);
} else {
        console.log(`O número ${numero} é negativo`); 
}

let contador = 0;
while (contador < 10){
        contador++;
        console.log(`${contador}`);
}

let nota = 6;
if (nota >= 7) {
        console.log("Aprovado");
}else {
        console.log("Reprovado");
}

console.log(Math.random());
console.log(parseInt(Math.random() * 10 + 1));
console.log(parseInt(Math.random() * 1000 + 1));