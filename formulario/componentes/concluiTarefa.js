// Função para criar o botão de concluir //
const BotaoConclui = () => {
    const botaoConclui = document.createElement('button') // cria um novo elemento <button>

    botaoConclui.classList.add('check-button') // atribui a classe 'check-button' ao novo botão
    botaoConclui.innerText = 'Concluir' // define o texto do botão como 'Concluir'
    botaoConclui.addEventListener('click', concluirTarefa) // adiciona um ouvinte de evento de clique ao botão

    return botaoConclui // retorna o botão criado
}

// Função para concluir uma tarefa //
const concluirTarefa = (evento) => {
    const botaoConclui = evento.target // obtém o botão que foi clicado

    const tarefaCompleta = botaoConclui.parentElement // obtém o elemento pai do botão (a tarefa)

    tarefaCompleta.classList.toggle('done') // alterna a classe 'done' na tarefa
}

export default BotaoConclui; // exporta a função BotaoConclui para ser usada em outros arquivos, nesse caso vamos importar ela em listaDeTarefas.js
//onde estará ensapsulada dentro de uma IIFE