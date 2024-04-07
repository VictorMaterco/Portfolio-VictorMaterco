//Alerta de bem vindo para visitantes
/*alert('Bem vindo ao meu portfólio!')*/

//Criando Variavel para o botão
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
//Criando Variavel para buscar elementos com a classe 'projeto' sem a classe 'ativo'
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

//adicionando evento de click ao botão. Chamando funções que serão realizadas.
botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao(); 
});


//inserindo classe 'remover' ao botão para ativa o display none e eles desaparecer.
function esconderBotao() {
    botaoMostrarProjetos.classList.add('remover');
}

//Criando laço na variavel de projetos inativo e inserindo a classe 'ativo'  a cada elemento
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}
