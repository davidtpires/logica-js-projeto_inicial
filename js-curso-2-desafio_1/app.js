let titulo = document.querySelector('h1')
titulo.innerHTML = 'Hora do Desafio.'

function verificarConsole() {
    console.log('O botão foi clicado');
}

function verificarAlert() {
    alert('Eu amo JS');
}

function verificarPrompt() {
    let nomeCidade = prompt('Informe o nome de uma cidade do Brasil');
    alert(`Estive em ${nomeCidade} e lembrei de você.`);
}

function verificarSoma() {
    let nr1 = parseInt(prompt('Informe o 1º nr:'));
    let nr2 = parseInt(prompt('Informe o 2º nr:'));
    let soma = nr1 + nr2;
    alert(`A soma de ${nr1} + ${nr2} é igual a ${soma}`)
}