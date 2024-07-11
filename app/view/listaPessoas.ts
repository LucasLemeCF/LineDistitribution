
import { Pessoa } from "../models/pessoa.js";
import { caluculaTamanhoBarra, converterParaSegundos } from "../service/converterTempo.js";
import { pessoas } from "../util/dados.js";

export function criaListaPessoas(): void {
    const td = document.getElementById('tbody');
    pessoas.forEach((pessoa: Pessoa) => {
        td?td.innerHTML += adicionaHtml(pessoa):null;
    })
}

function adicionaHtml(pessoa: Pessoa): string {
    return `
    <div class="linha col align-items-center container" id="pessoa${pessoa.posicao}">
        `+ adicionaPessoa(pessoa) +`
    </div>
    `;
}

export function atualizarPessoaSubindo(pessoa: Pessoa): void {
    atualizarPessoa(pessoa, -1);
}

export function atualizarPessoaDescendo(pessoa: Pessoa): void {
    atualizarPessoa(pessoa, 1);
}

function atualizarPessoa(pessoa: Pessoa, movimento: number): void {
    const tr = document.getElementById('pessoa' + (pessoa.posicaoAnimacao + movimento));
    tr?tr.innerHTML = adicionaPessoa(pessoa):null;
}

function adicionaPessoa(pessoa: Pessoa): string {
    let borda = pessoa.estaCantando ? 'borda' : '';

    return `
        <div class="col-3">
            <img id="img${pessoa.id}" class="foto ${borda} rounded-circle mt-1 float-end" src="../img/${pessoa.nome}.jpg">
        </div>
        <div class="col-3">
            <div class="item">
                <div>${pessoa.nome}</div>
                <div class="tempo" id="tempo${pessoa.id}">${converterParaSegundos(pessoa.tempo)}</div>
            </div>
        </div>
        <div class="col-6">
            <div id="bar${pessoa.id}">
                <div class="progressBar" style="width: ${caluculaTamanhoBarra(pessoa.tempo)}%"></div>
            </div>
        </div>
    `;
}