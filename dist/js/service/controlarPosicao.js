import { musica, pessoas } from "../util/dados.js";
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
                pessoaPosicaoAcima().descerPosicao();
                pessoa.subirPosicao();
                reorganizarPosPosicao();
                animarAtualizacao(pessoa.posicao);
            }
        });
    }
}
function reorganizarPosPosicao() {
    pessoas.sort((a, b) => a.posicao - b.posicao);
}
function animarAtualizacao(posicao) {
    const pessoaSubindo = document.getElementById("pessoa" + (posicao + 1).toString());
    const pessoaDescendo = document.getElementById("pessoa" + (posicao).toString());
    console.log("pessoa subindo: " + (posicao + 1).toString());
    console.log("pessoa descendo: " + (posicao).toString());
    pessoaSubindo?.classList.add('subindo');
    pessoaDescendo?.classList.add('descendo');
}
