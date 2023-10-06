function mostrarDados(data) {
    const dados = document.getElementById('main-cep');

    dados.innerHTML =  `<p>Bairro: ${data.bairro}</p>
                        <p>Complemento: ${data.complemento}</p>
                        <p>DDD: ${data.ddd}</p>
                        <p>IBGE: ${data.ibge}</p>
                        <p>Localidade: ${data.localidade}</p>
                        <p>Logradouro: ${data.logradouro}</p>
                        <p>Uf: ${data.uf}</p>`;
}


function consultarCep() {
    const cep = document.getElementById('cep').value;
    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro!!');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dados da API: ', data);
        mostrarDados(data);
    })
    .catch(error => {
        console.error('Error: ', error);
    })
}

function limparDados() {
    const dadosL = document.getElementById('cep');
    dadosL.value = ' ';
}

const btnconsulta = document.getElementById('btn-search')
const btnlimpar = document.getElementById('btn-limpar')

btnconsulta.addEventListener("click", consultarCep);
btnlimpar.addEventListener("click", limparDados);


