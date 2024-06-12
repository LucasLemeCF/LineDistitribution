import { Pessoa } from "../models/pessoa.js";
import { caluculaTamanhoBarra, converterParaSegundos, converterParaTempo } from "../service/converterTempo.js";
import { musica } from "../util/dados.js";

export function adicionaTempoMusica(): void {
    const element = document.getElementById(`tempoMusica`);

    if (element !== null) {
        element.innerText = converterParaTempo(musica.tempoAtual);
    }
}

export function alteraTempoPessoa(): void {
    const element = document.getElementById(`tempo${musica.pessoaCantando().id}`);
    if (element !== null) {
        element.innerText = converterParaSegundos(musica.pessoaCantando().tempo);
    }
}

export function alteraBarraPessoa(): void {
    const element = document.getElementById(`bar${musica.pessoaCantando().id}`);
    if (element !== null) {
        element.innerHTML = `<div class="progressBar" style="width: ${caluculaTamanhoBarra(musica.pessoaCantando().tempo)}%"></div>`;
    }
}

export function adicionarBorda(pessoa: Pessoa): void {
    const borda = document.getElementById(`img${pessoa.id}`);
    borda?.classList.add('borda');
}

export function removerBorda(pessoa: Pessoa): void {
    const borda = document.getElementById(`img${pessoa.id}`);
    borda?.classList.remove('borda');
}