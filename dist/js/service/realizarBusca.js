import { pessoas } from "../util/dados.js";
export function buscaPessoaPorId(id) {
    return pessoas.find((pessoa) => pessoa.id === id) || null;
}
export function buscaPessoaPosicaoAcima(posicaoAtual) {
    let posicaoAcima = posicaoAtual - 1;
    let pessoaPosicaoAcima = null;
    pessoas.forEach((pessoa) => {
        if (pessoa.posicao == posicaoAcima) {
            pessoaPosicaoAcima = pessoa;
        }
    });
    return pessoaPosicaoAcima;
}
