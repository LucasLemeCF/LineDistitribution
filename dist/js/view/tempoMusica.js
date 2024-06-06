import { converterParaTempo } from "../service/converterTempo.js";
import { musica } from "../util/dados.js";
export function adicionaTempoMusica() {
    const element = document.getElementById(`tempoMusica`);
    if (element !== null) {
        element.innerText = converterParaTempo(musica.tempoAtual);
    }
}
