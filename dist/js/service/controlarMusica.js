import { musica, pessoas } from '../util/dados.js';
import { adicionaTempoMusica } from '../view/tempoMusica.js';
import { iniciarAnimacao } from './controlarAnimacao.js';
import { controlarCronometro } from './controlarCronometro.js';
import { controlarSubirPosicao } from './controlarPosicao.js';
export function iniciarMusica() {
    const intervalId = setInterval(() => {
        if (!finalizaMusica(intervalId)) {
            controlarCronometro();
            controlarSubirPosicao();
        }
        iniciarAnimacao();
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
    organizaPosicao();
    pessoas.forEach((pessoa) => {
        console.log(pessoa.posicao + "º lugar " + pessoa.nome);
    });
    console.log(pessoas);
    removeTodasAnimacoes();
}
function organizaPosicao() {
    pessoas.sort((a, b) => a.posicao - b.posicao);
}
function removeTodasAnimacoes() {
    pessoas.forEach((pessoa) => {
        const subindo = document.getElementById("pessoa" + (pessoa.id).toString());
        subindo?.classList.remove('subindo');
        subindo?.classList.remove('descendo');
    });
}
