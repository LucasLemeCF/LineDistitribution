import { Pessoa } from "../models/pessoa.js";
import { musica } from "../util/dados.js";

export function buscaPessoaPorId(id: number): Pessoa {
    return musica.pessoas.find((pessoa: Pessoa) => pessoa.id == id);
}

export function buscaPessoaPosicaoAcima(pessoa: Pessoa): Pessoa {
    let posicaoAcima = pessoa.posicao - 1;
    let pessoaPosicaoAcima: Pessoa = null;

    musica.pessoas.forEach((pessoa: Pessoa) => {
        if (pessoa.posicao == posicaoAcima) {
            pessoaPosicaoAcima = pessoa;
        } 
   });

   return pessoaPosicaoAcima;
}