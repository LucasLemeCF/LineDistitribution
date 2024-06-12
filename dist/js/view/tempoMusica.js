import { converterParaSegundos, converterParaTempo } from "../service/converterTempo.js";
import { musica } from "../util/dados.js";
export function adicionaTempoMusica() {
    const element = document.getElementById(`tempoMusica`);
    if (element !== null) {
        element.innerText = converterParaTempo(musica.tempoAtual);
    }
}
export function alteraTempoPessoa() {
    const element = document.getElementById(`tempo${musica.pessoaCantando().id}`);
    if (element !== null) {
        element.innerText = converterParaSegundos(musica.pessoaCantando().tempo);
    }
}
export function adicionarBorda(pessoa) {
    console.log(musica.pessoaCantando().id);
    const borda = document.getElementById(`img${pessoa.id}`);
    borda?.classList.add('borda');
}
export function removerBorda(pessoa) {
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
