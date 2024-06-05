import { converterParaTempo } from "../service/converterTempo.js";
export function adicionaTempoMusica(tempoMusica) {
    const element = document.getElementById(`tempoMusica`);
    if (element !== null) {
        element.innerText = converterParaTempo(tempoMusica);
    }
}
