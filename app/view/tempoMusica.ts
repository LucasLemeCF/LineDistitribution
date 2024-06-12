import { Pessoa } from "../models/pessoa.js";
import { converterParaSegundos, converterParaTempo } from "../service/converterTempo.js";
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

export function adicionarBorda(pessoa: Pessoa): void {
    console.log(musica.pessoaCantando().id)
    const borda = document.getElementById(`img${pessoa.id}`);
    borda?.classList.add('borda');
}

export function removerBorda(pessoa: Pessoa): void {
    const borda = document.getElementById(`img${pessoa.id}`);
    borda?.classList.remove('borda');
}

// export function adicionarBorda(): void {
//     console.log(musica.pessoaCantando().id)
//     const borda = document.getElementById(`img${musica.pessoaCantando().id}`);
//     borda?.classList.add('borda');
// }

// export function removerBorda(): void {
//     const borda = document.getElementById(`img${musica.pessoaCantando().id}`);
//     borda?.classList.remove('borda');
// }