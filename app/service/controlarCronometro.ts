import { Pessoa } from "../models/pessoa.js";
import { momentos, musica, pessoas } from "../util/dados.js";
import { adicionaTempoMusica, alteraTempoPessoa } from "../view/tempoMusica.js";

export function controlarCronometro(): void {
    adicionaTempoMusica();

    pessoas.forEach(pessoa => {
        if(naoAcabouMomento()) {
            alteraPessoaCantando(pessoa); 
            incrementaTempo(pessoa);
        }
    });

    if (acabouMomento()) {
        musica.incrementaMomentoAtual();
    }
}

function naoAcabouMomento(): Boolean {
    return musica.momentoAtual < momentos.length;

}

function alteraPessoaCantando(pessoa: Pessoa): void {
    if (comecouCantar(pessoa)) {
        pessoa.estaCantando = true;
    }

    if (terminouCantar(pessoa)) {
        pessoa.estaCantando = false;
    } 
}

function incrementaTempo(pessoa: Pessoa): void {
    if (pessoa.estaCantando) {
        pessoa.incrementaTempo();
        alteraTempoPessoa();
    }
}

function comecouCantar(pessoa: Pessoa): Boolean {
    return musica.tempoAtual == momentos[musica.momentoAtual].inicio && pessoaCantando(pessoa);
}

function pessoaCantando(pessoa: Pessoa): Boolean {
    return pessoa.id == momentos[musica.momentoAtual].idPessoa;
}

function terminouCantar(pessoa: Pessoa): Boolean {
    return musica.tempoAtual == momentos[musica.momentoAtual].fim && pessoaCantando(pessoa);
}

function acabouMomento(): Boolean {
    return musica.momentoAtual < momentos.length && 
        musica.tempoAtual == momentos[musica.momentoAtual].fim;
}