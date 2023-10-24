// capturando os elementos para fazer o direcionamento
var linkJava = document.querySelector('#link-java');
var linkPython = document.querySelector('#link-python');
var linkJs = document.querySelector('#link-js');

// códigos para direcionar o usuario para os projetos
linkJava.addEventListener('click', () => {
    window.open('https://github.com/CarlosBizzotto/cofrinho-java');
});

linkPython.addEventListener('click', () => {
    window.open('https://github.com/CarlosBizzotto/controle-estoque-python');
});

linkJs.addEventListener('click', () => {
    window.open('https://github.com/CarlosBizzotto/jogo-da-velha');
});

