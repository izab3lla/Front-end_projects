const criarTarefa = (evento) => {
    evento.preventDefault() // previne o comportamento padrão do botão (submissão do formulário)
    const input = document.querySelector('[data-form-input]') // seleciona o campo de entrada de texto
    const valor = input.value // obtém o valor digitado no campo de entrada

    console.log( valor ) // exibe o valor no console
    input.value = '' // limpa o campo de entrada após adicionar a tarefa
}

const novaTarefa = document.querySelector('[data-form-button]') // seleciona o botão de adicionar nova tarefa

novaTarefa.addEventListener('click', (evento) => { // adiciona um ouvinte de evento de clique ao botão
    criarTarefa(evento)}) // chama a função criarTarefa quando o botão é clicado