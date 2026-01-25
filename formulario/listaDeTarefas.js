const novaTarefa = document.querySelector('[data-form-button]') // seleciona o botão de adicionar nova tarefa

novaTarefa.addEventListener('click', () => { // adiciona um ouvinte de evento de clique ao botão
    const input = document.querySelector('[data-form-input]') // seleciona o campo de entrada de texto
    const valor = input.value // obtém o valor digitado no campo de entrada
    console.log( valor ) // exibe o valor no console
})