
import { Pessoa } from "../models/pessoa.js";
import { converterParaSegundos } from "../service/converterTempo.js";
import { musica } from "../util/dados.js";

export function criaListaPessoas(): void {
    const td = document.getElementById('tbody');
    musica.pessoas.forEach((pessoa: Pessoa) => {
        td?td.innerHTML += adicionaHtml(pessoa):null;
    })
}

export function atualizarPessoas(): void {
    musica.pessoas.forEach((pessoa: Pessoa, index: number) => {
        const tr = document.getElementById('pessoa' + (index + 1) );
        tr?tr.innerHTML = adicionaHtml(pessoa):null;
    });
}

export function alteraTempo(): void {
    const element = document.getElementById(`tempo${musica.pessoaCantando.id}`);
    if (element !== null) {
        element.innerText = converterParaSegundos(musica.pessoaCantando.tempo.toString());
    }
}

function adicionaHtml(pessoa: Pessoa): string {
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