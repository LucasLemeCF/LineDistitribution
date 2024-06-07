import { musica } from "../util/dados.js";
export function buscaPessoaPorId(id) {
    return musica.pessoas.find((pessoa) => pessoa.id == id);
}
export function buscaPessoaPosicaoAcima(pessoa) {
    let posicaoAcima = pessoa.posicao - 1;
    let pessoaPosicaoAcima = null;
    musica.pessoas.forEach((pessoa) => {
        if (pessoa.posicao == posicaoAcima) {
            pessoaPosicaoAcima = pessoa;
        }
    });
    return pessoaPosicaoAcima;
}
