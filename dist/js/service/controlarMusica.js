import { musica } from '../util/dados.js';
import { adicionaTempoMusica } from '../view/tempoMusica.js';
import { controlarCronometro } from './controlarCronometro.js';
import { controlarSubirPosicao } from './subirPosicao.js';
export function iniciarMusica() {
    const intervalId = setInterval(() => {
        musica.incrementaTempoAtual();
        adicionaTempoMusica();
        controlarCronometro();
        controlarSubirPosicao();
        finalizaMusica(intervalId);
    }, 100);
}
function finalizaMusica(intervalId) {
    if (musica.tempoAtual == musica.tempoFinal) {
        clearInterval(intervalId);
    }
}
