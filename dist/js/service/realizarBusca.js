import { pessoas } from "../util/dados.js";
export function buscaPessoaPorId(id) {
    return pessoas.find((pessoa) => pessoa.id == id);
}
export function buscaPessoaPosicaoAcima(pessoa) {
    let posicaoAcima = pessoa.posicao - 1;
    let pessoaPosicaoAcima = null;
    pessoas.forEach((pessoa) => {
        if (pessoa.posicao == posicaoAcima) {
            pessoaPosicaoAcima = pessoa;
        }
    });
    return pessoaPosicaoAcima;
}
