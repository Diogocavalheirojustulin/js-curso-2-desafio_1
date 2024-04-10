let titulo = document.querySelector('h1');
titulo.innerHTML = "Hora do desafio";

function verificarConsole(){
    console.log("O Botão foi clicado");
}

function verificarAlert(){
    alert ("Eu amo o JS.");
}

function verificarPrompt(){
    let cidade = prompt ("Insira o nome de uma cidade do Brasil.");
    alert (`Estive em ${cidade} em lembrei de você.`);
}

function verificarSoma(){
    let numero1 = parseInt (prompt("Informe um número inteiro."));
    let numero2 = parseInt (prompt("Informe outro número inteiro."));
    let resultado = numero1 + numero2
    alert (`O resultado da soma dos dois números é ${resultado}.`);
}