import { converterParaSegundos } from "../service/converterTempo.js";
import { musica } from "../util/dados.js";
export function criaListaPessoas() {
    const td = document.getElementById('tbody');
    musica.pessoas.forEach((pessoa) => {
        td ? td.innerHTML += adicionaHtml(pessoa) : null;
    });
}
export function atualizarPessoas() {
    musica.pessoas.forEach((pessoa, index) => {
        const tr = document.getElementById('pessoa' + (index + 1));
        tr ? tr.innerHTML = adicionaHtml(pessoa) : null;
    });
}
export function alteraTempo() {
    const element = document.getElementById(`tempo${musica.pessoaCantando.id}`);
    if (element !== null) {
        element.innerText = converterParaSegundos(musica.pessoaCantando.tempo.toString());
    }
}
function adicionaHtml(pessoa) {
    return `
    <div class="linha" id="pessoa${pessoa.posicao}">
        <td>
            <img class="foto" src="../img/${pessoa.nome}.jpeg">
        </td>
        <td>
            <div class="item">
                <div>${pessoa.nome}</div>
                <div class="tempo" id="tempo${pessoa.id}">${pessoa.tempo}.0</div>
            </div>
        </td>
    </div>
    `;
}
