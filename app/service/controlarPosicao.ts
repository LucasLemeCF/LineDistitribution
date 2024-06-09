import { Pessoa } from "../models/pessoa.js";
import { musica, pessoas } from "../util/dados.js";

export function controlarSubirPosicao(): void {
    if (cantorPassouPosicao()) {
        subirPosicao();
    }
}

function cantorPassouPosicao(): Boolean {
    if (musica.pessoaCantando() !== undefined && pessoaPosicaoAcima() !== undefined) {
        return musica.pessoaCantando().tempo >pessoaPosicaoAcima().tempo;
    }
}

function pessoaPosicaoAcima(): Pessoa {
    return pessoas.find((pessoa: Pessoa) => pessoa.posicao + 1 == musica.pessoaCantando().posicao);
}

function subirPosicao(): void {

    if (musica.pessoaCantando() !== undefined ) {
        pessoas.forEach((pessoa: Pessoa) => {
            if (pessoa.posicao > 0 && pessoa.posicao == musica.pessoaCantando().posicao) {
                pessoaPosicaoAcima().descerPosicao();
                pessoa.subirPosicao();
                reorganizarPosPosicao();
                animarAtualizacao(pessoa.posicao);
            }
        });
    }

}

function reorganizarPosPosicao(): void {
    pessoas.sort((a: Pessoa, b: Pessoa) => a.posicao - b.posicao);
}

function animarAtualizacao(posicao: number): void {
    const pessoaSubindo = document.getElementById("pessoa"+ (posicao+1).toString());
    const pessoaDescendo = document.getElementById("pessoa"+ (posicao).toString());

    console.log("pessoa subindo: "+ (posicao+1).toString())
    console.log("pessoa descendo: "+ (posicao).toString())

    pessoaSubindo?.classList.add('subindo');
    pessoaDescendo?.classList.add('descendo');
}