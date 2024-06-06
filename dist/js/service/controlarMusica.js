import { musica } from '../util/dados.js';
import { adicionaTempoMusica } from '../view/tempoMusica.js';
import { controlarCronometro, pausarTodosCronometros } from './controlarCronometro.js';
export function iniciarMusica() {
    const intervalId = setInterval(() => {
        musica.incrementaTempoAtual();
        adicionaTempoMusica();
        controlarCronometro();
        // controlarSubirPosicao(tempoMusica);
        finalizaMusica(intervalId);
    }, 100);
}
function finalizaMusica(intervalId) {
    if (musica.tempoAtual == musica.tempoFinal) {
        pausarTodosCronometros();
        clearInterval(intervalId);
    }
}
