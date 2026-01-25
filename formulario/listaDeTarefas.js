const criarTarefa = (evento) => {
    evento.preventDefault() // previne o comportamento padrão do botão (submissão do formulário)
    
    const lista = document.querySelector('[data-list]') // seleciona a lista de tarefas
    const input = document.querySelector('[data-form-input]') // seleciona o campo de entrada de texto
    const valor = input.value // obtém o valor digitado no campo de entrada

    const tarefa = document.createElement('li') // cria um novo elemento <li>
    tarefa.classList.add('task') // atribui a classe 'task' ao novo elemento <li>
    const conteudo = `<p class="content"> ${valor}</p>` // cria uma string vazia para o conteúdo da nova tarefa

    tarefa.innerHTML = conteudo // define o conteúdo HTML do novo elemento <li>
    
    lista.appendChild(tarefa) // adiciona o novo elemento <li> à lista de tarefas
    input.value = '' // limpa o campo de entrada após adicionar a tarefa
}

const novaTarefa = document.querySelector('[data-form-button]') // seleciona o botão de adicionar nova tarefa

novaTarefa.addEventListener('click', (evento) => { // adiciona um ouvinte de evento de clique ao botão
    criarTarefa(evento)}) // chama a função criarTarefa quando o botão é clicado