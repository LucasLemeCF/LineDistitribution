import { Pessoa } from "../models/pessoa.js";
import { musica, pessoas } from "../util/dados.js";
import { atualizarPessoas } from "../view/listaPessoas.js";

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
                // const posicaoPessoaPosicaoAcima = pessoaPosicaoAcima().posicao;

                pessoaPosicaoAcima().descerPosicao();
                pessoa.subirPosicao();

                // console.log(pessoa.nome + ' subiu e está em ' + pessoa.posicao + " lugar");
               
                animarAtualizacao(pessoa.posicao);
                reorganizarPosPosicao();
                atualizarPessoas();
            }
        });
    }

}

function reorganizarPosPosicao(): void {
    pessoas.sort((a: Pessoa, b: Pessoa) => a.posicao - b.posicao);
}

function animarAtualizacao(posicao: number): void {
    const pessoaSubindo = document.getElementById("pessoa"+ (posicao-1).toString());
    const pessoaDescendo = document.getElementById("pessoa"+ (posicao).toString());

    console.log("pessoa subindo: "+ posicao.toString())
    console.log("pessoa descendo: "+ (posicao-1).toString())

    pessoaSubindo?.classList.add('subindo');
    pessoaDescendo?.classList.add('descendo');

    setTimeout(() => {
        pessoaSubindo?.classList.remove('subindo');
        pessoaDescendo?.classList.remove('descendo');
    }, 100);
}