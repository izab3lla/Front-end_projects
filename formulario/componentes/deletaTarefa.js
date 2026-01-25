
// Função para criar o botão de deletar //
const BotaoDeleta = () => {
    const botaoDeleta = document.createElement('button') // cria um novo elemento <button>

    botaoDeleta.innerText = 'Deletar' // define o texto do botão como 'Deletar'
    botaoDeleta.addEventListener('click', deletarTarefa) // adiciona um ouvinte de evento de clique ao botão
    return botaoDeleta // retorna o botão criado
}

// Função para deletar uma tarefa //
const deletarTarefa = (evento) => {
    const botaoDeleta = evento.target // obtém o botão que foi clicado
    const tarefaCompleta = botaoDeleta.parentElement // obtém o elemento pai do botão (a tarefa)

    tarefaCompleta.remove() // remove a tarefa da lista

    return botaoDeleta
}

export default BotaoDeleta; // exporta a função BotaoDeleta para ser usada em outros arquivos