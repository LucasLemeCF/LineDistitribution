import { momentos, musica, pessoas } from "../util/dados.js";
import { alteraTempo } from "../view/listaPessoas.js";
export function controlarCronometro() {
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
        console.log(pessoa.nome + ' começou a cantar em ' + pessoa.posicao + " lugar");
        pessoa.estaCantando = true;
    }
    if (terminouCantar(pessoa)) {
        console.log(pessoa.nome + ' parou de cantar em ' + pessoa.posicao + " lugar");
        pessoa.estaCantando = false;
    }
}
function incrementaTempo(pessoa) {
    if (pessoa.estaCantando) {
        pessoa.incrementaTempo();
        alteraTempo();
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
