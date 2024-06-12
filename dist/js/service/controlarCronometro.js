import { momentos, musica, pessoas } from "../util/dados.js";
import { adicionaTempoMusica, adicionarBorda, alteraBarraPessoa, alteraTempoPessoa, removerBorda } from "../view/tempoMusica.js";
export function controlarCronometro() {
    adicionaTempoMusica();
    pessoas.forEach(pessoa => {
        if (naoAcabouMomento()) {
            alteraPessoaCantando(pessoa);
            incrementaTempo(pessoa);
        }
    });
    if (acabouMomento()) {
        musica.incrementaMomentoAtual();
    }
}
function naoAcabouMomento() {
    return musica.momentoAtual < momentos.length;
}
function alteraPessoaCantando(pessoa) {
    if (comecouCantar(pessoa)) {
        pessoa.estaCantando = true;
        adicionarBorda(pessoa);
    }
    if (terminouCantar(pessoa)) {
        pessoa.estaCantando = false;
        removerBorda(pessoa);
    }
}
function incrementaTempo(pessoa) {
    if (pessoa.estaCantando) {
        pessoa.incrementaTempo();
        alteraTempoPessoa();
        alteraBarraPessoa();
    }
}
function comecouCantar(pessoa) {
    return musica.tempoAtual == momentos[musica.momentoAtual].inicio && pessoaCantando(pessoa);
}
function pessoaCantando(pessoa) {
    return pessoa.id == momentos[musica.momentoAtual].idPessoa;
}
function terminouCantar(pessoa) {
    return musica.tempoAtual == momentos[musica.momentoAtual].fim && pessoaCantando(pessoa);
}
function acabouMomento() {
    return musica.momentoAtual < momentos.length &&
        musica.tempoAtual == momentos[musica.momentoAtual].fim;
}
