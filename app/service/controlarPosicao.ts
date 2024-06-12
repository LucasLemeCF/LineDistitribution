import { Pessoa } from "../models/pessoa.js";
import { musica, pessoas } from "../util/dados.js";

export function controlarSubirPosicao(): void {
    if (cantorPassouPosicao()) {
        subirPosicao();
    }
}

function cantorPassouPosicao(): Boolean {
    if (temAlguemCantando() && posicaoAcimaExiste()) {
        if(musica.pessoaCantando().id == 5) {
             console.log(musica.pessoaCantando().tempo, pessoaPosicaoAcima().nome);
        }
       
        return musica.pessoaCantando().tempo > pessoaPosicaoAcima().tempo;
    }
}

function temAlguemCantando(): Boolean {
    return musica.pessoaCantando() !== undefined;
}

function posicaoAcimaExiste(): Boolean {
    return pessoaPosicaoAcima() !== undefined;
}

function pessoaPosicaoAcima(): Pessoa {
    return pessoas.find((pessoa: Pessoa) => pessoa.posicao + 1 == musica.pessoaCantando().posicao);
}

function subirPosicao(): void {
    pessoas.forEach((pessoa: Pessoa) => {
        if (posicaoExiste(pessoa) && estaCantando(pessoa)) {
            pessoaPosicaoAcima().descerPosicao();
            pessoa.subirPosicao();
            musica.adicionaFilaAnimacao(pessoa);
        }
    });
}

function posicaoExiste(pessoa: Pessoa): Boolean {
    return pessoa.posicao > 0;
}

function estaCantando(pessoa: Pessoa): Boolean {
    return pessoa.posicao == musica.pessoaCantando().posicao;
}