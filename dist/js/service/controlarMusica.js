import { musica, pessoas } from '../util/dados.js';
import { atualizarPessoas } from '../view/listaPessoas.js';
import { adicionaTempoMusica } from '../view/tempoMusica.js';
import { controlarCronometro } from './controlarCronometro.js';
import { controlarSubirPosicao } from './controlarPosicao.js';
export function iniciarMusica() {
    const intervalId = setInterval(() => {
        if (!finalizaMusica(intervalId)) {
            atualizarPessoas();
            removeAnimacoes();
            adicionaTempoMusica();
            controlarCronometro();
            controlarSubirPosicao();
        }
        musica.incrementaTempoAtual();
    }, 1000);
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
function removeAnimacoes() {
    pessoas.forEach((pessoa) => {
        const div = document.getElementById("pessoa" + (pessoa.posicao).toString());
        div?.classList.remove('subindo');
        div?.classList.remove('descendo');
    });
}
