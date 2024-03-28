'use strict';

const botaoTema = document.querySelector(".btn");

botaoTema.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');

    var nomeClasse = document.body.className;
    if (nomeClasse == "light-theme") {
        this.textContent = "Escuro";
    } else {
        this.textContent = "Claro";
    }
    console.log('nome da classe atual: ' + nomeClasse);
});
