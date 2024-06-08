import { Pessoa } from "../models/pessoa.js";
import { pessoas } from "../util/dados.js";

export function buscaPessoaPorId(id: number): Pessoa {
    return pessoas.find((pessoa: Pessoa) => pessoa.id == id);
}

export function buscaPessoaPosicaoAcima(pessoa: Pessoa): Pessoa {
    let posicaoAcima = pessoa.posicao - 1;
    let pessoaPosicaoAcima: Pessoa = null;

    pessoas.forEach((pessoa: Pessoa) => {
        if (pessoa.posicao == posicaoAcima) {
            pessoaPosicaoAcima = pessoa;
        } 
   });

   return pessoaPosicaoAcima;
}