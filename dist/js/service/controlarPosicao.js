import { musica, pessoas } from "../util/dados.js";
import { atualizarPessoas } from "../view/listaPessoas.js";
export function controlarSubirPosicao() {
    if (cantorPassouPosicao()) {
        subirPosicao();
    }
}
function cantorPassouPosicao() {
    if (musica.pessoaCantando() !== undefined && pessoaPosicaoAcima() !== undefined) {
        return musica.pessoaCantando().tempo > pessoaPosicaoAcima().tempo;
    }
}
function pessoaPosicaoAcima() {
    return pessoas.find((pessoa) => pessoa.posicao + 1 == musica.pessoaCantando().posicao);
}
function subirPosicao() {
    if (musica.pessoaCantando() !== undefined) {
        pessoas.forEach((pessoa) => {
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
function reorganizarPosPosicao() {
    pessoas.sort((a, b) => a.posicao - b.posicao);
}
function animarAtualizacao(posicao) {
    const pessoaSubindo = document.getElementById("pessoa" + (posicao - 1).toString());
    const pessoaDescendo = document.getElementById("pessoa" + (posicao).toString());
    console.log("pessoa subindo: " + posicao.toString());
    console.log("pessoa descendo: " + (posicao - 1).toString());
    pessoaSubindo?.classList.add('subindo');
    pessoaDescendo?.classList.add('descendo');
    setTimeout(() => {
        pessoaSubindo?.classList.remove('subindo');
        pessoaDescendo?.classList.remove('descendo');
    }, 100);
}
