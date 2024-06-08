import { musica, pessoas } from '../util/dados.js';
import { adicionaTempoMusica } from '../view/tempoMusica.js';
import { controlarCronometro } from './controlarCronometro.js';
import { controlarSubirPosicao } from './controlarPosicao.js';
export function iniciarMusica() {
    const intervalId = setInterval(() => {
        if (!finalizaMusica(intervalId)) {
            adicionaTempoMusica();
            controlarCronometro();
            controlarSubirPosicao();
        }
        musica.incrementaTempoAtual();
    }, 100);
}
function finalizaMusica(intervalId) {
    if (musica.tempoAtual == musica.tempoFinal) {
        adicionaTempoMusica();
        resultadoFinal();
        clearInterval(intervalId);
        return true;
    }
    else {
        return false;
    }
}
function resultadoFinal() {
    console.log('Fim da música');
    pessoas.forEach((pessoa) => {
        console.log(pessoa.posicao + "º lugar " + pessoa.nome);
    });
    console.log(pessoas);
}
