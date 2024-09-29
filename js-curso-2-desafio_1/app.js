//Desafio 1:
// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Hora do Desafio.'

// function verificarConsole() {
//     console.log('O botão foi clicado');
// }

// function verificarAlert() {
//     alert('Eu amo JS');
// }

// function verificarPrompt() {
//     let nomeCidade = prompt('Informe o nome de uma cidade do Brasil');
//     alert(`Estive em ${nomeCidade} e lembrei de você.`);
// }

// function verificarSoma() {
//     let nr1 = parseInt(prompt('Informe o 1º nr:'));
//     let nr2 = parseInt(prompt('Informe o 2º nr:'));
//     let soma = nr1 + nr2;
//     alert(`A soma de ${nr1} + ${nr2} é igual a ${soma}`)
// }

//Desafio 2
function olaMundo(){
    console.log('Olá mundo');
}
olaMundo();

function olaUsuario(nome) {
    console.log(`Olá, ${nome}`);
}

olaUsuario('David');

function dobroNr(nr){
    let dobro = parseInt(nr)*2;
    return dobro;
}

console.log(dobroNr(5));

function calcularMedia(nr1, nr2, nr3){
    let media = (parseInt(nr1) + parseInt(nr2) + parseInt(nr3)) / 3;
    return media;
}
console.log(calcularMedia(5,6,7));

function encontraNrMaior(nr1, nr2){
    return nr1 > nr2 ? nr1 : nr2;
}
console.log(encontraNrMaior(5,6));


function quadrado(nr){
    return nr * nr;
}
console.log(quadrado(5));