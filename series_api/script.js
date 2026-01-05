async function buscarSeries() {

    // Faz a requisição para a API de séries
    const response = await fetch(
        "https://api.tvmaze.com/shows"
    );

    // Os dados chegam aos poucos
    const reader = response.body.getReader();

    // Converte os dados recebidos (bytes) em texto
    const decoder = new TextDecoder("utf-8");

    // Variável para guardar todo o texto
    let texto = "";

    // Usada para saber quando terminou
    let terminou = false;

    // Enquanto ainda tiver dados chegando
    while (!terminou) {

        // Lê um pedaço da resposta
        const { value, done } = await reader.read();

        // Atualiza o controle
        terminou = done;

        // Se veio algum dado
        if (value) {

            // Converte o pedaço em texto
            // e junta com o texto anterior
            texto += decoder.decode(value, { stream: true });
        }
    }

    // Converte o texto final para JSON
    return JSON.parse(texto);
}
