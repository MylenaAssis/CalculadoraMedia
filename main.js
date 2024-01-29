const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji triste"/>'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultadoaprovado>Aprovado</span>';
const spanReprovado = '<span class="resultadoreprovado>Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"))


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal () {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? 'Aprovado' : 'Reprovado';
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i = 0; i< notas.length; i++) {
    somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}