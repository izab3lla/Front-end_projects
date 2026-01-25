//(() => { // Evita acesso a regras de negócio fora deste arquivo, como no inspecionar, fazendo o usuario apenas interagir

import BotaoConclui  from "./componentes/concluiTarefa.js" // importa a função BotaoConclui do arquivo concluiTarefa.js
import BotaoDeleta  from "./componentes/deletaTarefa.js" // importa a função BotaoDeleta do arquivo deletaTarefa.js

    const criarTarefa = (evento) => {
    evento.preventDefault() // previne o comportamento padrão do botão (submissão do formulário)
    
    const lista = document.querySelector('[data-list]') // seleciona a lista de tarefas
    const input = document.querySelector('[data-form-input]') // seleciona o campo de entrada de texto
    const valor = input.value // obtém o valor digitado no campo de entrada

    const tarefa = document.createElement('li') // cria um novo elemento <li>
    tarefa.classList.add('task') // atribui a classe 'task' ao novo elemento <li>
    const conteudo = `<p class="content"> ${valor}</p>` // cria uma string vazia para o conteúdo da nova tarefa

    tarefa.innerHTML = conteudo // define o conteúdo HTML do novo elemento <li>
    
    tarefa.appendChild(BotaoConclui()) // adiciona o botão de concluir à tarefa
    tarefa.appendChild(BotaoDeleta()) // adiciona o botão de deletar à tarefa
    lista.appendChild(tarefa) // adiciona o novo elemento <li> à lista de tarefas
    input.value = '' // limpa o campo de entrada após adicionar a tarefa
}

const novaTarefa = document.querySelector('[data-form-button]') // seleciona o botão de adicionar nova tarefa

novaTarefa.addEventListener('click', (evento) => { // adiciona um ouvinte de evento de clique ao botão
    criarTarefa(evento)}) // chama a função criarTarefa quando o botão é clicado

//})(); // IIFE (Immediately Invoked Function Expression) para evitar poluição do escopo global

// CORS é uma sigla para Cross-Origin Resource Sharing (Compartilhamento de Recursos entre Origem Cruzada).
//é um mecanismo que utiliza cabeçalhos HTTP adicionais para informar aos navegadores que permitam que uma aplicação web rodando em uma origem (domínio) tenha permissão para acessar recursos selecionados de uma origem diferente.