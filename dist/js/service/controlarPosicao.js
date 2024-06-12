import { musica, pessoas } from "../util/dados.js";
export function controlarSubirPosicao() {
    if (cantorPassouPosicao()) {
        subirPosicao();
    }
}
function cantorPassouPosicao() {
    if (temAlguemCantando() && posicaoAcimaExiste()) {
        if (musica.pessoaCantando().id == 5) {
            console.log(musica.pessoaCantando().tempo, pessoaPosicaoAcima().nome);
        }
        return musica.pessoaCantando().tempo > pessoaPosicaoAcima().tempo;
    }
}
function temAlguemCantando() {
    return musica.pessoaCantando() !== undefined;
}
function posicaoAcimaExiste() {
    return pessoaPosicaoAcima() !== undefined;
}
function pessoaPosicaoAcima() {
    return pessoas.find((pessoa) => pessoa.posicao + 1 == musica.pessoaCantando().posicao);
}
function subirPosicao() {
    pessoas.forEach((pessoa) => {
        if (posicaoExiste(pessoa) && estaCantando(pessoa)) {
            pessoaPosicaoAcima().descerPosicao();
            pessoa.subirPosicao();
            musica.adicionaFilaAnimacao(pessoa);
        }
    });
}
function posicaoExiste(pessoa) {
    return pessoa.posicao > 0;
}
function estaCantando(pessoa) {
    return pessoa.posicao == musica.pessoaCantando().posicao;
}
