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
