import { converterParaSegundos } from "../service/converterTempo.js";
import { pessoas } from "../util/dados.js";
export function criaListaPessoas() {
    const td = document.getElementById('tbody');
    pessoas.forEach((pessoa) => {
        td ? td.innerHTML += adicionaHtml(pessoa) : null;
    });
}
// export function atualizarPessoas(): void {
//     pessoas.forEach((pessoa: Pessoa, index: number) => {
//         const tr = document.getElementById('pessoa' + (index + 1) );
//         tr?tr.innerHTML = adicionaHtml(pessoa):null;
//     });
// }
function adicionaHtml(pessoa) {
    return `
    <div class="linha" id="pessoa${pessoa.posicao}">
        ` + adicionaPessoa(pessoa) + `
    </div>
    `;
}
export function atualizarPessoaSubindo(pessoa) {
    const tr = document.getElementById('pessoa' + (pessoa.posicaoAnimacao - 1));
    tr ? tr.innerHTML = adicionaPessoa(pessoa) : null;
}
export function atualizarPessoaDescendo(pessoa) {
    const tr = document.getElementById('pessoa' + (pessoa.posicaoAnimacao + 1));
    tr ? tr.innerHTML = adicionaPessoa(pessoa) : null;
}
function adicionaPessoa(pessoa) {
    return `
        <td>
            <img id="img${pessoa.id}" class="foto" src="../img/${pessoa.nome}.jpeg">
        </td>
        <td>
            <div class="item">
                <div>${pessoa.nome}</div>
                <div class="tempo" id="tempo${pessoa.id}">${converterParaSegundos(pessoa.tempo)}</div>
            </div>
        </td>
    `;
}
